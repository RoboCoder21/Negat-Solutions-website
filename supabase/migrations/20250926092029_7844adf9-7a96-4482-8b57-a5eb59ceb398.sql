-- Create admin role system for secure contact submission access

-- 1. Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- 2. Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- 3. Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. Create security definer function to check admin role
-- This prevents infinite recursion in RLS policies
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_roles.user_id = is_admin.user_id
      AND role = 'admin'
  );
$$;

-- 5. Create RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
USING (public.is_admin());

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
USING (public.is_admin());

-- 6. Update contact_submissions RLS policy to admin-only access
DROP POLICY IF EXISTS "Only authenticated users can view contact submissions" ON public.contact_submissions;

CREATE POLICY "Only admins can view contact submissions"
ON public.contact_submissions
FOR SELECT
USING (public.is_admin());

-- 7. Ensure admins can also manage contact submissions if needed
CREATE POLICY "Admins can delete contact submissions"
ON public.contact_submissions
FOR DELETE
USING (public.is_admin());

-- 8. Insert admin role for the first authenticated user (you'll need to sign up first)
-- This will be executed when the first user authenticates
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if this is the first user (make them admin)
  IF NOT EXISTS (SELECT 1 FROM public.user_roles) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin');
  ELSE
    -- All subsequent users get 'user' role by default
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'user');
  END IF;
  RETURN NEW;
END;
$$;

-- 9. Create trigger to automatically assign roles on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
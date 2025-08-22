-- Add company field to contact submissions table
ALTER TABLE public.contact_submissions 
ADD COLUMN company TEXT;
-- Create content table for CMS functionality
CREATE TABLE public.content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_section text UNIQUE NOT NULL,
  content_text text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.content ENABLE ROW LEVEL SECURITY;

-- Create policies for content table
CREATE POLICY "Anyone can view content" ON public.content FOR SELECT USING (true);
CREATE POLICY "Only authenticated users can update content" ON public.content FOR UPDATE USING (auth.uid() IS NOT NULL);
CREATE POLICY "Only authenticated users can insert content" ON public.content FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_content_updated_at
  BEFORE UPDATE ON public.content
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial content
INSERT INTO public.content (page_section, content_text) VALUES
  ('hero-headline', 'Innovative Technology Solutions for the Future'),
  ('hero-subheadline', 'Negat Solutions delivers cutting-edge hardware integration and intelligent software automation to transform your business operations and enhance security protocols.'),
  ('about-content', 'At Negat Solutions, we combine years of expertise in hardware integration with advanced software development to deliver comprehensive technology solutions. Our team specializes in biometric security systems, AI-powered automation, and custom applications that drive efficiency and innovation across industries.');
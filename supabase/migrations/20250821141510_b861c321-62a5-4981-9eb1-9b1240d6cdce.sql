-- Insert default content for the website
INSERT INTO public.content (page_section, content_text) VALUES 
('hero-headline', 'Innovative Technology Solutions for the Future'),
('hero-subheadline', 'Negat Solutions delivers cutting-edge hardware integration and intelligent software automation to transform your business operations and enhance security protocols.'),
('about-content', 'At Negat Solutions, we combine years of expertise in hardware integration with advanced software development to deliver comprehensive technology solutions. Our team specializes in biometric security systems, AI-powered automation, and custom applications that drive efficiency and innovation across industries.')
ON CONFLICT (page_section) DO NOTHING;
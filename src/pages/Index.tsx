import React, { useEffect, useState } from 'react';
import { useContent } from '@/hooks/useContent';
import { supabase } from '@/integrations/supabase/client';
import ParticleBackground from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Server, 
  Shield, 
  Brain, 
  Clock, 
  Smartphone, 
  Zap
} from 'lucide-react';

const Index = () => {
  const { content, loading, getContentBySection } = useContent();
  const { toast } = useToast();
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Force dark mode for Negat Solutions branding
    document.documentElement.classList.add('dark');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to database
      const { error } = await supabase
        .from('contact_submissions')
        .insert({ 
          name: formData.name, 
          email: formData.email, 
          message: formData.message,
          company: formData.company || null
        });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', company: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FloatingIcon: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
    children, 
    className = '' 
  }) => (
    <div className={`absolute text-primary/20 float ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            Negat<span className="text-primary">Solutions</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-smooth">Home</a>
            <a href="#services" className="hover:text-primary transition-smooth">Services</a>
            <a href="#about" className="hover:text-primary transition-smooth">About</a>
            <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
            <Link to="/admin" className="hover:text-primary transition-smooth text-sm">Admin</Link>
          </div>
          <Button variant="default" className="animate-pulse-glow">
            Get a Consultation
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center hero-glow">
        <ParticleBackground />
        
        {/* Floating SVG Icons */}
        <FloatingIcon className="top-20 left-10">
          <Cpu size={60} />
        </FloatingIcon>
        <FloatingIcon className="top-32 right-16">
          <Server size={50} />
        </FloatingIcon>
        <FloatingIcon className="bottom-40 left-20">
          <Shield size={55} />
        </FloatingIcon>
        <FloatingIcon className="bottom-20 right-12">
          <Brain size={45} />
        </FloatingIcon>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {loading ? (
              <span className="animate-pulse bg-muted rounded h-16 w-full block"></span>
            ) : (
              getContentBySection('hero-headline') || 'Innovative Technology Solutions for the Future'
            )}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {loading ? (
              <span className="animate-pulse bg-muted rounded h-8 w-3/4 block mx-auto"></span>
            ) : (
              getContentBySection('hero-subheadline') || 
              'Negat Solutions delivers cutting-edge hardware integration and intelligent software automation to transform your business operations and enhance security protocols.'
            )}
          </p>
          <Button size="lg" className="text-lg px-8 py-3 animate-pulse-glow">
            Explore Our Solutions
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Solutions, Two Key Areas
            </h2>
          </div>

          {/* Main Service Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="glass-card group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-smooth">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Hardware Solutions</CardTitle>
                <CardDescription>
                  Cutting-edge hardware integration for security and efficiency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-smooth">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Software Solutions</CardTitle>
                <CardDescription>
                  Intelligent automation and custom applications
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Detailed Service Sections */}
          <div className="space-y-16">
            {/* Advanced Hardware Integration */}
            <div className="animate-slide-up">
              <h3 className="text-3xl font-bold text-center mb-12 text-primary">
                Advanced Hardware Integration
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Biometric Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Advanced fingerprint, facial recognition, and multi-factor authentication systems
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>AI-Powered Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Machine learning algorithms for threat detection and automated response systems
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Downtime Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Real-time monitoring and analytics to minimize operational downtime
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Intelligent Software & Automation */}
            <div className="animate-slide-up">
              <h3 className="text-3xl font-bold text-center mb-12 text-primary">
                Intelligent Software & Automation
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Custom Apps & Websites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Tailored mobile and web applications designed to meet your specific business requirements
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>AI Automation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Intelligent process automation using artificial intelligence to streamline operations
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Choose Negat?
          </h2>
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="bg-muted rounded h-6 w-full"></div>
                <div className="bg-muted rounded h-6 w-5/6 mx-auto"></div>
                <div className="bg-muted rounded h-6 w-4/5 mx-auto"></div>
              </div>
            ) : (
              <p>
                {getContentBySection('about-content') || 
                'At Negat Solutions, we combine years of expertise in hardware integration with advanced software development to deliver comprehensive technology solutions. Our team specializes in biometric security systems, AI-powered automation, and custom applications that drive efficiency and innovation across industries.'}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business with cutting-edge technology?
            </p>
          </div>

          <Card className="glass-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Submit Your Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full animate-pulse-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/30 border-t border-white/10 py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-2xl font-bold mb-4">
            Negat<span className="text-primary">Solutions</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Innovating technology solutions for tomorrow's challenges
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Negat Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

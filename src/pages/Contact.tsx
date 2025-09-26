import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#16191c', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
              Get In Touch
            </h2>
            <p className="text-xl" style={{ fontFamily: 'Inter, sans-serif', color: 'white' }}>
              Ready to transform your business with cutting-edge technology?
            </p>
          </div>
          <Card className="glass-card max-w-2xl mx-auto" style={{ backgroundColor: '#282421', color: 'white', fontFamily: 'Inter, sans-serif' }}>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Submit Your Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" style={{ color: 'white', fontFamily: 'Inter, sans-serif' }}>Name</Label>
                    <Input id="name" name="name" placeholder="Your full name" required style={{ color: 'white', fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" style={{ color: 'white', fontFamily: 'Inter, sans-serif' }}>Company</Label>
                    <Input id="company" name="company" placeholder="Your company" style={{ color: 'white', fontFamily: 'Inter, sans-serif' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" style={{ color: 'white', fontFamily: 'Inter, sans-serif' }}>Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@company.com" required style={{ color: 'white', fontFamily: 'Inter, sans-serif' }} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" style={{ color: 'white', fontFamily: 'Inter, sans-serif' }}>Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project requirements..." rows={4} required style={{ color: 'black', fontFamily: 'Inter, sans-serif' }} />
                </div>
                <Button type="submit" className="w-full animate-pulse-glow">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded text-white font-bold"
          style={{
            backgroundColor: '#ff7f00',
            boxShadow: '0 0 16px #ff7f00, 0 0 32px #ff7f00',
            textShadow: '0 0 8px #ff7f00',
            transition: 'all 0.3s',
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffa733';
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ff7f00';
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Contact;

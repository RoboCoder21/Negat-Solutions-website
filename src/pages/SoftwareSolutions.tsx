import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Brain } from 'lucide-react';

const SoftwareSolutions: React.FC = () => {
  return (
  <div className="min-h-screen py-20 px-4" style={{ backgroundColor: '#16191c', color: 'white' }}>
      <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <div style={{ color: '#ff7f00', textShadow: '0 0 16px #ff7f00, 0 0 32px #ff7f00' }}>
              <AnimatedText 
                text="Intelligent Software & Automation"
                type="glow"
                className="text-3xl font-bold text-center mb-12 font-orbitron"
                delay={200}
              />
            </div>
          </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="glass-card" style={{ backgroundColor: '#282421', color: 'white' }}>
            <CardHeader className="text-center">
              <Smartphone className="h-12 w-12 text-white mx-auto mb-4" />
              <CardTitle>Custom Apps & Websites</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-white text-center">
                  Tailored mobile and web applications for your business needs.
                </p>
            </CardContent>
          </Card>
          <Card className="glass-card" style={{ backgroundColor: '#282421', color: 'white' }}>
            <CardHeader className="text-center">
              <Brain className="h-12 w-12 text-white mx-auto mb-4" />
              <CardTitle>AI Automation</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-white text-center">
                  Intelligent automation to streamline your operations.
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutions;

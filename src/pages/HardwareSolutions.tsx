import React from 'react';
import Navbar from '@/components/Navbar';
import AnimatedText from '@/components/AnimatedText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Clock } from 'lucide-react';

const HardwareSolutions: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-20 px-4" style={{ backgroundColor: '#16191c', color: 'white' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <div style={{ color: '#ff7f00', textShadow: '0 0 16px #ff7f00, 0 0 32px #ff7f00' }}>
              <AnimatedText 
                text="Advanced Hardware Integration"
                type="glow"
                className="text-3xl font-bold text-center mb-12 font-orbitron"
                delay={200}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card" style={{ backgroundColor: '#282421', color: 'white' }}>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-white mx-auto mb-4" />
                <CardTitle>Biometric Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white text-center">
                  Advanced fingerprint, facial recognition, and multi-factor authentication systems
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card" style={{ backgroundColor: '#282421', color: 'white' }}>
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-white mx-auto mb-4" />
                <CardTitle>AI-Powered Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white text-center">
                   AI powered hardware solutions and automated response systems
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card" style={{ backgroundColor: '#282421', color: 'white' }}>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                <CardTitle>Downtime Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white text-center">
                  Real-time monitoring and analytics to minimize operational downtime
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-8 fixed bottom-0 left-0 w-full z-40">
        <button
          onClick={() => window.history.back()}
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

export default HardwareSolutions;

import React from 'react';
import Navbar from '@/components/Navbar';
import AnimatedText from '@/components/AnimatedText';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Brain } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Solutions: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: '#16191c', color: 'white' }}>
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-slide-up">
              <AnimatedText 
                text="Comprehensive Solutions, Two Key Areas"
                type="slide"
                className="text-4xl md:text-5xl font-bold mb-4 font-orbitron"
                delay={200}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Link to="/hardware" className="block">
                <Card className="glass-card group cursor-pointer" style={{ backgroundColor: '#282421', color: 'white' }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-smooth">
                      <Cpu className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl" style={{ color: '#ff7f00', textShadow: '0 0 16px #ff7f00, 0 0 32px #ff7f00' }}>Hardware Solutions</CardTitle>
                    <CardDescription className="text-white">
                      Biometric security, AI-powered protection, and downtime tracking.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/software" className="block">
                <Card className="glass-card group cursor-pointer" style={{ backgroundColor: '#282421', color: 'white' }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-smooth">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl" style={{ color: '#ff7f00', textShadow: '0 0 16px #ff7f00, 0 0 32px #ff7f00' }}>Software Solutions</CardTitle>
                    <CardDescription className="text-white">
                      Custom apps and AI automation for smarter business.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>
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
    </div>
  );
};

export default Solutions;

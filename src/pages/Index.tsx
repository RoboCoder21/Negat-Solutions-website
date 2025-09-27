import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import LogoSwitcher from '@/components/LogoSwitcher';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Cpu, Server, Shield, Brain } from 'lucide-react';

const FloatingIcon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`absolute text-primary/20 float ${className}`}>{children}</div>
);

const Index = () => {
  const navigate = useNavigate();
  const [headlineIndex, setHeadlineIndex] = React.useState(0);
  const headlines = [
    'Innovative Technology Solutions for the Future',
    'Better Solutions for a New Day',
  ];
  React.useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#16191c] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section Only */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center hero-glow px-2 sm:px-4">
        <ParticleBackground />
        {/* Floating SVG Icons - hide on small screens */}
        <div className="hidden md:block">
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
        </div>
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-2 sm:px-4 animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-white break-words">
            <AnimatedText 
              text={headlines[headlineIndex]}
              type="gradient"
              className="text-glow font-orbitron text-white"
              delay={0}
              speed={60}
              key={headlineIndex}
            />
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-8 leading-relaxed text-white">
            <AnimatedText 
              text={'Negat Solutions delivers cutting-edge hardware integration and intelligent software automation to transform your business operations and enhance security protocols.'}
              type="stagger"
              delay={0}
              speed={60}
              key={Date.now() + 1}
            />
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '3s' }}>
            <Button
              className="text-base sm:text-lg px-4 sm:px-8 py-3 animate-pulse-glow w-full max-w-xs mx-auto"
              onClick={() => navigate('/solutions')}
            >
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import React from 'react';

const About = () => (
  <div style={{ minHeight: '100vh', background: '#16191c', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-orbitron" style={{ textAlign: 'center' }}>
      Why Choose Negat?
    </h2>
    <div className="text-lg md:text-xl leading-relaxed" style={{ maxWidth: 700, textAlign: 'center', fontFamily: 'Inter, sans-serif', color: 'white' }}>
      <p>
        At Negat Solutions, we combine years of expertise in hardware integration with advanced software development to deliver comprehensive technology solutions. Our team specializes in biometric security systems, AI-powered automation, and custom applications that drive efficiency and innovation across industries.
      </p>
    </div>
  </div>
);

export default About;

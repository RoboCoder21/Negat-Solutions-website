import React from 'react';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#16191c', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-orbitron" style={{ textAlign: 'center' }}>
          Why Choose Nigat?
        </h2>
        <div className="text-lg md:text-xl leading-relaxed" style={{ maxWidth: 700, textAlign: 'center', fontFamily: 'Inter, sans-serif', color: 'white' }}>
          <p>
            At Nigat Solutions, we combine years of expertise in hardware integration with advanced software development to deliver comprehensive technology solutions. Our team specializes in biometric security systems, AI-powered automation, Design solutions, and custom applications that drive efficiency and innovation across industries.
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-8" style={{ background: '#16191c' }}>
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

export default About;

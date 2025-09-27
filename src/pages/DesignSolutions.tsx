import React from 'react';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';

const DesignSolutions: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-20 px-4" style={{ backgroundColor: '#16191c', color: 'white' }}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4 font-orbitron" style={{ color: '#ff7f00', textShadow: '0 0 16px #ff7f00, 0 0 32px #ff7f00' }}>
              Design Solutions: Key Features
            </h2>
            <ul className="text-lg md:text-xl leading-relaxed text-white list-disc list-inside mx-auto" style={{ maxWidth: 600 }}>
              <li>Brand identity and logo creation</li>
              <li>Event branding and promotional materials</li>
              <li>Print and digital design (flyers, posters, social media)</li>
              <li>Custom creative projects tailored to your needs</li>
              <li>UI/UX design for web and mobile applications</li>
            </ul>
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
    </div>
  );
};

export default DesignSolutions;

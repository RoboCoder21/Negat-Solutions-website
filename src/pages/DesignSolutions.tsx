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
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="glass-card p-6 text-center" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>Brand Identity & Logo Creation</h3>
                <p>Distinctive branding and logo design for your business.</p>
              </div>
              <div className="glass-card p-6 text-center" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>Event Branding & Promo Materials</h3>
                <p>Custom event branding and promotional collateral.</p>
              </div>
              <div className="glass-card p-6 text-center" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>Print & Digital Design</h3>
                <p>Flyers, posters, and social media graphics for all platforms.</p>
              </div>
              <div className="glass-card p-6 text-center" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>Custom Creative Projects</h3>
                <p>Unique creative solutions tailored to your needs.</p>
              </div>
              <div className="glass-card p-6 text-center md:col-span-2" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>UI/UX Design</h3>
                <p>Modern UI/UX for web and mobile applications.</p>
              </div>
            </div>
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

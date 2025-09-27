import React from 'react';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';

const AIAutomations: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-20 px-4" style={{ backgroundColor: '#16191c', color: 'white' }}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4 font-orbitron" style={{ color: '#ff7f00', textShadow: '0 0 16px #ff7f00, 0 0 32px #ff7f00' }}>
              AI Automations: Key Features
            </h2>
            <ul className="text-lg md:text-xl leading-relaxed text-white list-disc list-inside mx-auto" style={{ maxWidth: 600 }}>
              <li>Email and calendar management automation</li>
              <li>Intelligent agents for customer support</li>
              <li>Conversational AI for chatbots and virtual assistants</li>
              <li>Automated data entry and reporting</li>
              <li>Workflow automation for repetitive tasks</li>
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

export default AIAutomations;

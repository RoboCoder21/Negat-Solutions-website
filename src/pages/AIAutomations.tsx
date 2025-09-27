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
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="glass-card p-6 text-center" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>Email & Calendar Automation</h3>
                <p>Automate scheduling, reminders, and email management.</p>
              </div>
              <div className="glass-card p-6 text-center" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>Intelligent Agents</h3>
                <p>AI-powered customer support and virtual assistants.</p>
              </div>
              <div className="glass-card p-6 text-center" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>Conversational AI</h3>
                <p>Chatbots and voice assistants for seamless interaction.</p>
              </div>
              <div className="glass-card p-6 text-center" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>Automated Data Entry & Reporting</h3>
                <p>Reduce manual work with smart data automation.</p>
              </div>
              <div className="glass-card p-6 text-center md:col-span-2" style={{ backgroundColor: '#282421', color: 'white' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#ff7f00' }}>Workflow Automation</h3>
                <p>Streamline repetitive tasks and business processes.</p>
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

export default AIAutomations;

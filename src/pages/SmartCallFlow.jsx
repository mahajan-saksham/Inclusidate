import React from 'react';
import { ArrowLeft } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const SmartCallFlow = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-smoke">
      <div className="max-w-[420px] mx-auto min-h-screen bg-white shadow-xl">
        {/* Header */}
        <div className="bg-plum-gradient p-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-white hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft size={20} weight="bold" className="mr-2" />
            Back
          </button>
          
          <h1 className="text-2xl font-display font-bold text-white">
            Smart-Call
          </h1>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-plum-light/20 to-mint-light/20 
            rounded-bubble p-8 text-center animate-scale-in">
            <div className="text-5xl mb-4">📹</div>
            <p className="text-base text-text-primary leading-relaxed">
              Video calling with intelligent captioning and visual cues. 
              This flow will be implemented based on your next prompt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCallFlow;
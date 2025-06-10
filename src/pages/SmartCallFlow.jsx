import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SmartCallFlow = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full max-w-[390px] mx-auto bg-white">
      <div className="p-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-brandColor mb-6 hover:opacity-80"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        
        <h1 className="text-2xl font-heading font-bold mb-4">Smart-Call</h1>
        <p className="text-neutralText">
          Video calling with intelligent captioning and visual cues. 
          This flow will be implemented based on your next prompt.
        </p>
      </div>
    </div>
  );
};

export default SmartCallFlow;
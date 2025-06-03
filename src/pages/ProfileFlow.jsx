import React, { useState } from 'react';
import { ArrowLeft, Heart, X, HandWaving, Check } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const ProfileFlow = () => {
  const navigate = useNavigate();
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [badgeVisibility, setBadgeVisibility] = useState('afterMatch');
  const [isLiked, setIsLiked] = useState(false);
  const [isPassed, setIsPassed] = useState(false);

  // Mock user data
  const user = {
    name: "Dina",
    age: 28,
    signIntroGif: "https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif", // Placeholder GIF
    autoCaption: "Hi! I'm signing 'Nice to meet you' in ASL",
    about: "Product designer by day, potter by night. Fluent in ASL, sarcasm, and making the perfect matcha latte. Looking for someone who gets that silence can be golden ✨"
  };

  const handleLike = () => {
    setIsLiked(true);
    // Haptic feedback would go here
    setTimeout(() => setIsLiked(false), 300);
  };

  const handlePass = () => {
    setIsPassed(true);
    setTimeout(() => setIsPassed(false), 300);
  };

  const BadgeHandsHero = () => (
    <button
      onClick={() => setShowBadgeModal(true)}
      className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-coral to-coral-light 
        text-white text-sm font-medium shadow-soft hover:shadow-medium transition-all duration-200
        hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-coral/30"
    >
      <span className="mr-1">🖐️</span>
      <span>Hands-Hero</span>
    </button>
  );

  const CircleAction = ({ icon: Icon, kind, onClick, isActive }) => {
    const isLike = kind === 'like';
    
    return (
      <button
        onClick={onClick}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200
          ${isLike 
            ? 'bg-gradient-to-br from-coral to-coral-light shadow-medium hover:shadow-float' 
            : 'bg-white border-2 border-gray-300 shadow-soft hover:shadow-medium'
          }
          ${isActive ? 'scale-90' : 'scale-100'}
          hover:scale-110 active:scale-90 focus:outline-none focus:ring-4 
          ${isLike ? 'focus:ring-coral/30' : 'focus:ring-gray-300/30'}`}
      >
        <Icon 
          size={28} 
          weight="bold" 
          className={isLike ? 'text-white' : 'text-gray-600'}
        />
      </button>
    );
  };
  return (
    <div className="min-h-screen w-full bg-smoke overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
      
      <div className="relative max-w-[420px] mx-auto min-h-screen">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-white bg-black/20 backdrop-blur-md rounded-full 
              px-4 py-2 hover:bg-black/30 transition-colors"
          >
            <ArrowLeft size={20} weight="bold" className="mr-2" />
            Back
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex items-center justify-center min-h-screen p-6">
          <div className="w-[88%] max-w-[360px] bg-white rounded-2xl shadow-float overflow-hidden animate-scale-in">
            
            {/* Hero GIF Section */}
            <div className="relative h-[320px] overflow-hidden">
              <img 
                src={user.signIntroGif}
                alt={`Looping sign-language greeting from ${user.name}`}
                className="w-full h-full object-cover"
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/78 backdrop-blur-sm p-4">
                <p className="text-sm text-plum font-medium">
                  {user.autoCaption}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-6">
              {/* Badge */}
              <div className="flex justify-center">
                <BadgeHandsHero />
              </div>

              {/* Bio Block */}
              <div className="text-center">
                <h2 className="text-2xl font-display font-bold text-charcoal mb-3">
                  {user.name}, {user.age}
                </h2>
                <p className="text-base text-text-primary leading-relaxed">
                  {user.about}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center items-center gap-12">
                <CircleAction 
                  icon={X} 
                  kind="pass" 
                  onClick={handlePass}
                  isActive={isPassed}
                />
                <CircleAction 
                  icon={Heart} 
                  kind="like" 
                  onClick={handleLike}
                  isActive={isLiked}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Badge Visibility Modal */}
        {showBadgeModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowBadgeModal(false)}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-[420px] bg-white rounded-t-3xl p-6 
              animate-slide-up shadow-float">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
              
              <h3 className="text-xl font-display font-bold text-charcoal mb-6">
                When should this badge show?
              </h3>
              
              <div className="space-y-3 mb-6">
                {[
                  { label: "Always", value: "always" },
                  { label: "After match", value: "afterMatch" },
                  { label: "Never", value: "never" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setBadgeVisibility(option.value)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-200
                      ${badgeVisibility === option.value 
                        ? 'bg-honey-light text-charcoal font-medium shadow-soft' 
                        : 'bg-smoke hover:bg-smoke-dark'
                      }
                      min-h-[48px] focus:outline-none focus:ring-4 focus:ring-honey/30`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.label}</span>
                      {badgeVisibility === option.value && (
                        <Check size={20} weight="bold" className="text-plum" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              <p className="text-xs text-text-secondary text-center mb-6">
                You can change this anytime in Settings.
              </p>
              
              <button
                onClick={() => setShowBadgeModal(false)}
                className="w-full py-3 bg-plum-gradient text-white font-medium rounded-full
                  shadow-medium hover:shadow-float transition-all duration-200
                  hover:scale-105 active:scale-95"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileFlow;
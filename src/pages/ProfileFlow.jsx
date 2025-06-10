import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, X, HandWaving, Check, MapPin, Star, Play, Pause, CaretLeft, CaretRight } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const ProfileFlow = () => {
  const navigate = useNavigate();
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [badgeVisibility, setBadgeVisibility] = useState('afterMatch');
  const [isLiked, setIsLiked] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [expandedPrompt, setExpandedPrompt] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);

  // Enhanced user data with multiple media and more details
  const user = {
    name: "Dina",
    age: 28,
    distance: "2 miles away",
    media: [
      {
        type: "gif",
        url: "https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif",
        caption: "Hi! I'm signing 'Nice to meet you' in ASL",
        isSignLanguage: true
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
        caption: "At my favorite coffee shop",
        isSignLanguage: false
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
        caption: "Weekend hiking adventures",
        isSignLanguage: false
      }
    ],
    badges: [
      { id: 1, emoji: "🖐️", label: "Hands-Hero", type: "special" },
      { id: 2, emoji: "🎨", label: "Creative", type: "interest" },
      { id: 3, emoji: "☕", label: "Coffee Lover", type: "interest" },
      { id: 4, emoji: "🥾", label: "Hiking", type: "interest" }
    ],
    communicationPrefs: {
      signLanguage: "ASL (Fluent)",
      writtenLanguage: "English",
      videoCallComfort: "Love it!",
      preferredFirst: "Sign & Text"
    },    prompts: [
      {
        question: "My ideal first date",
        answer: "Coffee shop with good lighting for signing, followed by a walk in the park. Bonus points if you teach me a sign I don't know!"
      },
      {
        question: "I'm looking for",
        answer: "Someone who sees my deafness as part of who I am, not something to 'work around'. Also, must love bad puns in any language 😄"
      },
      {
        question: "Fun fact about me",
        answer: "I can feel music through vibrations and love going to concerts. My favorite spot is right by the bass speakers!"
      }
    ],
    about: "Product designer by day, potter by night. Fluent in ASL, sarcasm, and making the perfect matcha latte. Looking for someone who gets that silence can be golden ✨"
  };

  // Swipe gesture handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handlePass();
      setSwipeDirection('left');
    } else if (isRightSwipe) {
      handleLike();
      setSwipeDirection('right');
    }
  };

  useEffect(() => {
    if (swipeDirection) {
      setTimeout(() => setSwipeDirection(null), 300);
    }
  }, [swipeDirection]);
  const handleLike = () => {
    setIsLiked(true);
    setTimeout(() => setIsLiked(false), 300);
  };

  const handlePass = () => {
    setIsPassed(true);
    setTimeout(() => setIsPassed(false), 300);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % user.media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + user.media.length) % user.media.length);
  };

  const BadgeHandsHero = () => (
    <button
      onClick={() => setShowBadgeModal(true)}
      className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-coral to-coral-light 
        text-white text-xs font-medium shadow-soft hover:shadow-medium transition-all duration-200
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
        <div 
          className={`flex items-center justify-center min-h-screen p-6 transition-transform duration-300
            ${swipeDirection === 'left' ? '-translate-x-full rotate-12' : ''}
            ${swipeDirection === 'right' ? 'translate-x-full -rotate-12' : ''}`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="w-full max-w-[380px] bg-white rounded-3xl shadow-float overflow-hidden animate-scale-in">
            
            {/* Media Carousel */}
            <div className="relative h-[420px] overflow-hidden bg-gray-100">
              {/* Media Indicators */}
              <div className="absolute top-4 left-0 right-0 z-20 flex justify-center gap-1 px-4">
                {user.media.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 
                      ${index === currentMediaIndex ? 'bg-white' : 'bg-white/40'}`}
                  />
                ))}
              </div>
              {/* Media Content */}
              <div className="relative h-full">
                {user.media[currentMediaIndex].type === 'gif' ? (
                  <img 
                    src={user.media[currentMediaIndex].url}
                    alt={`Media from ${user.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={user.media[currentMediaIndex].url}
                    alt={`Photo from ${user.name}`}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Navigation Buttons */}
                <button
                  onClick={prevMedia}
                  className="absolute left-0 top-0 bottom-0 w-1/3 flex items-center justify-start pl-2
                    focus:outline-none group"
                >
                  <div className="bg-black/20 backdrop-blur-sm rounded-full p-2 opacity-0 
                    group-hover:opacity-100 transition-opacity">
                    <CaretLeft size={24} className="text-white" />
                  </div>
                </button>
                
                <button
                  onClick={nextMedia}
                  className="absolute right-0 top-0 bottom-0 w-1/3 flex items-center justify-end pr-2
                    focus:outline-none group"
                >
                  <div className="bg-black/20 backdrop-blur-sm rounded-full p-2 opacity-0 
                    group-hover:opacity-100 transition-opacity">
                    <CaretRight size={24} className="text-white" />
                  </div>
                </button>
              </div>
              {/* Caption Overlay */}
              {user.media[currentMediaIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center gap-2">
                    {user.media[currentMediaIndex].isSignLanguage && (
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
                        ASL
                      </span>
                    )}
                    <p className="text-sm text-white font-medium">
                      {user.media[currentMediaIndex].caption}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Scrollable Content */}
            <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
              {/* Basic Info Section */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-charcoal">
                      {user.name}, {user.age}
                    </h2>
                    <p className="text-sm text-text-secondary flex items-center gap-1 mt-1">
                      <MapPin size={16} className="text-coral" />
                      {user.distance}
                    </p>
                  </div>
                  <BadgeHandsHero />
                </div>

                {/* Interest Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {user.badges.filter(b => b.type === 'interest').map((badge) => (
                    <span
                      key={badge.id}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-honey-light
                        text-charcoal text-xs font-medium"
                    >
                      <span className="mr-1">{badge.emoji}</span>
                      {badge.label}
                    </span>
                  ))}
                </div>
                {/* About */}
                <p className="text-base text-text-primary leading-relaxed">
                  {user.about}
                </p>
              </div>

              {/* Communication Preferences */}
              <div className="px-6 py-4 bg-smoke-light">
                <h3 className="text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <HandWaving size={20} className="text-coral" />
                  Communication Style
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-text-secondary mb-1">Sign Language</p>
                    <p className="text-sm font-medium text-charcoal">{user.communicationPrefs.signLanguage}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-text-secondary mb-1">Written</p>
                    <p className="text-sm font-medium text-charcoal">{user.communicationPrefs.writtenLanguage}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-text-secondary mb-1">Video Calls</p>
                    <p className="text-sm font-medium text-charcoal">{user.communicationPrefs.videoCallComfort}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-text-secondary mb-1">First Date</p>
                    <p className="text-sm font-medium text-charcoal">{user.communicationPrefs.preferredFirst}</p>
                  </div>
                </div>
              </div>
              {/* Prompts */}
              <div className="p-6 space-y-4">
                {user.prompts.map((prompt, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-honey-light/50 to-coral-light/20 rounded-2xl p-4
                      cursor-pointer hover:shadow-soft transition-all duration-200"
                    onClick={() => setExpandedPrompt(expandedPrompt === index ? null : index)}
                  >
                    <p className="text-sm font-medium text-plum mb-2">{prompt.question}</p>
                    <p className={`text-base text-charcoal leading-relaxed transition-all duration-200
                      ${expandedPrompt === index ? '' : 'line-clamp-2'}`}>
                      {prompt.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons - Fixed at Bottom */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
              <div className="flex justify-center items-center gap-8">
                <CircleAction 
                  icon={X} 
                  kind="pass" 
                  onClick={handlePass}
                  isActive={isPassed}
                />
                <div className="text-center">
                  <p className="text-xs text-text-secondary mb-1">Swipe or tap</p>
                  <div className="flex gap-2 text-xs">
                    <span className="text-gray-500">←Pass</span>
                    <span className="text-coral">Like→</span>
                  </div>
                </div>
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
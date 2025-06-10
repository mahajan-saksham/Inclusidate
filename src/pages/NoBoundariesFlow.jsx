import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Sparkle, Star, Heart, Lightning, HandWaving, MapPin, 
  CaretRight, X, Target, Brain, Eye, MicrophoneStage, ShieldStar,
  CheckCircle, Butterfly, MagicWand, Trophy, Fire, Mountains,
  FlowerLotus, RocketLaunch, Handshake, FingerprintSimple, ArrowRight
} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { 
  SuperpowerHeroIllustration, 
  ConnectionIllustration, 
  CelebrationIllustration 
} from '../components/Illustrations';

// Progress Indicator Component
const ProgressIndicator = ({ currentStep, totalSteps }) => (
  <div className="flex justify-center gap-1.5 mb-6">
    {Array.from({ length: totalSteps }).map((_, index) => (
      <div
        key={index}
        className={`h-1 transition-all duration-300 rounded-full
          ${index === currentStep 
            ? 'w-8 bg-plum' 
            : index < currentStep 
              ? 'w-2 bg-plum/40' 
              : 'w-2 bg-gray-300'
          }`}
      />
    ))}
  </div>
);

// Modern Transformation Example Component
const TransformationExample = ({ oldWay, newWay, icon: Icon, isActive, index }) => (
  <div 
    className={`relative overflow-hidden rounded-bubble transition-all duration-700
      ${isActive 
        ? 'bg-white shadow-float scale-100 opacity-100' 
        : 'bg-white/40 shadow-soft scale-95 opacity-60'
      }`}
  >
    <div className="p-6">
      {/* Icon */}
      <div className="flex items-center justify-center mb-4">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
          ${isActive 
            ? 'bg-gradient-to-br from-plum to-coral shadow-medium scale-110' 
            : 'bg-smoke scale-100'
          }`}>
          <Icon size={32} weight="fill" className={isActive ? 'text-white' : 'text-text-muted'} />
        </div>
      </div>
      
      {/* Before state */}
      <div className={`transition-all duration-500 ${isActive ? 'mb-6' : 'mb-0'}`}>
        <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 text-center">
          Common Perspective
        </p>
        <p className="text-charcoal text-center italic opacity-70">
          "{oldWay}"
        </p>
      </div>
      
      {/* Transformation indicator - only show when active */}
      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex items-center justify-center my-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-plum animate-pulse" />
            <Sparkle size={20} weight="fill" className="text-plum animate-sparkle" />
            <div className="w-8 h-[2px] bg-gradient-to-r from-plum to-transparent animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* After state - only show when active */}
      <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-xs font-bold text-plum uppercase tracking-wider mb-2 text-center">
          Superpower Perspective
        </p>
        <p className="text-charcoal font-medium text-center">
          "{newWay}"
        </p>
      </div>
    </div>
  </div>
);

// Feature Card Component (matching Landing page style)
const FeatureCard = ({ icon: Icon, title, description, color, delay }) => (
  <div 
    className={`${color} rounded-bubble p-4 animate-scale-in`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
        <Icon size={24} weight="duotone" className="text-plum" />
      </div>
      <div className="flex-1">
        <h3 className="font-display font-bold text-charcoal text-base mb-1">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

// Question Card Component for Discovery screen
const QuestionCard = ({ icon: Icon, iconColor, bgColor, question, value, onChange, placeholder, index }) => (
  <div className={`animate-scale-in`} style={{ animationDelay: `${200 + index * 150}ms` }}>
    <div className={`${bgColor} rounded-bubble p-5`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
          <Icon size={24} weight="duotone" className={iconColor} />
        </div>
        <h3 className="font-display font-bold text-charcoal text-base">
          {question}
        </h3>
      </div>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full min-h-[100px] p-4 rounded-bubble border-2 border-white/50 bg-white/60
          focus:border-plum-light focus:bg-white transition-all outline-none resize-none
          text-charcoal placeholder-text-muted"
      />
      <div className="flex justify-end mt-2">
        <button className="text-plum hover:text-plum-light transition-colors p-2">
          <MicrophoneStage size={24} weight="fill" />
        </button>
      </div>
    </div>
  </div>
);

// Floating CTA Button Component
const FloatingCTA = ({ onClick, children, className = "", disabled = false }) => (
  <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] 
    bg-gradient-to-t from-white via-white to-white/95 backdrop-blur-sm 
    border-t border-smoke/20 z-20">
    <div className="px-6 py-4">
      <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`w-full bg-gradient-to-r text-white px-8 py-4 rounded-pill 
          font-bold text-lg shadow-float transform flex items-center justify-center gap-2
          ${disabled 
            ? 'from-gray-300 to-gray-400 cursor-not-allowed opacity-60' 
            : `hover:shadow-hover hover:scale-[1.02] transition-all active:scale-[0.98] ${className}`
          }`}
      >
        {children}
      </button>
    </div>
  </div>
);

// Superpower Profile Card Component
const SuperpowerProfileCard = ({ profile, onAction }) => {
  return (
    <div className="w-full bg-white rounded-bubble shadow-float overflow-hidden animate-scale-in">
      {/* Profile Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-display font-bold text-charcoal">
              {profile.name}, {profile.age}
            </h3>
            <p className="text-sm text-text-secondary flex items-center gap-1 mt-1">
              <MapPin size={16} weight="fill" />
              {profile.location}
            </p>
          </div>
          <div className="bg-gradient-to-r from-coral to-coral-light text-white px-3 py-1.5 
            rounded-pill text-xs font-bold shadow-medium flex items-center gap-1">
            <Lightning size={14} weight="fill" />
            SUPERPOWER
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="px-6 pb-6 space-y-4">
        {/* Superpower Section */}
        <div className="bg-honey-light/20 rounded-bubble p-4">
          <h4 className="text-xs font-bold text-plum uppercase tracking-wider mb-2 flex items-center gap-2">
            <Lightning size={16} weight="fill" />
            My Superpower
          </h4>
          <p className="text-charcoal leading-relaxed">
            {profile.superpower}
          </p>
        </div>

        {/* Mastered Skills */}
        <div>
          <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
            <Trophy size={16} weight="fill" />
            Skills I've Mastered
          </h4>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1.5 bg-smoke rounded-pill text-sm text-charcoal">
                <CheckCircle size={14} weight="fill" className="text-mint mr-1" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Looking For */}
        <div className="pt-4 border-t border-smoke-dark">
          <p className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
            <Heart size={16} weight="fill" className="text-coral mt-0.5 flex-shrink-0" />
            {profile.lookingFor}
          </p>
        </div>
      </div>
    </div>
  );
};

const NoBoundariesFlow = () => {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState('intro');
  const [superpowerData, setSuperpowerData] = useState({
    challenge: '',
    skill: '',
    perspective: ''
  });
  const [activeExample, setActiveExample] = useState(0);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Mock profiles
  const mockProfiles = [
    {
      id: 1,
      name: 'Alex',
      age: 29,
      location: '2 miles away',
      superpower: "After losing my hearing at 16, I developed incredible visual awareness and can read people's emotions through their body language like a book",
      skills: ['Sign language poetry', 'Vibration-based music', 'Silent communication'],
      lookingFor: 'Looking for someone who appreciates the beauty of silence and understands that communication goes beyond words'
    },
    {
      id: 2,
      name: 'Jordan',
      age: 27,
      location: '5 miles away',
      superpower: "Living with ADHD taught me to think in creative patterns and hyperfocus on solving problems others might miss",
      skills: ['Creative problem solving', 'Pattern recognition', 'Multitasking mastery'],
      lookingFor: 'Seeking someone who loves spontaneous adventures and can appreciate my unique way of seeing the world'
    },
    {
      id: 3,
      name: 'Sam',
      age: 31,
      location: '3 miles away',
      superpower: "Being on the autism spectrum gives me the ability to notice patterns and details others miss, making me an incredible problem solver",
      skills: ['Detail-oriented thinking', 'Systems analysis', 'Deep focus abilities'],
      lookingFor: 'Want to meet someone who values authenticity and appreciates direct, honest communication'
    }
  ];

  const [profiles] = useState(mockProfiles);

  // Examples for How It Works screen
  const examples = [
    {
      oldWay: "I'm in a wheelchair",
      newWay: "I've mastered creative navigation and see the world from a unique perspective that helps others discover hidden accessible gems",
      icon: Mountains
    },
    {
      oldWay: "I have ADHD",
      newWay: "My brain works like a supercomputer - I can juggle multiple ideas at once and make creative connections others miss",
      icon: Brain
    },
    {
      oldWay: "I'm autistic",
      newWay: "I experience the world in high definition and bring laser focus to everything I'm passionate about",
      icon: FingerprintSimple
    }
  ];

  // Auto-cycle examples with pause on hover
  useEffect(() => {
    if (currentScreen === 'how-it-works' && !isPaused) {
      const interval = setInterval(() => {
        setActiveExample((prev) => (prev + 1) % examples.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentScreen, examples.length, isPaused]);

  const handleSuperpowerInput = (field, value) => {
    setSuperpowerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProfileAction = (action, profileId) => {
    if (action === 'pass' || action === 'curious') {
      setSwipeDirection(action === 'pass' ? 'left' : 'right');
      setTimeout(() => {
        if (currentProfileIndex < profiles.length - 1) {
          setCurrentProfileIndex(prev => prev + 1);
        }
        setSwipeDirection(null);
      }, 300);
    } else if (action === 'amazed') {
      setSwipeDirection('match');
      setTimeout(() => {
        if (currentProfileIndex < profiles.length - 1) {
          setCurrentProfileIndex(prev => prev + 1);
        }
        setSwipeDirection(null);
      }, 300);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'intro':
        return (
          <div className="min-h-screen w-full bg-smoke overflow-hidden">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />
            
            <div className="relative max-w-[420px] mx-auto min-h-screen bg-white shadow-xl">
              {/* Hero Section */}
              <div className="relative bg-honey-gradient overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-plum/10 rounded-full blur-3xl" />
                
                {/* Content */}
                <div className="relative px-8 pt-12 pb-12 text-center">
                  {/* Logo/Icon */}
                  <div className="mb-6 animate-bounce-soft">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 rounded-3xl shadow-honey">
                      <Lightning size={40} weight="duotone" className="text-plum" />
                    </div>
                  </div>
                  
                  <h1 className="text-3xl font-display font-bold text-charcoal mb-3 animate-fade-up">
                    Date Without<br />Boundaries
                  </h1>
                  
                  <p className="text-base text-charcoal/80 animate-fade-up animation-delay-150">
                    Transform challenges into<br />
                    <span className="text-plum font-bold">superpowers</span>
                  </p>
                  
                  {/* Floating decoration */}
                  <div className="absolute top-8 right-8 animate-float">
                    <Star size={24} weight="fill" className="text-coral/40" />
                  </div>
                  <div className="absolute bottom-12 left-12 animate-float animation-delay-300">
                    <Sparkle size={20} weight="fill" className="text-plum/30" />
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="px-6 pt-8">
                <ProgressIndicator currentStep={0} totalSteps={3} />
              </div>

              {/* Features Section */}
              <div className="px-6 pt-4 pb-32"> {/* Added padding bottom for floating CTA */}
                <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-5">
                  How It Works
                </h2>
                
                <div className="space-y-4">
                  <FeatureCard
                    icon={MagicWand}
                    title="Transform Your Story"
                    description="Reframe challenges as unique strengths that make you extraordinary"
                    color="bg-honey-light/20 hover:bg-honey-light/30"
                    delay={400}
                  />
                  
                  <FeatureCard
                    icon={Handshake}
                    title="Connect Authentically"
                    description="Match with people who appreciate and celebrate the real you"
                    color="bg-plum-light/20 hover:bg-plum-light/30"
                    delay={500}
                  />
                  
                  <FeatureCard
                    icon={RocketLaunch}
                    title="Break All Boundaries"
                    description="Experience dating without limits, filters, or judgment"
                    color="bg-mint-light/20 hover:bg-mint-light/30"
                    delay={600}
                  />
                </div>
              </div>

              {/* Floating CTA */}
              <FloatingCTA
                onClick={() => setCurrentScreen('discovery')}
                className="from-plum to-plum-light"
              >
                Get Started
                <CaretRight size={20} weight="bold" />
              </FloatingCTA>
            </div>
          </div>
        );

      case 'how-it-works':
        return (
          <div className="min-h-screen w-full bg-smoke overflow-hidden">
            <div className="fixed inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
            
            <div className="relative max-w-[420px] mx-auto min-h-screen bg-white shadow-xl">
              {/* Hero Section with gradient - Updated to honey */}
              <div className="relative bg-honey-gradient overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                
                {/* Back button */}
                <div className="relative p-4">
                  <button
                    onClick={() => setCurrentScreen('intro')}
                    className="flex items-center text-charcoal hover:text-charcoal/70 transition-colors"
                  >
                    <ArrowLeft size={20} weight="bold" className="mr-2" />
                    Back
                  </button>
                </div>
                
                {/* Hero content */}
                <div className="relative px-8 pt-4 pb-12 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/30 rounded-3xl backdrop-blur-sm animate-pulse-glow">
                      <Star size={40} weight="fill" className="text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-2 animate-fade-up">
                    Transform Your Story
                  </h2>
                  <p className="text-base text-charcoal/80 animate-fade-up animation-delay-150">
                    See your challenges through a new lens
                  </p>
                  
                  {/* Simple floating decoration */}
                  <div className="absolute top-8 right-8 animate-float">
                    <Sparkle size={20} weight="fill" className="text-white/40" />
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="px-6 pt-6">
                <ProgressIndicator currentStep={1} totalSteps={4} />
              </div>

              {/* Content */}
              <div className="px-6 pt-4 pb-32"> {/* Added padding bottom for floating CTA */}
                {/* Progress dots */}
                <div className="flex justify-center gap-2 mb-8">
                  {examples.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveExample(index)}
                      className={`transition-all duration-300 rounded-full
                        ${activeExample === index 
                          ? 'w-8 h-2 bg-charcoal' 
                          : 'w-2 h-2 bg-charcoal/30 hover:bg-charcoal/50'
                        }`}
                    />
                  ))}
                </div>
                
                {/* Examples Carousel */}
                <div 
                  className="relative mb-8"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Cards container */}
                  <div className="relative h-[280px] flex items-center justify-center">
                    {examples.map((example, index) => (
                      <div
                        key={index}
                        className={`absolute w-full max-w-[320px] transition-all duration-700
                          ${index === activeExample 
                            ? 'opacity-100 scale-100 z-10' 
                            : index === (activeExample - 1 + examples.length) % examples.length
                              ? 'opacity-0 -translate-x-full scale-90 z-0'
                              : 'opacity-0 translate-x-full scale-90 z-0'
                          }`}
                      >
                        <TransformationExample
                          oldWay={example.oldWay}
                          newWay={example.newWay}
                          icon={example.icon}
                          isActive={activeExample === index}
                          index={index}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation hint */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 flex items-center gap-2 text-charcoal/60">
                    <div className="w-4 h-4 rounded-full border border-charcoal/30 flex items-center justify-center">
                      <div className="w-2 h-2 bg-charcoal/60 rounded-full animate-pulse" />
                    </div>
                    <span className="text-xs">Auto-playing</span>
                  </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="relative bg-charcoal/10 backdrop-blur-sm rounded-bubble p-6 
                  text-center overflow-hidden animate-fade-up animation-delay-600">
                  {/* Background decoration */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-charcoal/10 rounded-full blur-2xl" />
                  
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 
                      bg-white/80 backdrop-blur-sm rounded-2xl shadow-medium mb-3">
                      <Trophy size={28} weight="fill" className="text-plum" />
                    </div>
                    <p className="text-base font-display font-bold text-charcoal mb-1">
                      Everyone has a superpower
                    </p>
                    <p className="text-sm text-charcoal/80">
                      Let's discover yours
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating CTA */}
              <FloatingCTA
                onClick={() => setCurrentScreen('discovery')}
                className="from-plum to-plum-light"
              >
                Discover My Superpower
                <MagicWand size={20} weight="bold" />
              </FloatingCTA>
            </div>
          </div>
        );

      case 'discovery':
        return (
          <div className="min-h-screen w-full bg-smoke overflow-hidden">
            <div className="fixed inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
            
            <div className="relative max-w-[420px] mx-auto min-h-screen bg-white shadow-xl">
              {/* Hero Section with gradient - Updated to honey */}
              <div className="relative bg-honey-gradient overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                
                {/* Header with back and skip */}
                <div className="relative p-4 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentScreen('intro')}
                    className="flex items-center text-charcoal hover:text-charcoal/70 transition-colors"
                  >
                    <ArrowLeft size={20} weight="bold" className="mr-2" />
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentScreen('matching')}
                    className="text-charcoal/60 hover:text-charcoal transition-colors text-sm"
                  >
                    Skip for now
                  </button>
                </div>
                
                {/* Hero content */}
                <div className="relative px-8 pt-4 pb-12 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/30 rounded-3xl backdrop-blur-sm animate-pulse-glow">
                      <Star size={40} weight="fill" className="text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-2 animate-fade-up">
                    Discover Your Superpower
                  </h2>
                  <p className="text-base text-charcoal/80 animate-fade-up animation-delay-150">
                    Your story is your strength
                  </p>
                  
                  {/* Simple floating decoration */}
                  <div className="absolute top-8 right-8 animate-float">
                    <Lightning size={20} weight="fill" className="text-white/40" />
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="px-6 pt-6">
                <ProgressIndicator currentStep={1} totalSteps={3} />
              </div>

              {/* Content */}
              <div className="px-6 pt-4 pb-32"> {/* Added padding bottom for floating CTA */}
                <div className="space-y-4">
                  {/* Questions */}
                  <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider">
                    Tell Your Story
                  </h3>

                  {/* Challenge Question */}
                  <QuestionCard
                    icon={Target}
                    iconColor="text-coral"
                    bgColor="bg-coral-light/20"
                    question="What challenge taught you the most?"
                    value={superpowerData.challenge}
                    onChange={(e) => handleSuperpowerInput('challenge', e.target.value)}
                    placeholder="Growing up with..."
                    index={0}
                  />

                  {/* Skill Question - Progressive reveal */}
                  {superpowerData.challenge && (
                    <QuestionCard
                      icon={Lightning}
                      iconColor="text-honey"
                      bgColor="bg-honey-light/20"
                      question="What unique skills did you develop?"
                      value={superpowerData.skill}
                      onChange={(e) => handleSuperpowerInput('skill', e.target.value)}
                      placeholder="I became amazing at..."
                      index={1}
                    />
                  )}

                  {/* Perspective Question - Progressive reveal */}
                  {superpowerData.skill && (
                    <QuestionCard
                      icon={Eye}
                      iconColor="text-mint"
                      bgColor="bg-mint-light/20"
                      question="How do you see the world differently?"
                      value={superpowerData.perspective}
                      onChange={(e) => handleSuperpowerInput('perspective', e.target.value)}
                      placeholder="My perspective is unique because..."
                      index={2}
                    />
                  )}
                </div>

                {/* Helper text for CTA */}
                {!superpowerData.perspective && (
                  <p className="text-center text-sm text-text-muted mt-6 px-4">
                    Complete all questions to create your power profile
                  </p>
                )}

                {/* Inspiration prompt */}
                {!superpowerData.challenge && (
                  <div className="mt-8 bg-plum-light/10 rounded-bubble p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
                      <Sparkle size={24} weight="duotone" className="text-plum" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">
                        Need inspiration?
                      </p>
                      <p className="text-sm text-charcoal leading-relaxed">
                        Think about a time when you had to adapt, overcome, or see things differently. 
                        What strength did you discover in yourself?
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating CTA - Always visible, disabled when incomplete */}
              <FloatingCTA
                onClick={() => setCurrentScreen('matching')}
                className="from-plum to-plum-light"
                disabled={!superpowerData.perspective}
              >
                Create My Power Profile
                <ShieldStar size={20} weight="fill" />
              </FloatingCTA>
            </div>
          </div>
        );

      case 'matching':
        return (
          <div className="min-h-screen w-full bg-smoke overflow-hidden">
            <div className="fixed inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
            
            <div className="relative max-w-[420px] mx-auto min-h-screen bg-white shadow-xl">
              {/* Simplified Header */}
              <div className="bg-white border-b border-smoke p-4 flex items-center justify-between">
                <button 
                  onClick={() => navigate('/')}
                  className="text-charcoal hover:text-text-secondary transition-colors"
                >
                  <ArrowLeft size={24} weight="bold" />
                </button>
                <h3 className="text-lg font-display font-bold text-charcoal">
                  Superpower Matches
                </h3>
                <div className="w-6" /> {/* Spacer for centering */}
              </div>

              {/* Content Container */}
              <div className="px-6 pt-6 pb-40"> {/* Extra padding bottom for floating buttons */}
                {/* Progress */}
                <ProgressIndicator currentStep={2} totalSteps={3} />

                {/* Ready message */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-display font-bold text-charcoal mb-2">
                    Ready to meet amazing people?
                  </h2>
                  <p className="text-sm text-text-secondary">
                    Swipe or tap to connect with superpowers
                  </p>
                </div>

                {/* Profile Container */}
                {currentProfileIndex < profiles.length ? (
                  <div className={`transition-all duration-300 ${
                    swipeDirection === 'left' ? 'translate-x-[-150%] rotate-[-30deg] opacity-0' : ''
                  } ${
                    swipeDirection === 'right' ? 'translate-x-[150%] rotate-[30deg] opacity-0' : ''
                  } ${
                    swipeDirection === 'match' ? 'scale-110 opacity-0' : ''
                  }`}>
                    <SuperpowerProfileCard
                      profile={profiles[currentProfileIndex]}
                      onAction={handleProfileAction}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center min-h-[400px]">
                    <div className="bg-white rounded-card shadow-soft p-12 text-center animate-scale-in">
                      <div className="mb-6 h-48">
                        <CelebrationIllustration className="w-full h-full" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-charcoal mb-2">
                        You're amazing!
                      </h3>
                      <p className="text-text-secondary mb-6">
                        You've seen all the superpowers for now.<br />
                        Check back later for more incredible stories!
                      </p>
                      <button
                        onClick={() => navigate('/')}
                        className="bg-plum-gradient text-white px-6 py-3 rounded-pill font-medium 
                          shadow-medium hover:shadow-float transition-all hover:scale-105 active:scale-95"
                      >
                        Back to Home
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Action Buttons */}
              {currentProfileIndex < profiles.length && (
                <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] 
                  bg-gradient-to-t from-white via-white to-white/95 backdrop-blur-sm 
                  border-t border-smoke/20 z-20">
                  <div className="px-6 py-4 space-y-3">
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleProfileAction('pass', profiles[currentProfileIndex].id)}
                        className="flex-1 bg-white border-2 border-smoke-dark text-text-secondary 
                          py-3 px-4 rounded-pill font-semibold shadow-soft hover:shadow-medium 
                          hover:border-gray-300 transition-all hover:scale-105 active:scale-95 
                          flex items-center justify-center gap-2"
                      >
                        <X size={20} weight="bold" />
                        Pass
                      </button>
                      
                      <button
                        onClick={() => handleProfileAction('amazed', profiles[currentProfileIndex].id)}
                        className="flex-1 bg-gradient-to-r from-coral to-coral-light text-white 
                          py-3 px-4 rounded-pill font-semibold shadow-medium hover:shadow-float 
                          transition-all hover:scale-105 active:scale-95 flex items-center 
                          justify-center gap-2"
                      >
                        <Heart size={20} weight="fill" />
                        Amazed
                      </button>
                    </div>
                    
                    <button
                      onClick={() => handleProfileAction('curious', profiles[currentProfileIndex].id)}
                      className="w-full bg-gradient-to-r from-mint to-mint-light text-white 
                        py-3 px-4 rounded-pill font-semibold shadow-medium hover:shadow-float 
                        transition-all hover:scale-105 active:scale-95 flex items-center 
                        justify-center gap-2"
                    >
                      <Star size={20} weight="fill" />
                      Tell Me More
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderScreen();
};

export default NoBoundariesFlow;
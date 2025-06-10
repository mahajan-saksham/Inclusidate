import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Medal, Infinity, BookOpen, Heart, Sparkle, HandsClapping,
  Timer, ChatCircleText, TextAlignLeft, BellSlash, Lightning,
  Brain, Question, Newspaper, Star
} from 'phosphor-react';

const Landing = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const problems = [
    { 
      id: 1, 
      icon: Timer,
      iconColor: "text-coral", 
      title: "Caption Fatigue", 
      description: "Auto-captions drain focus",
      color: "bg-coral-light/20 hover:bg-coral-light/30"
    },
    { 
      id: 2, 
      icon: Question,
      iconColor: "text-plum", 
      title: "Disclosure Anxiety", 
      description: "When do I reveal I'm Deaf?",
      color: "bg-plum-light/20 hover:bg-plum-light/30"
    },
    { 
      id: 3, 
      icon: TextAlignLeft,
      iconColor: "text-mint", 
      title: "Text-Only First Impressions", 
      description: "Missing the full picture",
      color: "bg-mint-light/20 hover:bg-mint-light/30"
    },
    { 
      id: 4, 
      icon: BellSlash,
      iconColor: "text-honey", 
      title: "Missed Audio Alerts", 
      description: "Important notifications lost",
      color: "bg-honey-light/20 hover:bg-honey-light/30"
    },
    { 
      id: 5, 
      icon: Star,
      iconColor: "text-coral", 
      title: "Negative Framing", 
      description: "Changing the narrative",
      color: "bg-coral-light/20 hover:bg-coral-light/30"
    }
  ];

  const flowButtons = [
    { 
      id: 1, 
      label: "No Boundaries", 
      subtitle: "Connect beyond limits",
      icon: Infinity, 
      route: "/no-boundaries",
      gradient: "bg-gradient-to-br from-mint to-plum-light hover:shadow-bumble"
    },
    { 
      id: 2, 
      label: "Profile Super-Power", 
      subtitle: "Stand out authentically",
      icon: Medal, 
      route: "/profile-flow",
      gradient: "bg-honey-gradient hover:shadow-honey"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-smoke overflow-hidden">
      {/* Background mesh gradient */}
      <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />
      
      {/* Content container */}
      <div className="relative max-w-[420px] mx-auto min-h-screen bg-white shadow-xl">
        
        {/* Hero Section */}
        <div className="relative bg-honey-gradient overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-plum/10 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="relative px-8 pt-12 pb-16 text-center">
            {/* Logo/Icon */}
            <div className="mb-6 animate-bounce-soft">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 rounded-3xl shadow-honey">
                <HandsClapping size={40} weight="duotone" className="text-plum" />
              </div>
            </div>
            
            <h1 className="text-4xl font-display font-bold text-charcoal mb-3 animate-fade-up">
              Date Without<br />Barriers
            </h1>
            
            <p className="text-lg text-charcoal/80 font-medium animate-fade-up animation-delay-150">
              2 micro-flows that turn<br />
              inclusion into <span className="text-plum font-bold">attraction</span>
            </p>
            
            {/* Floating hearts decoration */}
            <div className="absolute top-8 right-8 animate-float">
              <Heart size={24} weight="fill" className="text-coral/40" />
            </div>
            <div className="absolute bottom-12 left-12 animate-float animation-delay-300">
              <Sparkle size={20} weight="fill" className="text-plum/30" />
            </div>
          </div>
        </div>

        {/* Get Started Section - Moved Above */}
        <div className="px-6 pt-8 pb-4">
          <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-5">
            Get Started
          </h2>
          
          <div className="space-y-4">
            {flowButtons.map((button, index) => {
              const Icon = button.icon;
              const isHovered = hoveredButton === button.id;
              
              return (
                <button
                  key={button.id}
                  onClick={() => navigate(button.route)}
                  onMouseEnter={() => setHoveredButton(button.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`relative group ${button.gradient} text-white rounded-bubble 
                    w-full min-h-[140px] p-5 shadow-medium transition-all duration-300
                    ${isHovered ? 'scale-105' : 'scale-100'}
                    hover:shadow-float active:scale-95
                    flex flex-col items-start justify-between
                    animate-scale-in overflow-hidden`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full 
                    -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Icon with number */}
                  <div className="flex items-start justify-between w-full">
                    <Icon 
                      size={28} 
                      weight={isHovered ? "fill" : "duotone"}
                      className="transition-all duration-300"
                    />
                    <span className="text-xs font-bold opacity-60">
                      {`0${button.id}`}
                    </span>
                  </div>
                  
                  {/* Label and subtitle */}
                  <div className="text-left">
                    <h3 className="font-display font-bold text-base mb-1">
                      {button.label}
                    </h3>
                    <p className="text-xs opacity-90">
                      {button.subtitle}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className={`absolute bottom-3 right-3 w-2 h-2 bg-white rounded-full
                    transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Problem Section - Moved Below */}
        <div className="px-6 pt-4 pb-8">
          <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">
            We're Solving
          </h2>
          
          {/* Problem Cards - Vertical Stack, Full Width */}
          <div className="space-y-3">
            {problems.map((problem, index) => (
              <div
                key={problem.id}
                onMouseEnter={() => setHoveredCard(problem.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${problem.color} flex items-center gap-4 p-4 rounded-card w-full
                  transition-all duration-300 cursor-pointer
                  ${hoveredCard === problem.id ? 'scale-[1.02] shadow-medium' : 'shadow-soft'}
                  animate-scale-in`}
                style={{ animationDelay: `${500 + index * 80}ms` }}
              >
                {/* Icon on left */}
                <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
                  <problem.icon size={24} weight="duotone" className={problem.iconColor} />
                </div>
                
                {/* Text on right */}
                <div className="flex-1 text-left">
                  <h3 className="font-display font-bold text-charcoal text-base">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer section was removed */}
        
      </div>
    </div>
  );
};

export default Landing;

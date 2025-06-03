import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Medal, VideoCamera, Infinity, BookOpen, Heart, Sparkle, HandsClapping } from 'phosphor-react';

const Landing = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const problems = [
    { 
      id: 1, 
      emoji: "😴", 
      title: "Caption Fatigue", 
      description: "Auto-captions drain focus",
      color: "bg-coral-light/10 hover:bg-coral-light/20"
    },
    { 
      id: 2, 
      emoji: "💭", 
      title: "Disclosure Anxiety", 
      description: "When do I reveal I'm Deaf?",
      color: "bg-plum-light/10 hover:bg-plum-light/20"
    },
    { 
      id: 3, 
      emoji: "📱", 
      title: "Text-Only First Impressions", 
      description: "Missing the full picture",
      color: "bg-mint-light/10 hover:bg-mint-light/20"
    },
    { 
      id: 4, 
      emoji: "🔕", 
      title: "Missed Audio Alerts", 
      description: "Important notifications lost",
      color: "bg-honey-light/10 hover:bg-honey-light/20"
    },
    { 
      id: 5, 
      emoji: "✨", 
      title: "Negative Framing", 
      description: "Changing the narrative",
      color: "bg-coral-light/10 hover:bg-coral-light/20"
    }
  ];
  const flowButtons = [
    { 
      id: 1, 
      label: "Profile Super-Power", 
      subtitle: "Stand out authentically",
      icon: Medal, 
      route: "/profile-flow",
      gradient: "bg-honey-gradient hover:shadow-honey"
    },
    { 
      id: 2, 
      label: "Smart-Call", 
      subtitle: "Video dates made easy",
      icon: VideoCamera, 
      route: "/smart-call",
      gradient: "bg-plum-gradient hover:shadow-bumble"
    },
    { 
      id: 3, 
      label: "No Boundaries", 
      subtitle: "Connect beyond limits",
      icon: Infinity, 
      route: "/no-boundaries",
      gradient: "bg-gradient-to-br from-mint to-plum-light hover:shadow-bumble"
    },
    { 
      id: 4, 
      label: "Design System", 
      subtitle: "WCAG & tokens guide",
      icon: BookOpen, 
      route: "/tokens",
      gradient: "bg-gradient-to-br from-smoke-dark to-smoke hover:shadow-medium"
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
              3 micro-flows that turn<br />
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
        {/* Problem Section */}
        <div className="px-6 pt-8 pb-4">
          <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">
            We're Solving
          </h2>
          
          {/* Problem Cards - Horizontal Scroll */}
          <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-3 pb-4" style={{ width: 'max-content' }}>
              {problems.map((problem, index) => (
                <div
                  key={problem.id}
                  onMouseEnter={() => setHoveredCard(problem.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`${problem.color} p-5 rounded-card min-w-[160px] 
                    transition-all duration-300 cursor-pointer
                    ${hoveredCard === problem.id ? 'scale-105 shadow-medium' : 'shadow-soft'}
                    animate-scale-in`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="text-3xl mb-3">{problem.emoji}</div>
                  <h3 className="font-display font-bold text-charcoal text-base mb-1">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-snug">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Flow Buttons */}
        <div className="px-6 pt-4 pb-8">
          <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-5">
            Get Started
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
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
                    min-h-[140px] p-5 shadow-medium transition-all duration-300
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
                      {button.id < 4 ? `0${button.id}` : ''}
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
        {/* Footer */}
        <div className="px-6 pb-8">
          <div className="bg-smoke-dark rounded-bubble p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-honey rounded-full flex items-center justify-center">
                  <span className="text-xs">♿</span>
                </div>
                <div className="w-8 h-8 bg-plum rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">✓</span>
                </div>
                <div className="w-8 h-8 bg-mint rounded-full flex items-center justify-center">
                  <span className="text-xs">48</span>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-text-secondary leading-relaxed">
              Built with <span className="font-bold text-charcoal">WCAG 2.1-AA</span> compliance<br />
              48px tap targets • High contrast • Screen reader ready
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Landing;
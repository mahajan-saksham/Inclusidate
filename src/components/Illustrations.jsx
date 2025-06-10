import React from 'react';

// Hero Illustration for No Boundaries intro
export const SuperpowerHeroIllustration = ({ className = "" }) => (
  <svg className={`w-full h-full ${className}`} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background circles */}
    <circle cx="200" cy="150" r="80" fill="url(#gradient1)" opacity="0.2"/>
    <circle cx="150" cy="120" r="60" fill="url(#gradient2)" opacity="0.2"/>
    <circle cx="250" cy="180" r="60" fill="url(#gradient3)" opacity="0.2"/>
    
    {/* Central figure with cape */}
    <g className="animate-float">
      <path d="M200 100 C180 100 160 120 160 150 C160 180 180 200 200 200 C220 200 240 180 240 150 C240 120 220 100 200 100" fill="#6E3FF3"/>
      {/* Cape */}
      <path d="M180 120 C170 130 150 160 140 200 L200 180 L260 200 C250 160 230 130 220 120" fill="url(#capeGradient)" opacity="0.8"/>
      {/* Star emblem */}
      <path d="M200 140 L205 150 L215 150 L207 157 L210 167 L200 160 L190 167 L193 157 L185 150 L195 150 Z" fill="#FFD74C"/>
    </g>

    {/* Floating stars */}
    <g className="animate-sparkle">
      <circle cx="120" cy="80" r="3" fill="#FFD74C"/>
      <circle cx="280" cy="100" r="3" fill="#FFD74C"/>
      <circle cx="100" cy="180" r="3" fill="#FFD74C"/>
      <circle cx="300" cy="200" r="3" fill="#FFD74C"/>
    </g>

    {/* Gradients */}
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6E3FF3" />
        <stop offset="100%" stopColor="#FF6B6B" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD74C" />
        <stop offset="100%" stopColor="#FF6B6B" />
      </linearGradient>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ECDC4" />
        <stop offset="100%" stopColor="#6E3FF3" />
      </linearGradient>
      <linearGradient id="capeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="100%" stopColor="#FFD74C" />
      </linearGradient>
    </defs>
  </svg>
);

// Connection Illustration for showing people connecting
export const ConnectionIllustration = ({ className = "" }) => (
  <svg className={`w-full h-full ${className}`} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Person 1 */}
    <g className="animate-float" style={{ animationDelay: '0s' }}>
      <circle cx="120" cy="150" r="40" fill="#6E3FF3" opacity="0.8"/>
      <circle cx="120" cy="130" r="20" fill="#FAFAFA"/>
    </g>
    
    {/* Person 2 */}
    <g className="animate-float" style={{ animationDelay: '0.5s' }}>
      <circle cx="280" cy="150" r="40" fill="#FF6B6B" opacity="0.8"/>
      <circle cx="280" cy="130" r="20" fill="#FAFAFA"/>
    </g>
    
    {/* Connection lines */}
    <path d="M160 150 Q200 120 240 150" stroke="#FFD74C" strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-pulse"/>
    <path d="M160 150 Q200 180 240 150" stroke="#4ECDC4" strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
    
    {/* Hearts */}
    <g className="animate-pulse-glow">
      <path d="M200 140 C195 135 185 135 185 145 C185 155 200 165 200 165 C200 165 215 155 215 145 C215 135 205 135 200 140 Z" fill="#FF6B6B"/>
    </g>
  </svg>
);

// Transformation Illustration for How It Works
export const TransformationIllustration = ({ className = "" }) => (
  <svg className={`w-full h-full ${className}`} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Before state */}
    <g opacity="0.5">
      <rect x="50" y="100" width="120" height="80" rx="10" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2"/>
      <circle cx="110" cy="140" r="25" fill="#9CA3AF"/>
    </g>
    
    {/* Arrow */}
    <g className="animate-bounce-soft" style={{ animationDirection: 'horizontal' }}>
      <path d="M180 140 L220 140" stroke="#6E3FF3" strokeWidth="3" markerEnd="url(#arrowhead)"/>
    </g>
    
    {/* After state */}
    <g className="animate-sparkle">
      <rect x="230" y="100" width="120" height="80" rx="10" fill="url(#transformGradient)" stroke="#6E3FF3" strokeWidth="2"/>
      <g className="animate-float">
        <circle cx="290" cy="140" r="25" fill="#FFD74C"/>
        <path d="M290 130 L295 140 L305 140 L297 147 L300 157 L290 150 L280 157 L283 147 L275 140 L285 140 Z" fill="#6E3FF3"/>
      </g>
    </g>
    
    {/* Sparkles around transformation */}
    <g className="animate-pulse">
      <circle cx="250" cy="90" r="2" fill="#FFD74C"/>
      <circle cx="330" cy="95" r="2" fill="#FF6B6B"/>
      <circle cx="340" cy="190" r="2" fill="#4ECDC4"/>
      <circle cx="260" cy="195" r="2" fill="#6E3FF3"/>
    </g>
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#6E3FF3" />
      </marker>
      <linearGradient id="transformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD74C" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#6E3FF3" stopOpacity="0.3"/>
      </linearGradient>
    </defs>
  </svg>
);

// Discovery Illustration for Superpower Discovery
export const DiscoveryIllustration = ({ className = "" }) => (
  <svg className={`w-full h-full ${className}`} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Magnifying glass discovering stars */}
    <g className="animate-float">
      <circle cx="200" cy="150" r="60" fill="none" stroke="#6E3FF3" strokeWidth="4"/>
      <line x1="245" y1="195" x2="280" y2="230" stroke="#6E3FF3" strokeWidth="4" strokeLinecap="round"/>
      
      {/* Stars inside magnifying glass */}
      <g className="animate-sparkle">
        <path d="M180 140 L185 150 L195 150 L187 157 L190 167 L180 160 L170 167 L173 157 L165 150 L175 150 Z" fill="#FFD74C"/>
        <path d="M210 130 L213 137 L220 137 L214 142 L216 149 L210 144 L204 149 L206 142 L200 137 L207 137 Z" fill="#FF6B6B"/>
        <path d="M200 160 L202 165 L207 165 L203 168 L204 173 L200 170 L196 173 L197 168 L193 165 L198 165 Z" fill="#4ECDC4"/>
      </g>
    </g>
    
    {/* Floating elements outside */}
    <g opacity="0.3">
      <circle cx="100" cy="80" r="20" fill="#FFD74C"/>
      <circle cx="300" cy="100" r="25" fill="#FF6B6B"/>
      <circle cx="320" cy="220" r="20" fill="#4ECDC4"/>
      <circle cx="80" cy="200" r="25" fill="#6E3FF3"/>
    </g>
  </svg>
);

// Empty State Illustration
export const CelebrationIllustration = ({ className = "" }) => (
  <svg className={`w-full h-full ${className}`} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Confetti */}
    <g className="animate-float">
      <rect x="100" y="50" width="20" height="10" rx="2" fill="#FFD74C" transform="rotate(25 110 55)"/>
      <rect x="280" y="80" width="20" height="10" rx="2" fill="#FF6B6B" transform="rotate(-30 290 85)"/>
      <rect x="150" y="100" width="20" height="10" rx="2" fill="#4ECDC4" transform="rotate(45 160 105)"/>
      <rect x="250" y="60" width="20" height="10" rx="2" fill="#6E3FF3" transform="rotate(-45 260 65)"/>
    </g>
    
    {/* Trophy */}
    <g className="animate-bounce-soft">
      <path d="M200 120 C180 120 170 130 170 140 C170 150 180 160 200 160 C220 160 230 150 230 140 C230 130 220 120 200 120" fill="#FFD74C"/>
      <rect x="190" y="160" width="20" height="30" fill="#FFD74C"/>
      <rect x="180" y="190" width="40" height="10" rx="5" fill="#6E3FF3"/>
      
      {/* Handles */}
      <path d="M170 130 C160 130 155 135 155 140 C155 145 160 150 170 150" fill="none" stroke="#FFD74C" strokeWidth="4"/>
      <path d="M230 130 C240 130 245 135 245 140 C245 145 240 150 230 150" fill="none" stroke="#FFD74C" strokeWidth="4"/>
      
      {/* Star on trophy */}
      <path d="M200 135 L203 142 L210 142 L204 147 L206 154 L200 149 L194 154 L196 147 L190 142 L197 142 Z" fill="#6E3FF3"/>
    </g>
    
    {/* More confetti */}
    <g className="animate-float" style={{ animationDelay: '0.5s' }}>
      <circle cx="120" cy="180" r="5" fill="#FFD74C"/>
      <circle cx="280" cy="170" r="5" fill="#FF6B6B"/>
      <circle cx="320" cy="120" r="5" fill="#4ECDC4"/>
      <circle cx="80" cy="140" r="5" fill="#6E3FF3"/>
    </g>
  </svg>
);

// Icon and Illustration System for Inclusidate
// This file centralizes all icons and illustrations for consistency

import { 
  Heart, 
  Star, 
  Lightning, 
  HandWaving, 
  MapPin, 
  CaretRight, 
  CaretLeft,
  X,
  Check,
  Sparkle,
  ArrowLeft,
  MicrophoneStage,
  Play,
  Pause,
  Info,
  Eye,
  EyeSlash,
  User,
  Users,
  ChatCircle,
  VideoCamera,
  Medal,
  Trophy,
  Target,
  Infinity,
  HandsClapping,
  BoundingBox,
  Wheelchair,
  Brain,
  Ear,
  HandPalm
} from 'phosphor-react';

import {
  UserGroupIcon,
  SparklesIcon,
  LightBulbIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  HeartIcon as HeartIconSolid,
  StarIcon as StarIconSolid,
  LightningBoltIcon,
  BeakerIcon,
  PuzzleIcon,
  FireIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/solid';

import {
  HeartIcon as HeartIconOutline,
  StarIcon as StarIconOutline,
  ChatIcon,
  CameraIcon,
  MusicNoteIcon,
  BookOpenIcon,
  FilmIcon,
  PhotographIcon,
  ColorSwatchIcon,
  DesktopComputerIcon,
  ChipIcon,
  CubeIcon
} from '@heroicons/react/outline';

// Icon mappings for different contexts
export const icons = {
  // Navigation
  back: ArrowLeft,
  next: CaretRight,
  previous: CaretLeft,
  close: X,
  check: Check,
  
  // Actions
  like: Heart,
  favorite: Star,
  spark: Sparkle,
  power: Lightning,
  infinity: Infinity,
  
  // Communication
  wave: HandWaving,
  chat: ChatCircle,
  video: VideoCamera,
  microphone: MicrophoneStage,
  
  // Profile
  user: User,
  users: Users,
  location: MapPin,
  medal: Medal,
  trophy: Trophy,
  target: Target,
  
  // Accessibility & Inclusion
  hands: HandsClapping,
  handSign: HandPalm,
  wheelchair: Wheelchair,
  brain: Brain,
  ear: Ear,
  eye: Eye,
  eyeClosed: EyeSlash,
  
  // Media controls
  play: Play,
  pause: Pause,
  info: Info,
  
  // Features
  boundaries: BoundingBox,
  shield: ShieldCheckIcon,
  academic: AcademicCapIcon,
  globe: GlobeAltIcon,
  
  // Interests (replacing emojis)
  music: MusicNoteIcon,
  fitness: FireIcon,
  art: ColorSwatchIcon,
  books: BookOpenIcon,
  cooking: BeakerIcon,
  gaming: ChipIcon,
  nature: SunIcon,
  photography: CameraIcon,
  travel: GlobeAltIcon,
  movies: FilmIcon,
  
  // Problem indicators
  sleep: MoonIcon,
  puzzle: PuzzleIcon,
  lightbulb: LightBulbIcon,
  group: UserGroupIcon,
  sparkles: SparklesIcon
};

// Illustration components for different screens
export const illustrations = {
  // Hero illustrations
  heroConnection: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8F6BF7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Connection circles */}
      <circle cx="100" cy="150" r="60" fill="url(#gradient1)" opacity="0.6" />
      <circle cx="300" cy="150" r="60" fill="url(#gradient1)" opacity="0.6" />
      <path d="M 160 150 Q 200 100 240 150" stroke="#FFD74C" strokeWidth="4" fill="none" />
      {/* Pulse animations */}
      <circle cx="100" cy="150" r="60" fill="none" stroke="#8F6BF7" strokeWidth="2" opacity="0.4">
        <animate attributeName="r" from="60" to="80" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="150" r="60" fill="none" stroke="#FF6B6B" strokeWidth="2" opacity="0.4">
        <animate attributeName="r" from="60" to="80" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  ),
  
  superpowerTransform: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="transformGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6E3FF3" />
          <stop offset="50%" stopColor="#FFD74C" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </linearGradient>
      </defs>
      {/* Transformation arrow */}
      <path d="M 50 150 L 250 150" stroke="#E5E7EB" strokeWidth="40" strokeLinecap="round" />
      <path d="M 50 150 L 250 150" stroke="url(#transformGradient)" strokeWidth="40" strokeLinecap="round" 
        strokeDasharray="200" strokeDashoffset="200">
        <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      {/* Arrow head */}
      <path d="M 250 150 L 230 130 M 250 150 L 230 170" stroke="url(#transformGradient)" 
        strokeWidth="8" strokeLinecap="round" opacity="0">
        <animate attributeName="opacity" from="0" to="1" begin="1s" dur="1s" repeatCount="indefinite" />
      </path>
      {/* Sparkles */}
      <circle cx="300" cy="150" r="4" fill="#FFD74C">
        <animate attributeName="opacity" from="0" to="1" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="130" r="3" fill="#FF6B6B">
        <animate attributeName="opacity" from="0" to="1" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="170" r="3" fill="#8F6BF7">
        <animate attributeName="opacity" from="0" to="1" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  ),
  
  profileStack: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      {/* Stacked cards */}
      <rect x="140" y="90" width="120" height="160" rx="12" fill="#F3F4F6" />
      <rect x="130" y="80" width="120" height="160" rx="12" fill="#E5E7EB" />
      <rect x="120" y="70" width="120" height="160" rx="12" fill="#fff" stroke="#E5E7EB" strokeWidth="2" />
      {/* Front card content */}
      <rect x="140" y="90" width="80" height="80" rx="40" fill="#FFD74C" opacity="0.2" />
      <circle cx="180" cy="130" r="30" fill="#8F6BF7" opacity="0.6" />
      <rect x="140" y="180" width="80" height="8" rx="4" fill="#E5E7EB" />
      <rect x="140" y="195" width="60" height="8" rx="4" fill="#E5E7EB" />
    </svg>
  ),
  
  emptyState: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="emptyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD74C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8F6BF7" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="150" r="80" fill="url(#emptyGradient)" />
      <path d="M 160 150 Q 200 180 240 150" stroke="#6B7280" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="170" cy="130" r="8" fill="#6B7280" />
      <circle cx="230" cy="130" r="8" fill="#6B7280" />
    </svg>
  )
};

// Color system for consistency
export const colors = {
  primary: {
    plum: '#6E3FF3',
    plumLight: '#8F6BF7',
    plumDark: '#5429D9',
  },
  secondary: {
    honey: '#FFD74C',
    honeyLight: '#FFE488',
    honeyDark: '#F5C500',
  },
  accent: {
    coral: '#FF6B6B',
    coralLight: '#FF8E8E',
    mint: '#4ECDC4',
    mintLight: '#7EDDD7',
  },
  neutral: {
    charcoal: '#1A1A1A',
    smoke: '#F8F8F8',
    smokeLight: '#FAFAFA',
    smokeDark: '#EFEFEF',
  },
  text: {
    primary: '#1A1A1A',
    secondary: '#666666',
    muted: '#999999',
  }
};

// Typography system
export const typography = {
  display: 'font-display', // Bricolage Grotesque
  body: 'font-body', // Inter
  sizes: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  },
  weights: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }
};

// Spacing system
export const spacing = {
  page: 'px-6',
  section: 'py-8',
  component: 'p-4',
  tight: 'p-2',
  // Specific patterns from existing pages
  header: 'p-4',
  content: 'px-6 pt-8 pb-4',
  card: 'p-6',
  button: 'px-8 py-4',
  buttonSmall: 'px-4 py-2',
};

// Shadow system
export const shadows = {
  soft: 'shadow-soft',
  medium: 'shadow-medium',
  float: 'shadow-float',
  bumble: 'shadow-bumble',
  honey: 'shadow-honey',
};

// Border radius system
export const borderRadius = {
  bubble: 'rounded-bubble',
  card: 'rounded-card',
  pill: 'rounded-pill',
  button: 'rounded-pill',
  input: 'rounded-bubble',
};

// Animation classes
export const animations = {
  scaleIn: 'animate-scale-in',
  slideUp: 'animate-slide-up',
  fadeUp: 'animate-fade-up',
  float: 'animate-float',
  pulse: 'animate-pulse',
  bounceSoft: 'animate-bounce-soft',
  // With delays
  delayShort: 'animation-delay-150',
  delayMedium: 'animation-delay-300',
  delayLong: 'animation-delay-600',
};

export default {
  icons,
  illustrations,
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  animations
};
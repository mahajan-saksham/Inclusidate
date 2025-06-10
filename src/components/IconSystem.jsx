// Icon mapping for consistent usage across the app
import {
  Lightning,
  Star,
  Heart,
  HandWaving,
  Target,
  Eye,
  Sparkle,
  Trophy,
  ShieldStar,
  UserCirclePlus,
  CheckCircle,
  XCircle,
  Info,
  ArrowRight,
  MagicWand,
  Butterfly,
  RocketLaunch,
  Handshake,
  Users,
  HandHeart,
  Confetti,
  CrownSimple,
  FingerprintSimple,
  Brain,
  Lightbulb,
  Mountains,
  Wheelchair,
  EyeClosed,
  Ear,
  Palette,
  FlowerLotus,
  Fire
} from 'phosphor-react';

// Consistent icon mapping for features
export const FeatureIcons = {
  // Superpowers and abilities
  superpower: Lightning,
  skill: Trophy,
  strength: ShieldStar,
  uniqueness: FingerprintSimple,
  transformation: Butterfly,
  growth: FlowerLotus,
  
  // Actions
  like: Heart,
  curious: Star,
  pass: XCircle,
  match: Handshake,
  connect: UserCirclePlus,
  
  // Communication
  greeting: HandWaving,
  chat: Info,
  
  // Discovery
  discover: MagicWand,
  search: Eye,
  target: Target,
  idea: Lightbulb,
  
  // Features
  noBoundaries: RocketLaunch,
  profilePower: CrownSimple,
  community: Users,
  support: HandHeart,
  
  // Challenges/Differences (respectful representations)
  mobility: Mountains, // Overcoming obstacles
  vision: Eye, // Different ways of seeing
  hearing: Brain, // Different ways of processing
  neurodiversity: Sparkle, // Unique thinking patterns
  creativity: Palette,
  
  // Success/Celebration
  celebration: Confetti,
  achievement: Trophy,
  fire: Fire
};

// Badge type icons
export const BadgeIcons = {
  special: ShieldStar,
  interest: Heart,
  skill: Trophy,
  communication: HandWaving
};

// Get icon by category and name
export const getIcon = (category, name) => {
  if (category === 'feature') return FeatureIcons[name];
  if (category === 'badge') return BadgeIcons[name];
  return FeatureIcons[name] || Star; // Default fallback
};

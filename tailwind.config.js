/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bumble-inspired warm palette
        'honey': '#FFD74C',
        'honey-light': '#FFE488',
        'honey-dark': '#F5C500',
        'plum': '#6E3FF3',
        'plum-light': '#8F6BF7',
        'plum-dark': '#5429D9',
        'coral': '#FF6B6B',
        'coral-light': '#FF8E8E',
        'mint': '#4ECDC4',
        'mint-light': '#7EDDD7',
        'charcoal': '#1A1A1A',
        'smoke': '#F8F8F8',
        'smoke-light': '#FAFAFA',
        'smoke-dark': '#EFEFEF',
        'text-primary': '#1A1A1A',
        'text-secondary': '#666666',
        'text-muted': '#999999',
      },
      fontFamily: {
        'display': ['Bricolage Grotesque', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['13px', '18px'],
        'sm': ['15px', '22px'],
        'base': ['17px', '26px'],
        'lg': ['20px', '30px'],
        'xl': ['24px', '36px'],
        '2xl': ['32px', '44px'],
        '3xl': ['40px', '52px'],
        '4xl': ['48px', '60px'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'bubble': '24px',
        'pill': '9999px',
        'card': '20px',
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0,0,0,0.08)',
        'medium': '0 4px 20px rgba(0,0,0,0.12)',
        'bumble': '0 8px 32px rgba(110, 63, 243, 0.15)',
        'honey': '0 8px 32px rgba(255, 215, 76, 0.20)',
        'float': '0 12px 40px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'honey-gradient': 'linear-gradient(135deg, #FFE488 0%, #FFD74C 100%)',
        'plum-gradient': 'linear-gradient(135deg, #8F6BF7 0%, #6E3FF3 100%)',
        'warm-gradient': 'linear-gradient(135deg, #FFD74C 0%, #FF6B6B 50%, #6E3FF3 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, #FFE488 0px, transparent 50%), radial-gradient(at 80% 0%, #8F6BF7 0px, transparent 50%), radial-gradient(at 0% 50%, #7EDDD7 0px, transparent 50%)',
      },
      animation: {
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'wiggle': 'wiggle 0.5s ease-in-out',
      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}

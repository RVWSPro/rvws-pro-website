/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#000000',
        slate: {
          muted: '#94a3b8',
        },
        line: 'rgba(255,255,255,0.06)',
        glow: {
          blue: '#3b82f6',
          soft: '#60a5fa',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(0.5deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 70%)',
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

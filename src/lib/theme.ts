// Luxury yacht theme colors
export const colors = {
  // Primary colors
  navy: {
    50: '#E7EBF0',
    100: '#C1CCD8',
    200: '#9AABBD',
    300: '#738AA3',
    400: '#557191',
    500: '#2F4A69', // Primary navy
    600: '#1F3C5A',
    700: '#13304C',
    800: '#0A243E',
    900: '#041830',
    950: '#020E1D'
  },
  
  // Accent colors
  gold: {
    50: '#FFF9E6',
    100: '#FFF0BF',
    200: '#FFE799',
    300: '#FFDE73',
    400: '#FFD54D',
    500: '#FFCC26', // Primary gold
    600: '#D9A80D',
    700: '#B38600',
    800: '#8C6400',
    900: '#664200',
    950: '#332100'
  },
  
  // Neutral colors
  gray: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617'
  }
};

// Font configurations
export const fonts = {
  heading: 'Playfair Display, serif',
  body: 'Inter, sans-serif',
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  }
};

// Shadows for cards, buttons, and elements
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  luxury: '0 20px 50px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)',
  goldInset: 'inset 0 1px 2px rgba(255, 204, 38, 0.3)'
};

// Gradients for UI elements
export const gradients = {
  primary: 'linear-gradient(135deg, #0A243E 0%, #2F4A69 100%)',
  gold: 'linear-gradient(135deg, #FFCC26 0%, #D9A80D 100%)',
  overlay: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
  navbarGradient: 'linear-gradient(to bottom, rgba(4, 24, 48, 0.9) 0%, rgba(4, 24, 48, 0) 100%)',
  cardHover: 'linear-gradient(135deg, rgba(255, 204, 38, 0.15) 0%, rgba(255, 204, 38, 0) 100%)',
  buttonGlow: 'radial-gradient(circle at center, rgba(255, 204, 38, 0.2) 0%, rgba(255, 204, 38, 0) 70%)'
};

// Borders and outlines
export const borders = {
  thin: '1px solid',
  medium: '2px solid',
  thick: '3px solid',
  gold: `2px solid ${colors.gold[500]}`,
  navy: `2px solid ${colors.navy[700]}`,
  radius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  }
};

// Glassmorphism effects
export const glass = {
  light: 'backdrop-filter: blur(8px); background-color: rgba(255, 255, 255, 0.1);',
  medium: 'backdrop-filter: blur(12px); background-color: rgba(255, 255, 255, 0.05);',
  dark: 'backdrop-filter: blur(16px); background-color: rgba(4, 24, 48, 0.75);'
};

// Transitions and animations timing
export const transitions = {
  fast: '0.15s ease',
  medium: '0.3s ease',
  slow: '0.5s ease',
  luxury: '0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
};

// Common layout spacing
export const spacing = {
  container: {
    xs: '1rem',
    sm: '2rem',
    md: '3rem',
    lg: '4rem',
    xl: '5rem',
    '2xl': '6rem',
  }
};

// Responsive breakpoints
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}; 
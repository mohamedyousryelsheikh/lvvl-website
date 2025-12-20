import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0F172A', // Slate 900 - Dark Navy
      light: '#334155',
      dark: '#020617',
    },
    secondary: {
      main: '#8B5CF6', // Violet - Vibrant Purple
      light: '#A78BFA',
      dark: '#7C3AED',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B', // Slate 500
    },
    custom: {
      gradient: {
        primary: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        hero: 'radial-gradient(100% 100% at 50% 5%, #0f172a 0%, #7c3aed 20%, #22d3ee 50%, #ffffff 90%)', // Dark top > Purple > Cyan > White
        heroMobile: 'linear-gradient(180deg, #0f172a 0%, #4c1d95 30%, #22d3ee 70%, #ffffff 100%)', // Linear vertical fade for mobile
        aurora: 'conic-gradient(from 180deg at 50% 50%, #2E1065 0deg, #0F172A 180deg, #1E1B4B 360deg)',
        text: 'linear-gradient(to right, #C084FC, #2DD4BF)', // Purple to Teal for glowing text
      },
      accent: {
        cyan: '#06b6d4',
        purple: '#8b5cf6',
        pink: '#ec4899',
      }
    }
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: '#0F172A',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: '50px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#1E293B',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)', // Subtle shadow
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderBottom: 'none',
        },
      },
    },
  },
});

export default theme;

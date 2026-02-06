import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: { main: '#1E3A5F' },
    success: { main: '#1EA54E' },
    warning: { main: '#F59F0A' },
    error: { main: '#F50A0A' },
    divider: '#E0E8ED',
    background: {
      default: '#FFFFFF',
      paper: '#F5F8FA',
    },
    text: {
      primary: '#1E3A5F',
      secondary: '#8597A8',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: 'Cairo, sans-serif',
    h6: { fontWeight: 600 },
  },
});

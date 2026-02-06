import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box display="flex" flexDirection={'column'} flex={1}>
        <Header />
        <Box flex={1} p={3} bgcolor={'background.paper'}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;

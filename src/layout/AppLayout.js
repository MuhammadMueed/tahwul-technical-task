import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box display="flex" flexDirection={'column'} flex={1}>
        <Header />
        <Box flex={'1 1 0%'} p={3} bgcolor={'background.paper'}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;

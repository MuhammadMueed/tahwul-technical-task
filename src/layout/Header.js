import { KeyboardArrowDown, NotificationsOutlined, Search } from '@mui/icons-material';
import { Avatar, Badge, Box, IconButton, InputAdornment, InputBase, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderBottom: '1px solid', borderBottomColor: 'divider', height: 40 }}>
      <InputBase
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <Search sx={{ color: 'text.secondary' }} />
          </InputAdornment>
        }
        sx={{
          bgcolor: 'background.paper',
          px: 3,
          py: 1,
          ml: 5,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 0.8,
          width: 320,
          height: 42,
        }}
      />
      <Box flex={1} />

      <IconButton>
        <Badge variant="dot" color="error" overlap="circular">
          <NotificationsOutlined />
        </Badge>
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          px: 0.7,
          py: 0.7,
          borderRadius: 2,
          bgcolor: '#F8FAFA',
        }}
      >
        <Avatar src="/avatar.jpg" sx={{ width: 24, height: 24 }} />

        <Typography fontWeight={500} fontSize={12} color="#23252A">
          Muhammad
        </Typography>
        <KeyboardArrowDown fontSize="small" />
      </Box>
    </Box>
  );
}

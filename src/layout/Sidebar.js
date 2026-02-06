import { BarChartTwoTone, DashboardOutlined, DocumentScannerOutlined, FileOpenOutlined, PeopleOutline, TaskAlt } from '@mui/icons-material';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const items = [
  { text: 'Dashboard', icon: <DashboardOutlined /> },
  { text: 'Perspectives', icon: <FileOpenOutlined /> },
  { text: 'Tasks', icon: <TaskAlt /> },
  { text: 'Documents', icon: <DocumentScannerOutlined /> },
  { text: 'Reports', icon: <BarChartTwoTone /> },
  { text: 'Users & Roles', icon: <PeopleOutline /> },
];

export default function Sidebar() {
  return (
    <Drawer variant="permanent" sx={{ width: 260 }}>
      <Box sx={{ width: 260, bgcolor: 'primary.main', height: '100%' }}>
        <Box
          sx={{
            px: 3,
            py: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Box component="img" src="/tahwul_logo.png" alt="Tahwul Logo" sx={{ height: 40, width: 100 }} />
        </Box>

        <List sx={{ p: 2, pt: 3 }}>
          {items.map((item, i) => (
            <ListItemButton
              key={item.text}
              sx={{
                borderRadius: 0.8,
                mb: 1,
                bgcolor: i === 0 ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: i === 0 ? '#fff' : '#7B9FC3',
              }}
            >
              <ListItemIcon sx={{ color: i === 0 ? '#fff' : '#7B9FC3' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

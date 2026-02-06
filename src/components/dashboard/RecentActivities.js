import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { activitiesData } from '../../data/mock-dashboard';
import BoxContainer from '../BoxContainer';

export default function RecentActivities() {
  return (
    <BoxContainer
      title="Recent Activities"
      gridArea="recent-activities"
      style={{ flex: '1 1 0%' }}
      body={
        <List sx={{ width: '100%', p: 0 }}>
          {activitiesData.map((activty, index) => (
            <Box key={activty.id}>
              <ListItem alignItems="flex-start" sx={{ py: 1, px: 0 }}>
                <ListItemText
                  primary={
                    <Box display={'flex'}>
                      <Box sx={{ width: 7, height: 5, bgcolor: 'error.main', borderRadius: '50%', mt: 1.1, mr: 1.5 }} />
                      <Typography variant="body1" color="text.primary" sx={{ pr: 2 }}>
                        {activty.title}
                      </Typography>
                    </Box>
                  }
                />
                <ListItemIcon>
                  <Typography color="text.secondary" fontSize={12}>
                    {activty.time}
                  </Typography>
                </ListItemIcon>
              </ListItem>
              {index < activitiesData.length - 1 && <Divider component="li" />}
            </Box>
          ))}
        </List>
      }
    ></BoxContainer>
  );
}

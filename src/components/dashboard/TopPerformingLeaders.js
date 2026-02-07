import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { performingleaders } from '../../data/mock-dashboard';
import BoxContainer from '../shared/BoxContainer';

export default function TopPerformingLeaders() {
  return (
    <BoxContainer
      title="Top Performing Leaders"
      gridArea="top-performing-leaders"
      style={{ flex: '1 1 0%' }}
      body={
        <List sx={{ width: '100%', p: 0 }}>
          {performingleaders.map((leader, index) => (
            <Box key={index}>
              <ListItem alignItems="flex-start" sx={{ py: 1, px: 0 }}>
                <ListItemAvatar>
                  <Avatar src="/avatar.jpg" sx={{ width: 48, height: 48 }} />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography variant="body1" color="text.primary">
                      {leader.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body1" color="text.secondary">
                      {leader.perspective}
                    </Typography>
                  }
                />
                <ListItemIcon>
                  <Typography variant="body1" fontWeight={700} color="text.primary">
                    {leader.score}%
                  </Typography>
                </ListItemIcon>
              </ListItem>
              {index < performingleaders.length - 1 && <Divider component="li" />}
            </Box>
          ))}
        </List>
      }
    ></BoxContainer>
  );
}

import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { leadersData } from '../../data/mock-dashboard';
import BoxContainer from '../shared/BoxContainer';

export default function Leaders() {
  return (
    <BoxContainer
      title={'Leaders'}
      gridArea="leaders"
      body={
        <Box display={'flex'} flexWrap={'wrap'} gap={3}>
          {leadersData.map((leader) => (
            <Box key={leader.id}>
              <BoxContainer
                style={{
                  bgcolor: 'background.paper',
                  width: '225px',
                  border: '0px solid',
                  p: 0,
                  px: 1,
                }}
                body={
                  <ListItem alignItems="flex-start" sx={{ py: 0, px: 0 }}>
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
                  </ListItem>
                }
              />
            </Box>
          ))}
        </Box>
      }
    />
  );
}

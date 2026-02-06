import { Box, Typography } from '@mui/material';
import { perspectiveStatsData } from '../../data/mock-dashboard';
import BoxContainer from '../BoxContainer';

export default function PerspectiveStats() {
  return (
    <Box display={'grid'} gap={3} gridTemplateColumns={'repeat(auto-fit, minmax(200px, 1fr))'} gridArea="perspective-stats">
      {perspectiveStatsData.map((item) => (
        <Box key={item.id}>
          <StatCard {...item} />
        </Box>
      ))}
    </Box>
  );
}

function StatCard({ count, title, icon }) {
  return (
    <BoxContainer
      body={
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <Box
            sx={{
              color: 'error.main',
            }}
          >
            {icon}
          </Box>
          <Box flex={1} display={'grid'}>
            <Typography fontWeight={700} color="text.primary" variant="h5">
              {count}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {title}
            </Typography>
          </Box>
        </Box>
      }
    />
  );
}

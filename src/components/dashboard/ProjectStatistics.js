import { Box, Typography } from '@mui/material';
import { statsData } from '../../data/mock-dashboard';
import BoxContainer from '../BoxContainer';

export default function ProjectStatistics() {
  return (
    <Box display={'grid'} gap={3} gridTemplateColumns={'repeat(auto-fit, minmax(200px, 1fr))'} gridArea="project-statistics">
      {statsData.map((item, index) => (
        <Box key={index}>
          <StatCard {...item} />
        </Box>
      ))}
    </Box>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <BoxContainer
      body={
        <Box display={'grid'} gap={1}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography fontWeight={700} color="text.primary" variant="h5">
              {value}
            </Typography>
            <Box
              sx={{
                color: 'error.main',
              }}
            >
              {icon}
            </Box>
          </Box>
          <Typography color="text.secondary" variant="body2">
            {label}
          </Typography>
        </Box>
      }
    />
  );
}

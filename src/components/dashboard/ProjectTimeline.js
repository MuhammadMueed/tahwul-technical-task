import { Box, MenuItem, Select, Typography } from '@mui/material';
import { timelineSteps } from '../../data/mock-dashboard';
import BoxContainer from '../BoxContainer';

export default function ProjectTimeline() {
  const completedCount = timelineSteps.filter((s) => s.status === 'completed').length;
  const progressPercent = (completedCount / timelineSteps.length) * 100;

  const bodyContet = (
    <>
      <Box sx={{ position: 'relative', mb: 3 }}>
        <Box
          sx={{
            height: 14,
            borderRadius: 999,
            bgcolor: '#F5F8FB',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 14,
            width: `${progressPercent}%`,
            borderRadius: 999,
            bgcolor: 'success.main',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {timelineSteps.map((step, index) => (
            <Box flex={1} display="flex" justifyContent={'center'} key={index}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: step.status === 'completed' ? '#fff' : 'error.main',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${timelineSteps.length}, 1fr)`,
          gap: 2,
          textAlign: 'center',
        }}
      >
        {timelineSteps.map((step, index) => (
          <Box key={index}>
            <Typography color="text.secondary" mb={0.5}>
              {step.date}
            </Typography>
            <Typography fontWeight={500} color="text.primary">
              {step.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );

  return (
    <BoxContainer
      title="Project Timeline"
      titleSideComponent={
        <Select size="small" value={2026}>
          {[2024, 2025, 2026, 2027].map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      }
      gridArea="project-timeline"
      body={bodyContet}
    />
  );
}

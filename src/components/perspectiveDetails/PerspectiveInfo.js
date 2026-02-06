import { Box, CircularProgress, Typography } from '@mui/material';
import BoxContainer from '../BoxContainer';

export default function PerspectiveInfo() {
  return (
    <BoxContainer
      gridArea="perspective-info"
      body={
        <Box display={'flex'}>
          <Box flex={1} display={'grid'} gap={0.7}>
            <Box
              sx={{
                border: '1px solid',
                width: 'fit-content',
                borderColor: 'divider',
                borderRadius: '30px',
                py: 1,
                px: 2,
                fontSize: '12px',
                color: 'text.secondary',
              }}
            >
              Strategy & Planning
            </Box>
            <Typography variant="body1" fontWeight={700} color="text.primary">
              Digital Transformation Strategic Planning
            </Typography>
            <Typography variant="body1" fontWeight={'normal'} color="text.secondary">
              Develop comprehensive strategic plans for digital transformation aligned with organizational goals
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={100} size={100} thickness={4} color="success" c />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" color="text.primary" fontWeight={700}>
                {`${Math.round(100)}%`}
              </Typography>
            </Box>
          </Box>
        </Box>
      }
    />
  );
}

import { Box, Typography } from '@mui/material';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ score = 0, filledColor, label }) {
  const data = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: [filledColor || '#1EA54E', '#F5F8FA'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    cutout: '88%',
    borderRadius: 8,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
      <Doughnut data={data} options={options} />
      <Box
        sx={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <Typography sx={{ fontSize: 44, fontWeight: 700, color: 'text.primary' }}>{score}%</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

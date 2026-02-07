import BoxContainer from '../BoxContainer';

import { alpha } from '@mui/material';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function YearPerformance() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const values = [88, 76, 80, 43, 89, 78, 55, 87, 79, 56, 88, 78];

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Value',
        data: values,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(0, 120, 215, 1)');
          gradient.addColorStop(1, 'rgba(0, 120, 215, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.4, // Smooth curve
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      legend: {
        display: false, // Hide legend as it's not in the screenshot
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        padding: 12,
        cornerRadius: 6,
        displayColors: false,
        callbacks: {
          label: (context) => `Value: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#8597A8',
          font: {
            size: 12,
            family: 'IBM Plex Sans Arabic, sans-serif',
          },
        },
      },
      y: {
        beginAtZero: true,

        max: 100,
        grid: {
          color: alpha('#8597A8', 0.1),
          drawBorder: false,
        },
        ticks: {
          color: '#666666',
          font: {
            size: 12,
            family: 'IBM Plex Sans Arabic, sans-serif',
          },
          stepSize: 20,
          callback: (value) => `${value}`,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  return (
    <BoxContainer title="12-Month Performance" gridArea="year-performance" style={{ flex: '1 1 0%' }} body={<Bar data={chartData} options={chartOptions} />} />
  );
}

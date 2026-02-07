import { ArrowBack } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BackActionButton({ label }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <IconButton
        onClick={() => {
          navigate(-1);
        }}
        sx={{ mr: 1 }}
        aria-label="go back"
      >
        <ArrowBack sx={{ color: 'text.primary' }} />
      </IconButton>
      <Typography variant="body1" fontWeight={700} color="text.primary">
        {label}
      </Typography>
    </Box>
  );
}

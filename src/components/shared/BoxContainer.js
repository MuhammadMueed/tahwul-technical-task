import { Box, Typography } from '@mui/material';

export default function BoxContainer(props) {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={3}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 0.63,
        p: 2,
        bgcolor: 'background.default',
        gridArea: props.gridArea || '',
        ...props.style,
      }}
    >
      {props.title && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography fontWeight={700} color="primary.main">
            {props.title}
          </Typography>
          {props.titleSideComponent}
        </Box>
      )}
      <Box flex={1} overflow={'auto'}>
        {props.body}
      </Box>
    </Box>
  );
}

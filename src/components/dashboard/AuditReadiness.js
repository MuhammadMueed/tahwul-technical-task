import { Box, Divider, Typography } from '@mui/material';
import BoxContainer from '../shared/BoxContainer';
import DoughnutChart from '../shared/DoughnutChart';

export default function AuditReadiness() {
  return (
    <BoxContainer
      title="Audit Readiness"
      gridArea="audit-readiness"
      style={{ flex: '1 1 0%' }}
      body={
        <Box display={'flex'} flexDirection={'column'} gap={1}>
          <div style={{ paddingBlock: '10px', flex: 1 }}>
            <DoughnutChart score={80} filledColor={'#1EA54E'} label={'Readiness Level'} />
          </div>
          <Divider />
          <Box display={'flex'} justifyContent={'space-evenly'}>
            <TagValue label="Overdue Stds" value={12} />
            <TagValue label="Missing Evidence" value={5} />
          </Box>
        </Box>
      }
    />
  );
}

function TagValue({ label, value }) {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" fontWeight={700} color="text.primary">
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}

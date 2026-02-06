import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { progressStatusData, STATUS_COLORS } from '../../data/mock-dashboard';
import BoxContainer from '../BoxContainer';

export default function ProgressStatus() {
  return (
    <BoxContainer
      gridArea="progress-status"
      title="Progress Status"
      titleSideComponent={<StatusLegend />}
      body={
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            pb: 1,
          }}
        >
          {progressStatusData.map((item, index) => (
            <CategoriesColumn key={index} data={item} />
          ))}
        </Box>
      }
    />
  );
}

function StatusLegend() {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      {Object.entries(STATUS_COLORS).map(([key, color]) => (
        <Box key={key} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: color,
            }}
          />
          <Typography variant="body2" color="primary.main">
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function StatusDot({ item }) {
  const { id, status } = item;
  return (
    <Box display={'flex'} justifyContent="center">
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          bgcolor: STATUS_COLORS[status],
          color: '#fff',
          fontSize: 14,
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {id}
      </Box>
    </Box>
  );
}

function SectionCard({ title, items, isExpand }) {
  const navigate = useNavigate();

  return (
    <Box
      gridArea={title}
      display={'grid'}
      flex={1}
      gap={1}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 0.63,
        p: 1,
        bgcolor: 'background.paper',
      }}
      onClick={() => {
        navigate('/perspective-details');
      }}
    >
      <Typography fontSize={10} fontWeight={400} textAlign="center" color="primary.main">
        {title}
      </Typography>

      <Box
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: `repeat(${items.length > 3 ? 2 : items.length}, 1fr)`,
          gap: 0.7,
        }}
      >
        {items.map((item) => (
          <StatusDot key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}

function CategoriesColumn({ data }) {
  return (
    <Box flex={1} sx={{ minWidth: 100 }}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        sx={{
          bgcolor: 'primary.main',
          color: '#fff',
          borderRadius: 0.63,
          p: 1,
          height: 90,
          gap: 1,
          mb: 1.3,
          textAlign: 'center',
        }}
      >
        <Typography fontWeight={700} fontSize={12}>
          {data.title}
        </Typography>
        <Box
          sx={{
            mx: 1,
            bgcolor: 'rgba(255,255,255,0.15)',
            borderRadius: 1,
            py: 0.2,
            fontWeight: 600,
            height: 22,
          }}
        >
          <Typography variant="body2" fontWeight={700}>
            {data.percentage}
          </Typography>
        </Box>
      </Box>
      <Box
        height={360}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.3,
        }}
      >
        {data.sections.map((section, i) => (
          <SectionCard key={i} {...section} isExpand={data.sections.length < 3} />
        ))}
      </Box>
    </Box>
  );
}

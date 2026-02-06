import { Box, Divider, Typography } from '@mui/material';
import BoxContainer from '../BoxContainer';

export default function OverviewTabCategories() {
  const categories = [
    {
      label: 'Objective',
      description: 'Develop a digital transformation strategy aligned with the organization’s strategy and the objectives of Saudi Vision 2030.',
    },
    {
      label: 'Implementation Requirements',
      description:
        'Prepare a digital transformation strategy for the transition to electronic government transactions, including the following: a. The organization’s vision, mission, strategic pillars, and strategic objectives, and their alignment with the organization’s overall strategy. b. Strategic initiatives, programs, and performance indicators. c. A clear methodology for integration and coordination with relevant external entities to achieve the strategy’s objectives. d. Required competencies, capabilities, and skills necessary to achieve the strategy’s objectives.',
    },
    {
      label: 'Evidence Documents',
      description:
        'Submit the approved digital transformation strategy that includes all the requirements of this standard, provided that it has been approved within a period not exceeding 36 months.',
    },
    { label: 'Related Regulations', description: 'Council of Ministers Resolution No. (40) dated 27/2/1427H, Clause (16).' },
    { label: 'Scope', description: 'All government entities.' },
  ];
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <BoxContainer
        body={
          <Box display={'flex'} flexDirection={'column'} gap={1.5}>
            {categories.map((category, index) => (
              <Box key={index} display={'flex'} gap={3}>
                <Box sx={{ width: 150, bgcolor: 'rgb(244,245,247)', borderRadius: 0.5, px: 2, py: 1 }}>
                  <Typography variant="body1" fontWeight={400} color="text.primary">
                    {category.label}
                  </Typography>
                </Box>
                <Box flex={1} sx={{ bgcolor: 'background.paper', borderRadius: 0.5, px: 2, py: 1 }}>
                  <Typography variant="body1" fontWeight={400} color="text.primary">
                    {category.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        }
      />
      <Box
        sx={{
          top: 0,
          left: '210px',
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
        }}
      >
        <Divider orientation="vertical" flexItem />
      </Box>
    </Box>
  );
}

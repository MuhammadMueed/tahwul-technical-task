import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import RecentActivities from '../dashboard/RecentActivities';
import EvidenceTabComments from './EvidenceTabComments';
import EvidenceTabTable from './EvidenceTabTable';
import Leaders from './Leaders';
import OverviewTabCategories from './OverviewTabCategories';

export default function DetailTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box gridArea="tabs">
      {/* Tabs Header */}
      <Box sx={{ bgcolor: 'divider', p: 0.7, borderRadius: 0.63, width: 'fit-content' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          slotProps={{
            indicator: {
              style: { display: 'none' },
            },
          }}
          sx={{
            minHeight: 40,
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: 400,
              minHeight: 40,
              minWidth: 100,
              color: 'text.secondary',
              borderRadius: 0.5,
              //   mx: 0.5,
              '&.Mui-selected': {
                color: 'text.primary',
                backgroundColor: 'background.default',
                // boxShadow: '0 2px 4px rgba(25, 118, 210, 0.2)',
              },
            },
          }}
        >
          <Tab label="Overview" />
          <Tab label="Evidence" />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <TabPanel value={activeTab} index={0}>
        <OverviewTabCategories />
        <Leaders />
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <EvidenceTabTable />
        <Box display={'flex'} gap={3}>
          <EvidenceTabComments />
          <RecentActivities />
        </Box>
      </TabPanel>
    </Box>
  );
}

// Tab Panel Component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
        <Box display={'flex'} flexDirection={'column'} gap={3} sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

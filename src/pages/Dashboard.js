import { Box } from '@mui/material';
import AuditReadiness from '../components/dashboard/AuditReadiness';
import OverallCompliance from '../components/dashboard/OverallCompliance';
import ProgressStatus from '../components/dashboard/ProgressStatus';
import ProjectStatistics from '../components/dashboard/ProjectStatistics';
import ProjectTimeline from '../components/dashboard/ProjectTimeline';
import RecentActivities from '../components/dashboard/RecentActivities';
import TopPerformingLeaders from '../components/dashboard/TopPerformingLeaders';
import YearPerformance from '../components/dashboard/YearPerformance';
import '../styles/Dashboard.css';

export default function Dashboard() {
  return (
    <Box className="dashboard-container">
      <ProjectTimeline />
      <ProjectStatistics />
      <ProgressStatus />
      <OverallCompliance />
      <TopPerformingLeaders />
      <RecentActivities />
      <YearPerformance />
      <AuditReadiness />
    </Box>
  );
}

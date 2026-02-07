import { Box } from '@mui/material';
import DetailTabs from '../components/perspectiveDetails/DetailTabs';
import PerspectiveInfo from '../components/perspectiveDetails/PerspectiveInfo';
import PerspectiveStats from '../components/perspectiveDetails/PerspectiveStats';
import BackActionButton from '../components/shared/BackActionButton';
import '../styles/PerspectiveDetails.css';

export default function PerspectiveDetails() {
  return (
    <>
      <BackActionButton label="Digital Transformation Strategic Planning" />
      <Box className="perspective-details-container">
        <PerspectiveInfo />
        <PerspectiveStats />
        <DetailTabs />
      </Box>
    </>
  );
}

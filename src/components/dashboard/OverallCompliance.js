import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import BoxContainer from '../BoxContainer';
import DoughnutChart from '../DoughnutChart';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function OverallCompliance() {
  return (
    <BoxContainer
      title="Overall Compliance"
      gridArea="overall-compliance"
      style={{ flex: '1 1 0%' }}
      body={
        <div style={{ paddingBlock: '10px' }}>
          <DoughnutChart score={65} filledColor={'#F50A0A'} label={'Basic Standards 2025'} />
        </div>
      }
    />
  );
}

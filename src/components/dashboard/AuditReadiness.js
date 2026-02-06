import BoxContainer from '../BoxContainer';
import DoughnutChart from '../DoughnutChart';

export default function AuditReadiness() {
  return (
    <BoxContainer
      title="Audit Readiness"
      gridArea="audit-readiness"
      style={{ flex: '1 1 0%' }}
      body={
        <div style={{ paddingBlock: '10px' }}>
          <DoughnutChart score={80} filledColor={'#1EA54E'} label={'Basic Standards 2025'} />
        </div>
      }
    />
  );
}

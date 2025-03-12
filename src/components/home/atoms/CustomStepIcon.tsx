import { StepIconProps } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, icon } = props;

  if (completed) {
    return (
      <CheckCircle
        style={{ color: '#3c5a1e', width: '30px', height: '30px' }}
      />
    );
  }

  return (
    <div
      style={{
        backgroundColor: active ? '#3c5a1e' : '#1e1e1e',
        color: 'white',
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderRadius: '20px',
      }}
    >
      {icon}
    </div>
  );
};

export default CustomStepIcon;

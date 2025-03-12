import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Snackbar, Alert, Box } from '@mui/material';
import { useQuantumStore } from '@/providers/QuantumStoreProvider';
import YourInfoStep from './YourInfoStep';
import CurrentSetupStep from './CurrentSetupStep';
import ChallengesStep from './ChallangesStep';
import DesiredOutcomesStep from './DesiredOutComesStep';
import CustomStepIcon from './CustomStepIcon';

const steps = ['Your Info', 'Current Setup', 'Challenges', 'Desired Outcomes'];

const JoinPilotProgramForm = () => {
  const { step, nextStep, prevStep, validateStep, formData, resetForm } = useQuantumStore((state) => state);

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [severity, setSeverity] = useState<'error' | 'success'>('success');
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    if (validateStep()) {
      if (step === steps.length - 1) {
        submitForm();
      } else {
        nextStep();
      }
    }
  };

  const submitForm = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/createPilotProgramInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        resetForm();
        setLoading(false);
        setAlertMessage('Your request has been submitted successfully!');
        setSeverity('success');
      } else {
        setAlertMessage('Something went wrong!');
        setSeverity('error');
      }
    } catch (error) {
      setAlertMessage('Network error, please try again later.');
      setSeverity('error');
      console.error('Fetch Error:', error);
    } finally {
      setLoading(false);
      setOpen(true);
    }
  };

  const getNextButtonLabel = () => {
    if (step < steps.length - 1) {
      return `Next: ${steps[step + 1]}`;
    }
    return 'Submit Request';
  };

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={CustomStepIcon}
              sx={{
                '& .MuiStepLabel-label': {
                  color: 'white !important',
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {step === 0 && <YourInfoStep />}
        {step === 1 && <CurrentSetupStep />}
        {step === 2 && <ChallengesStep />}
        {step === 3 && <DesiredOutcomesStep />}
      </Box>

      <Box sx={{ mt: 6, display: 'flex', justifyContent: step === 0 ? 'flex-end' : 'space-between' }}>
        {step !== 0 && (
          <Button
            variant="outlined"
            onClick={prevStep}
            sx={{
              backgroundColor: '#2d2d2d',
              color: 'white',
              borderColor: '#3c5a1e',
              transform: 'none',
              '&:hover': {
                backgroundColor: '#3c5a1e',
                borderColor: '#3c5a1e',
              },
              '& .MuiCircularProgress-root': {
                color: 'white',
              },
            }}
          >
            Previous
          </Button>
        )}
        <Button
          onClick={handleNext}
          loading={loading}
          disabled={loading}
          sx={{ backgroundColor: '#3c5a1e', color: 'white' }}
        >
          {loading ? 'submitting...' : getNextButtonLabel()}
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpen(false)} severity={severity} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default JoinPilotProgramForm;

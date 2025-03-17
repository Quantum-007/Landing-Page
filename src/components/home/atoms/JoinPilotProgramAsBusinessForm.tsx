import YourInfoStep from './YourInfoStep';
import ChallengesStep from './ChallangesStep';
import CustomStepIcon from './CustomStepIcon';
import CurrentSetupStep from './CurrentSetupStep';
import DesiredOutcomesStep from './DesiredOutComesStep';

import React, { useState } from 'react';

import { useQuantumStore } from '@/providers/QuantumStoreProvider';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Snackbar,
  Alert,
  Box,
} from '@mui/material';

const steps = ['Your Info', 'Current Setup', 'Challenges', 'Desired Outcomes'];

type JoinPilotProgramAsBusinessFormProps = {
  onBack: (value: boolean) => void;
};
const JoinPilotProgramAsBusinessForm: React.FC<
  JoinPilotProgramAsBusinessFormProps
> = ({ onBack }) => {
  const { step, nextStep, prevStep, validateStep, formData, resetForm } =
    useQuantumStore((state) => state);

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
      const res = await fetch('/api/businessPilotProgram', {
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
            <StepLabel
              StepIconComponent={CustomStepIcon}
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

      <Box
        sx={{
          mt: 6,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
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

        {step == 0 && (
          <Button
            variant="outlined"
            onClick={() => onBack(true)}
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
            Back
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
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default JoinPilotProgramAsBusinessForm;

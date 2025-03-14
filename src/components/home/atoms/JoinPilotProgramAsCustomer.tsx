'use client';

import FormField from './FormField';
import AlertSnackbar from './AlertSnackBar';

import { useState, FormEvent } from 'react';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  Box,
} from '@mui/material';
import React from 'react';

type JoinPilotProgramAsCustomerFormProps = {
  onBack: (value: boolean) => void;
};
const JoinPilotProgramAsCustomer: React.FC<JoinPilotProgramAsCustomerFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zipCode: '',
    consent: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error'>('success');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email),
      consent: !formData.consent,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      zipCode: '',
      consent: false,
    });

    setErrors({
      name: false,
      email: false,
      consent: false,
    });
  };

  const HandleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/customerPilotProgram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('res', res);

      if (res.ok) {
        resetFormData();
        setAlertMessage('Your inquiry has been submitted successfully!');
        setSeverity('success');
        setOpen(true);
      } else {
        setAlertMessage('There was an error submitting your inquiry.');
        setSeverity('error');
        setOpen(true);
      }
    } catch (error) {
      setAlertMessage('Something went wrong, please try again later.');
      setSeverity('error');
      setOpen(true);
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={HandleSubmitForm}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
            error={errors.name}
            helperText={errors.name ? 'Full Name is required' : ''}
          />
        </Grid>

        <Grid item xs={12}>
          <FormField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
            type="email"
            error={errors.email}
            helperText={errors.email ? 'Valid Email Address is required' : ''}
          />
        </Grid>

        <Grid item xs={12}>
          <FormField
            label="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleFormChange}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="consent"
                checked={formData.consent}
                onChange={handleFormChange}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-checked': { color: '#3c5a1e' },
                }}
              />
            }
            label={
              <Typography variant="body2" className="text-[#b0b0b0]">
                I consent to Quantum Robotics processing my data and contacting
                me about their products and services.*
              </Typography>
            }
          />
          {errors.consent && (
            <Typography color="error" variant="body2">
              You must provide consent to submit the form.
            </Typography>
          )}
        </Grid>

        <Box
          sx={{
            mt: 6,
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginLeft: 2
          }}
        >

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

          <Button
            loading={loading}
            disabled={loading}
            type='submit'
            sx={{ backgroundColor: '#3c5a1e', color: 'white' }}
          >
            {loading ? 'submitting...' : 'Submit Request'}
          </Button>
        </Box>

        <AlertSnackbar
          open={open}
          severity={severity}
          message={alertMessage}
          handleClose={() => setOpen(false)}
        />
      </Grid>
    </form>
  );
};

export default JoinPilotProgramAsCustomer;

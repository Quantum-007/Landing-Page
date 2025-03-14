import React, { useState } from 'react';
import JoinPilotProgramAsBusinessForm from './JoinPilotProgramAsBusinessForm';
import JoinPilotProgramAsCustomer from './JoinPilotProgramAsCustomer'
import { Box, Typography, Checkbox, FormControlLabel, Button, Grid } from '@mui/material';

const JoinPilotProgram = () => {
  const [mainFormVisible, setMainFormVisible] = useState(true);

  const [selectedForm, setSelectedForm] = useState<'customer' | 'business' | null>('customer');

  const handleSelection = (type: 'customer' | 'business') => {
    setSelectedForm(type);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="start" gap={4} p={3}>
      {mainFormVisible && (
        <>
          <Typography variant="h5" sx={{ color: 'white', font: 'bold' }}>
            Choose How You Would Like to Sign Up:
          </Typography>
          <Box className='flex flex-row mt-4 gap-10 w-full'>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedForm === 'customer'}
                  onChange={() => handleSelection('customer')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-checked': { color: '#3c5a1e' },
                  }}
                />
              }
              label="Customer"
              sx={{ color: 'white' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedForm === 'business'}
                  onChange={() => handleSelection('business')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-checked': { color: '#3c5a1e' },
                  }}
                />
              }
              label="Business"
              sx={{ color: 'white' }}
            />
          </Box>

          <Grid item xs={12} width="100%" className='mt-10'>
            <Button
              variant="contained"
              fullWidth
              disabled={!selectedForm}
              onClick={() => setMainFormVisible(false)}
              sx={{
                backgroundColor: '#3c5a1e',
                color: 'white',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#2e4717',
                },
              }}
            >
              Next
            </Button>
          </Grid>
        </>
      )}

      {selectedForm === 'business' && !mainFormVisible && (
        <JoinPilotProgramAsBusinessForm onBack={setMainFormVisible} />
      )}

      {selectedForm === 'customer' && !mainFormVisible && (
        <JoinPilotProgramAsCustomer onBack={setMainFormVisible} />
      )}
    </Box>
  );
};

export default JoinPilotProgram;

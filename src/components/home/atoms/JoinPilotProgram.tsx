import React, { useState } from 'react';
import JoinPilotProgramAsBusinessForm from './JoinPilotProgramAsBusinessForm';
import JoinPilotProgramAsCustomer from './JoinPilotProgramAsCustomer';
import { Box, Typography, Button } from '@mui/material';

const JoinPilotProgram = () => {
  const [mainFormVisible, setMainFormVisible] = useState(true);
  const [selectedForm, setSelectedForm] = useState<'customer' | 'business' | null>('customer');

  const handleSelection = (type: 'customer' | 'business') => {
    setSelectedForm(type);
    setMainFormVisible(false);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="start" gap={4} p={3}>
      {mainFormVisible && (
        <>
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
            Choose How You Would Like to Sign Up:
          </Typography>
          <Box className='flex flex-row gap-2 mt-4 w-full'>
            <Button
              variant='contained'
              onClick={() => handleSelection('customer')}
              sx={{
                color: selectedForm === 'customer' ? 'white' : '#808080',
                backgroundColor: selectedForm === 'customer' ? '#3c5a1e' : 'transparent',
                paddingX: 4
              }}
            >
              Customer
            </Button>
            <Button
              variant='contained'
              onClick={() => handleSelection('business')}
              sx={{
                color: selectedForm === 'business' ? 'white' : '#808080',
                backgroundColor: selectedForm === 'business' ? '#3c5a1e' : 'transparent',
                paddingX: 4
              }}
            >
              Business
            </Button>
          </Box>
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

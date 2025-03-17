import JoinPilotProgramAsCustomer from './JoinPilotProgramAsCustomer';
import JoinPilotProgramAsBusinessForm from './JoinPilotProgramAsBusinessForm';

import React, { useState } from 'react';

import { Box, Typography, Button } from '@mui/material';

const JoinPilotProgram = () => {
  const [mainFormVisible, setMainFormVisible] = useState(true);
  const [selectedForm, setSelectedForm] = useState<
    'customer' | 'business' | null
  >('customer');

  const handleSelection = (type: 'customer' | 'business') => {
    setSelectedForm(type);
    setMainFormVisible(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="start" gap={4} p={3}>
      {mainFormVisible && (
        <>
          <Typography
            variant="h5"
            sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}
          >
            Tell us who you are:
          </Typography>

          <Box
            mt={2}
            gap={3}
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={() => handleSelection('customer')}
              sx={{
                color: selectedForm === 'customer' ? 'white' : '#808080',
                backgroundColor:
                  selectedForm === 'customer' ? '#3c5a1e' : 'transparent',
                paddingX: 5,
                paddingY: 2,
                fontSize: '1rem',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#2e4716',
                },
              }}
            >
              Consumer
            </Button>

            <Button
              variant="contained"
              onClick={() => handleSelection('business')}
              sx={{
                color: selectedForm === 'business' ? 'white' : '#808080',
                backgroundColor:
                  selectedForm === 'business' ? '#3c5a1e' : 'transparent',
                paddingX: 5,
                paddingY: 2,
                fontSize: '1rem',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#2e4716',
                },
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

import React from 'react';
import FormField from './FormField';

import { useQuantumStore } from '@/providers/QuantumStoreProvider';
import {
  Box,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@mui/material';

const ChallengesStep = () => {
  const { formData, setFormData, errors } = useQuantumStore((state) => state);

  const challengesList = [
    'Labor Shortage',
    'Quality Control',
    'Throughput',
    'Consistency',
    'Operating Costs',
    'Worker Safety',
    'Production Flexibility',
    'Space Constraints',
  ];

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedChallenges = checked
      ? [...formData.challenges, value]
      : formData.challenges.filter((challenge) => challenge !== value);
    setFormData({
      ...formData,
      challenges: updatedChallenges,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log('formData', formData);

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
        What challenges are you looking to address? *
      </Typography>
      <Grid container spacing={2}>
        {challengesList.map((challenge, index) => (
          <Grid item xs={6} sm={4} key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  name="challenges"
                  value={challenge}
                  checked={formData.challenges.includes(challenge)}
                  onChange={handleCheckboxChange}
                  sx={{
                    '&.Mui-checked': {
                      color: 'rgb(60, 90, 30)',
                    },
                  }}
                />
              }
              label={challenge}
              sx={{
                color: 'white',
              }}
            />
          </Grid>
        ))}
        {!!errors.challenges && (
          <FormHelperText sx={{ color: 'red', margin: 2 }}>
            {errors.challenges}
          </FormHelperText>
        )}
      </Grid>

      <Typography variant="h6" sx={{ mt: 4, color: 'white' }}>
        Describe specific challenges in more detail:
      </Typography>

      <Grid item xs={12} sx={{ mt: 1 }}>
        <FormField
          label="Specific Challanges"
          name="specificChallenges"
          value={formData.specificChallenges || ''}
          onChange={handleInputChange}
          multiline
          rows={4}
        />
      </Grid>
    </Box>
  );
};

export default ChallengesStep;

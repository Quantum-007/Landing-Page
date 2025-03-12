import FormField from './FormField';

import { useQuantumStore } from '@/providers/QuantumStoreProvider';
import {
  Grid,
  Typography,
  Slider,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@mui/material';

const DesiredOutcomesStep = () => {
  const { formData, setFormData, errors } = useQuantumStore((state) => state);

  const handleSliderChange = (event: Event, value: number | number[]) => {
    setFormData({
      roiTimeframe: Array.isArray(value) ? value[0] : value,
    });
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const textFieldStyles = {
    backgroundColor: '#121212',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#3c5a1e',
      },
      '&:hover fieldset': {
        borderColor: '#3c5a1e',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3c5a1e',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
    '& .MuiSelect-icon': {
      color: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
  };

  console.log('FormData', formData);

  return (
    <Grid container spacing={3}>
      <Grid item xs={10}>
        <Typography variant="h6" className="text-white">
          Desired ROI Timeframe
        </Typography>
        <Slider
          value={formData.roiTimeframe}
          onChange={handleSliderChange}
          step={6}
          min={6}
          max={24}
          marks={[
            { value: 6, label: '6 months' },
            { value: 24, label: '24+ months' },
          ]}
          sx={{ color: '#3c5a1e', marginLeft: 4 }}
        />
        <Typography
          align="center"
          sx={{
            color: '#3c5a1e',
            fontWeight: 'bold',
            marginBottom: 4,
          }}
        >
          {formData.roiTimeframe} months
        </Typography>
      </Grid>

      <Grid item xs={10}>
        <TextField
          select
          label="What robotics solutions are you most interested in?"
          name="roboticSolutions"
          value={formData.roboticSolutions}
          onChange={handleSelectChange}
          variant="outlined"
          fullWidth
          SelectProps={{
            multiple: true,
            MenuProps: {
              PaperProps: {
                sx: {
                  bgcolor: '#2d2d2d',
                  '& .MuiMenuItem-root': {
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'gray',
                    },
                  },
                },
              },
            },
          }}
          sx={textFieldStyles}
        >
          {[
            'Collaborative Robots',
            'Delta/Picking Robots',
            'Mobile Robots',
            'Aerial/Drone Systems',
            'Custom Solutions',
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={10}>
        <TextField
          select
          label="Desired Implementation Timeline"
          name="implementationTimeline"
          value={formData.implementationTimeline}
          onChange={handleSelectChange}
          variant="outlined"
          fullWidth
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  bgcolor: '#2d2d2d',
                  '& .MuiMenuItem-root': {
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'gray',
                    },
                  },
                },
              },
            },
          }}
          sx={textFieldStyles}
        >
          {[
            'Immediate (0-3 months)',
            'Short-Term (3-6 months)',
            'Long-Term (6+ months)',
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={10}>
        <FormField
          label="Additional Notes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleInputChange}
          multiline
          rows={4}
        />
      </Grid>

      <Grid item xs={10}>
        <FormControlLabel
          control={
            <Checkbox
              name="consent"
              checked={formData.consent}
              onChange={handleCheckboxChange}
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-checked': {
                  color: '#3c5a1e',
                },
              }}
            />
          }
          label={
            <Typography className="text-[#b0b0b0]">
              I consent to Quantum Robotics processing my data and contacting me
              about their products and services.
            </Typography>
          }
        />
        {!!errors.consent && (
          <FormHelperText sx={{ color: 'red', margin: 2 }}>
            {errors.consent}
          </FormHelperText>
        )}
      </Grid>
    </Grid>
  );
};

export default DesiredOutcomesStep;

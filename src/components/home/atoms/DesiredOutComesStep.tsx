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

  return (
    <Grid container spacing={3}>
      <Grid item xs={10}>
        <Typography variant="body1" className="text-white">
          Desired ROI Timeframe
        </Typography>
        <Slider
          value={formData.roiTimeframe}
          onChange={handleSliderChange}
          step={1}
          min={6}
          max={24}
          marks={[
            { value: 6, label: '6 months' },
            { value: 24, label: '24+ months' },
          ]}
          sx={{
            marginLeft: 4,
            marginTop: 4,
            marginBottom: -4,
            color: '#1e1e1e',
            height: 6,
            '& .MuiSlider-thumb': {
              backgroundColor: '#3c5a1e',
              width: 20,
              height: 20,
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0px 0px 0px 8px rgba(60, 90, 30, 0.16)',
              },
            },
            '& .MuiSlider-track': {
              backgroundColor: '#1e1e1e',
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#1e1e1e',
            },
            '& .MuiSlider-markLabel': {
              color: '#b0b0b0',
              top: '-15px',
            },
          }}
        />
      </Grid>

      <Grid item xs={12} className="w-full">
        <Typography
          align="center"
          variant="h6"
          sx={{
            color: '#3c5a1e',
            fontWeight: 'bold',
            marginBottom: 2,
          }}
        >
          {formData.roiTimeframe} months
        </Typography>
      </Grid>

      <Grid item xs={12}>
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

      <Grid item xs={12}>
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

      <Grid item xs={12}>
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

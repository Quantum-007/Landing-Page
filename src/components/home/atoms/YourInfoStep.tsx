import FormField from './FormField';

import { SelectChangeEvent } from '@mui/material/Select';
import { useQuantumStore } from '@/providers/QuantumStoreProvider';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

const YourInfoStep = () => {
  const { formData, setFormData, errors } = useQuantumStore((state) => state);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ [event.target.name]: event.target.value });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const name = event.target.name as keyof typeof formData;
    setFormData({ [name]: event.target.value as string });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormField
          label="Full Name"
          name="name"
          value={formData.name || ''}
          onChange={handleFormChange}
          required
          error={!!errors.name}
          helperText={errors.name}
        />
      </Grid>
      <Grid item xs={12}>
        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email || ''}
          onChange={handleFormChange}
          required
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>
      <Grid item xs={12}>
        <FormField
          label="Company Name"
          name="company"
          value={formData.company || ''}
          onChange={handleFormChange}
          error={!!errors.company}
          helperText={errors.company}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl
          fullWidth
          variant="outlined"
          error={!!errors.industry}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#121212',
              color: 'white',
              '& fieldset': {
                borderColor: errors.industry ? '#d32f2f' : 'transparent',
              },
              '&:hover fieldset': {
                borderColor: errors.industry ? '#d32f2f' : '#3c5a1e',
              },
              '&.Mui-focused fieldset': {
                borderColor: errors.industry ? '#d32f2f' : '#3c5a1e',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
              '&.Mui-focused': {
                color: 'white',
              },
            },
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          }}
        >
          <InputLabel id="industry-label">Industry*</InputLabel>
          <Select
            labelId="industry-label"
            label="Industry*"
            name="industry"
            value={formData.industry}
            onChange={handleSelectChange}
            required
            MenuProps={{
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
            }}
          >
            <MenuItem value="">Select your industry</MenuItem>
            <MenuItem value="manufacturing">Manufacturing</MenuItem>
            <MenuItem value="food">Food & Beverage</MenuItem>
            <MenuItem value="pharma">Pharmaceutical</MenuItem>
            <MenuItem value="logistics">Logistics & Distribution</MenuItem>
            <MenuItem value="retail">Retail</MenuItem>
            <MenuItem value="agriculture">Agriculture</MenuItem>
            <MenuItem value="healthcare">Healthcare</MenuItem>
            <MenuItem value="energy">Renewable Energy</MenuItem>
            <MenuItem value="construction">Construction</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {errors.industry && (
            <FormHelperText>{errors.industry}</FormHelperText>
          )}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default YourInfoStep;

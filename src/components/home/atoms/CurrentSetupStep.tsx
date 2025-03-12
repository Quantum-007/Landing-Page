import FormField from './FormField';

import { SelectChangeEvent } from '@mui/material/Select';
import { useQuantumStore } from '@/providers/QuantumStoreProvider';
import { Grid, Typography, Slider, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

const CurrentSetupStep = () => {
  const { formData, setFormData, errors } = useQuantumStore((state) => state);

  const handleSliderChange = (event: Event, value: number | number[]) => {
    setFormData({
      automationLevel: Array.isArray(value) ? value[0] : value,
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const name = event.target.name as keyof typeof formData;
    setFormData({ [name]: event.target.value as string });
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ [event.target.name]: event.target.value });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" className="text-white">
          Current Level of Automation
        </Typography>
        <Slider
          value={formData.automationLevel || 0}
          onChange={handleSliderChange}
          step={1}
          min={0}
          max={10}
          marks={[
            { value: 0, label: 'No Automation' },
            { value: 10, label: 'Fully Automated' },
          ]}
          sx={{ color: '#3c5a1e', marginLeft: 4 }}
          valueLabelDisplay="auto"
          aria-labelledby="automation-level-slider"
        />
        <Typography
          align="center"
          sx={{
            color: '#3c5a1e',
            fontWeight: 'bold',
            marginBottom: 4,
          }}
        >
          {formData.automationLevel <= 3
            ? `Low Automation (${formData.automationLevel}/10)`
            : formData.automationLevel <= 7
              ? `Moderate Automation (${formData.automationLevel}/10)`
              : `High Automation (${formData.automationLevel}/10)`}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <FormControl
          fullWidth
          variant="outlined"
          error={!!errors.operationSize}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#121212',
              color: 'white',
              '& fieldset': {
                borderColor: errors.operationSize ? '#d32f2f' : 'transparent',
              },
              '&:hover fieldset': {
                borderColor: errors.operationSize ? '#d32f2f' : '#3c5a1e',
              },
              '&.Mui-focused fieldset': {
                borderColor: errors.operationSize ? '#d32f2f' : '#3c5a1e',
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
          <InputLabel id="operation-size-label">Operation Size</InputLabel>
          <Select
            labelId="operation-size-label"
            label="Operation Size"
            name="operationSize"
            value={formData.operationSize || ''}
            onChange={handleSelectChange}
          >
            <MenuItem value="small">Small (1-50 employees)</MenuItem>
            <MenuItem value="medium">Medium (51-200 employees)</MenuItem>
            <MenuItem value="large">Large (200-1000 employees)</MenuItem>
            <MenuItem value="enterprise">Enterprise (1000+ employees)</MenuItem>
          </Select>
          {errors.operationSize && <FormHelperText>{errors.operationSize}</FormHelperText>}
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormField
          label="Current Systems in Place*"
          name="currentSystems"
          value={formData.currentSystems || ''}
          onChange={handleFormChange}
          multiline
          rows={4}
          placeholder="Briefly describe any automation or robotics systems you currently use..."
          error={!!errors.currentSystems}
          helperText={errors.currentSystems}
        />
      </Grid>
    </Grid>
  );
};

export default CurrentSetupStep;

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';

import { CheckCircle } from '@mui/icons-material';
import { PilotProgramFormData } from '@/types/forms/form';
import {
  Snackbar,
  Alert,
  AlertColor,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useQuantumStore } from '@/providers/QuantumStoreProvider';

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Checkbox,
  FormControlLabel,
  StepIconProps,
  Slider,
  Stepper,
  Step,
  StepLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

const Contact = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const steps = [
    'Your Info',
    'Current Setup',
    'Challenges',
    'Desired Outcomes',
  ];
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

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactStep, setContactStep] = useState(0);
  const [severity, setSeverity] = useState<AlertColor>('success');
  const [contactFormType, setContactFormType] = useState('comprehensive');
  const [alertmessage, setAlertMessage] = useState<string>('');
  const [formData, setFormData] = useState<PilotProgramFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false,
    industry: '',
    automationLevel: 3,
    operationSize: 'small',
    currentSystems: '',
    challenges: [],
    roiTimeframe: 12,
    roboticSolutions: [],
    implementationTimeline: '',
    additionalNotes: '',
    specificChallanges: '',
  });

  const { message, clearMessage, tabName, clearTab } = useQuantumStore(
    (state) => state,
  );

  useEffect(() => {
    if (message) {
      setFormData((prev) => ({ ...prev, message }));
      clearMessage();
      setContactFormType('quick');
    }

    if (tabName) {
      setContactFormType(tabName);
      clearTab();
    }
  }, [clearMessage, clearTab, formData, message, tabName]);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked, type } = event.target;

    setFormData((prevData) => {
      if (name === 'challenges') {
        return {
          ...prevData,
          challenges: checked
            ? [...prevData.challenges, value]
            : prevData.challenges.filter((challenge) => challenge !== value), // Remove if unchecked
        };
      }

      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  // console.log('asdasasda);
  const handleSelectChange = (event: SelectChangeEvent<string>): void => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSliderChange = (event: Event, value: number | number[]) => {
    setFormData((prevData) => ({
      ...prevData,
      automationLevel: Array.isArray(value) ? value[0] : value,
    }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const CustomStepIcon = (props: StepIconProps) => {
    const { active, completed, icon } = props;

    if (completed) {
      return (
        <CheckCircle
          style={{ color: '#3c5a1e' }}
          sx={{ width: '30px', height: '30px' }}
        />
      );
    }
    if (active) {
      return (
        <div
          style={{
            backgroundColor: '#3c5a1e',
            color: 'white',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            borderRadius: '20px',
          }}
        >
          {icon}
        </div>
      );
    }

    return (
      <div
        style={{
          backgroundColor: '#1e1e1e',
          color: 'white',
          width: '35px',
          height: '35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          borderRadius: '20px',
        }}
      >
        {icon}
      </div>
    );
  };

  const HandleSubmitGeneralInquery = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      consent: formData.consent,
    };

    try {
      const res = await fetch('/api/createGeneralInquery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      console.log('PRISMA RESPONSE==:', res);

      if (res.ok) {
        resetFormData();
      } else {
        setLoading(false);
        setAlertMessage('There was an error submitting your inquiry');
        setSeverity('error');
        setOpen(true);
      }
    } catch (error) {
      setLoading(false);
      setAlertMessage('Something went wrong, please try again later.');
      setSeverity('error');
      setOpen(true);
      console.error('Error submitting form:', error);
    }
  };

  const handleSubmitPilotProgramInfo = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch('/api/createPilotProgramInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      console.log('Jion Polit program RESPONSE', res);

      if (res.ok) {
        resetFormData();
      } else {
        setAlertMessage('Something went wrong!');
        setSeverity('error');
        setOpen(true);
      }
    } catch (error) {
      setAlertMessage('Network error, please try again later.');
      setSeverity('error');
      console.error('Fetch Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      consent: false,
      industry: '',
      automationLevel: 3,
      operationSize: 'small',
      currentSystems: '',
      challenges: [],
      roiTimeframe: 12,
      roboticSolutions: [],
      implementationTimeline: '',
      additionalNotes: '',
      specificChallanges: '',
    });
    setLoading(false);
    setAlertMessage('Your request has been saved!');
    setSeverity('success');
    clearMessage();
    setOpen(true);
  };

  const commonInputStyles = {
    InputProps: {
      sx: {
        color: 'white',
        '&.MuiOutlinedInput-root': {
          backgroundColor: '#121212',
          '& fieldset': {
            borderColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: '#3c5a1e',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#3c5a1e',
          },
        },
      },
    },
    InputLabelProps: {
      className: 'text-white',
      sx: {
        color: 'white',
        '&.Mui-focused': {
          color: 'white',
        },
      },
    },
  };

  return (
    <Box id="contact" className="py-20 bg-[#1e1e1e]">
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h4"
              fontWeight="600"
              className="text-3xl text-start font-bold pb-1 relative inline-block"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  width: '100%',
                  height: '4px',
                  backgroundColor: '#3c5a1e',
                  transform: 'translateX(-50%)',
                },
              }}
            >
              Contact Quantum
            </Typography>

            <Typography
              variant="body1"
              className={`text-[#b0b0b0] pt-8 ${isTablet ? 'text-center' : ''}`}
            >
              Join our{' '}
              <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded animate-pulse">
                FREE
              </span>{' '}
              pilot program to be among the first to implement our cutting-edge
              robotics solutions in your operations. Our pilot program provides
              hands-on experience with our technology along with dedicated
              implementation support and custom configuration.
            </Typography>

            <Typography
              variant="body1"
              className={`text-[#b0b0b0] pt-4 ${isTablet ? 'text-center' : ''}`}
            >
              Fill out the form to schedule a personalized demo tailored to your
              industry needs.
            </Typography>

            <Box
              className={`rounded-md inline-flex overflow-hidden mt-8 ${
                isTablet ? 'mx-auto' : ''
              }`}
            >
              <Button
                sx={{
                  backgroundColor:
                    contactFormType === 'comprehensive' ? '#3c5a1e' : '#2d2d2d',
                  color: contactFormType === 'comprehensive' ? 'white' : 'grey',
                  transform: 'none',
                }}
                onClick={() => setContactFormType('comprehensive')}
              >
                Pilot Program Sign Up
              </Button>
              <Button
                sx={{
                  backgroundColor:
                    contactFormType === 'quick' ? '#3c5a1e' : '#2d2d2d',
                  color: contactFormType === 'quick' ? 'white' : 'grey',
                  transform: 'none',
                }}
                onClick={() => setContactFormType('quick')}
              >
                General Inquiries
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card className="shadow-lg">
              <CardContent className="p-6 bg-[#2d2d2d]">
                {contactFormType === 'quick' ? (
                  <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          variant="outlined"
                          fullWidth
                          required
                          {...commonInputStyles}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          variant="outlined"
                          fullWidth
                          required
                          InputProps={{
                            ...commonInputStyles.InputProps,
                          }}
                          InputLabelProps={commonInputStyles.InputLabelProps}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Company Name"
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          variant="outlined"
                          fullWidth
                          InputProps={{
                            ...commonInputStyles.InputProps,
                          }}
                          InputLabelProps={commonInputStyles.InputLabelProps}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={4}
                          required
                          InputProps={{
                            ...commonInputStyles.InputProps,
                          }}
                          InputLabelProps={commonInputStyles.InputLabelProps}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              required
                              name="consent"
                              checked={formData.consent}
                              onChange={handleFormChange}
                              sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                '&.Mui-checked': {
                                  color: '#3c5a1e',
                                },
                              }}
                            />
                          }
                          label={
                            <Typography
                              variant="body2"
                              className="text-[#b0b0b0]"
                            >
                              I consent to Quantum Robotics processing my data
                              and contacting me about their products and
                              services.
                            </Typography>
                          }
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          type="submit"
                          fullWidth
                          loading={loading}
                          sx={{
                            backgroundColor: '#3c5a1e',
                            color: 'white',
                            transform: 'none',
                            '& .MuiCircularProgress-root': {
                              color: 'white',
                            },
                          }}
                          onClick={HandleSubmitGeneralInquery}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <Stepper
                      activeStep={contactStep}
                      className="mb-8"
                      alternativeLabel
                    >
                      {steps.map((step, index) => (
                        <Step key={index}>
                          <StepLabel
                            StepIconComponent={CustomStepIcon}
                            sx={{
                              '& .MuiStepLabel-label': {
                                color: 'white !important',
                              },
                            }}
                          >
                            {step}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>

                    {contactStep === 0 && (
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                              ...commonInputStyles.InputProps,
                            }}
                            InputLabelProps={commonInputStyles.InputLabelProps}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                              ...commonInputStyles.InputProps,
                            }}
                            InputLabelProps={commonInputStyles.InputLabelProps}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Company Name"
                            name="company"
                            value={formData.company}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                              ...commonInputStyles.InputProps,
                            }}
                            InputLabelProps={commonInputStyles.InputLabelProps}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel
                              sx={{
                                color: 'white',
                                '&.Mui-focused': { color: 'white' },
                              }}
                            >
                              Industry*
                            </InputLabel>
                            <Select
                              label="Industry*"
                              name="industry"
                              value={formData.industry}
                              onChange={handleSelectChange}
                              required
                              sx={{
                                backgroundColor: '#121212',
                                color: 'white',
                                '.MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#3c5a1e',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline':
                                  {
                                    borderColor: '#3c5a1e',
                                  },
                                '.MuiSvgIcon-root': {
                                  color: 'white',
                                },
                              }}
                            >
                              <MenuItem value="">Select your industry</MenuItem>
                              <MenuItem value="manufacturing">
                                Manufacturing
                              </MenuItem>
                              <MenuItem value="food">Food & Beverage</MenuItem>
                              <MenuItem value="pharma">Pharmaceutical</MenuItem>
                              <MenuItem value="logistics">
                                Logistics & Distribution
                              </MenuItem>
                              <MenuItem value="retail">Retail</MenuItem>
                              <MenuItem value="agriculture">
                                Agriculture
                              </MenuItem>
                              <MenuItem value="healthcare">Healthcare</MenuItem>
                              <MenuItem value="energy">
                                Renewable Energy
                              </MenuItem>
                              <MenuItem value="construction">
                                Construction
                              </MenuItem>
                              <MenuItem value="other">Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} className="flex justify-end">
                          <Button
                            variant="contained"
                            onClick={() => {
                              setContactStep(1);
                            }}
                            sx={{
                              backgroundColor: '#3c5a1e',
                              color: 'white',
                              transform: 'none',
                              '& .MuiCircularProgress-root': {
                                color: 'white',
                              },
                            }}
                          >
                            Next: Current Setup
                          </Button>
                        </Grid>
                      </Grid>
                    )}
                    {contactStep === 1 && (
                      <Grid container spacing={3}>
                        {/* Current Level of Automation */}
                        <Grid item xs={10}>
                          <Typography variant="h6" className="text-white">
                            Current Level of Automation
                          </Typography>
                          <Slider
                            value={formData.automationLevel}
                            onChange={handleSliderChange}
                            step={1}
                            min={0}
                            max={10}
                            marks={[
                              { value: 0, label: 'No Automation' },
                              { value: 10, label: 'Fully Automated' },
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
                            {formData.automationLevel <= 3
                              ? `Low Automation (${formData.automationLevel}/10)`
                              : formData.automationLevel <= 7
                              ? `Moderate Automation (${formData.automationLevel}/10)`
                              : `High Automation (${formData.automationLevel}/10)`}
                          </Typography>
                        </Grid>

                        {/* Operation Size */}
                        <TextField
                          select
                          label="Operation Size"
                          name="operationSize"
                          value={formData.operationSize}
                          onChange={handleFormChange}
                          variant="outlined"
                          sx={{ marginLeft: 3 }}
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
                          InputProps={{ ...commonInputStyles.InputProps }}
                          InputLabelProps={commonInputStyles.InputLabelProps}
                        >
                          <MenuItem value="small">
                            Small (1-50 employees)
                          </MenuItem>
                          <MenuItem value="medium">
                            Medium (51-200 employees)
                          </MenuItem>
                          <MenuItem value="large">
                            Large (200-1000 employees)
                          </MenuItem>
                          <MenuItem value="enterprise">
                            Enterprise (1000+ employees)
                          </MenuItem>
                        </TextField>

                        <Grid item xs={12}>
                          <TextField
                            label="Current Systems in Place"
                            name="currentSystems"
                            value={formData.currentSystems}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="Briefly describe any automation or robotics systems you currently use..."
                            InputProps={{ ...commonInputStyles.InputProps }}
                            InputLabelProps={commonInputStyles.InputLabelProps}
                          />
                        </Grid>

                        <Grid item xs={12} className="flex justify-between">
                          <Button
                            variant="outlined"
                            onClick={() => setContactStep(0)}
                            sx={{
                              backgroundColor: '#2d2d2d',
                              color: 'white',
                              borderColor: '#3c5a1e',
                              '&:hover': {
                                backgroundColor: '#3c5a1e',
                                borderColor: '#3c5a1e',
                              },
                            }}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="contained"
                            onClick={() => setContactStep(2)}
                            sx={{ backgroundColor: '#3c5a1e', color: 'white' }}
                          >
                            Next: Challanges
                          </Button>
                        </Grid>
                      </Grid>
                    )}

                    {contactStep == 2 && (
                      <Box>
                        <Typography
                          variant="h6"
                          className="text-white"
                          gutterBottom
                        >
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
                                    checked={formData.challenges.includes(
                                      challenge,
                                    )}
                                    onChange={(e) => handleFormChange(e)}
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
                        </Grid>

                        <Typography
                          variant="h6"
                          className="text-white"
                          sx={{ mt: 3 }}
                        >
                          Describe specific challenges in more detail
                        </Typography>
                        <TextField
                          name="specificChallanges"
                          value={formData.specificChallanges}
                          onChange={handleFormChange}
                          InputProps={{ ...commonInputStyles.InputProps }}
                          InputLabelProps={commonInputStyles.InputLabelProps}
                          multiline
                          rows={4}
                          variant="outlined"
                          fullWidth
                        />
                        <Grid
                          item
                          xs={12}
                          className="flex justify-between pt-6"
                        >
                          <Button
                            variant="outlined"
                            onClick={() => setContactStep(1)}
                            sx={{
                              backgroundColor: '#2d2d2d',
                              color: 'white',
                              borderColor: '#3c5a1e',
                              '&:hover': {
                                backgroundColor: '#3c5a1e',
                                borderColor: '#3c5a1e',
                              },
                            }}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="contained"
                            onClick={() => setContactStep(3)}
                            sx={{ backgroundColor: '#3c5a1e', color: 'white' }}
                          >
                            Next: Desired Outcomes
                          </Button>
                        </Grid>
                      </Box>
                    )}
                    {contactStep === 3 && (
                      <Grid container spacing={3}>
                        {/* Desired ROI Timeframe */}
                        <Grid item xs={10}>
                          <Typography variant="h6" className="text-white">
                            Desired ROI Timeframe
                          </Typography>
                          <Slider
                            value={formData.roiTimeframe}
                            onChange={(e, value) =>
                              setFormData({
                                ...formData,
                                roiTimeframe: value as number,
                              })
                            }
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

                        {/* Robotics Solutions Dropdown */}
                        <Grid item xs={10}>
                          <TextField
                            select
                            label="What robotics solutions are you most interested in?"
                            name="roboticSolutions"
                            value={formData.roboticSolutions}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                roboticSolutions: event.target
                                  .value as unknown as string[],
                              })
                            }
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
                            InputProps={{ ...commonInputStyles.InputProps }}
                            InputLabelProps={commonInputStyles.InputLabelProps}
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

                        {/* Implementation Timeline Dropdown */}
                        <Grid item xs={10}>
                          <TextField
                            select
                            label="Desired Implementation Timeline"
                            name="implementationTimeline"
                            value={formData.implementationTimeline}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                implementationTimeline: event.target.value,
                              })
                            }
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
                            InputProps={{ ...commonInputStyles.InputProps }}
                            InputLabelProps={commonInputStyles.InputLabelProps}
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

                        {/* Additional Notes */}
                        <Grid item xs={10}>
                          <TextField
                            label="Additional Notes"
                            name="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            InputProps={{ ...commonInputStyles.InputProps }}
                            InputLabelProps={commonInputStyles.InputLabelProps}
                          />
                        </Grid>

                        {/* Consent Checkbox */}
                        <Grid item xs={10}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                name="consent"
                                checked={formData.consent}
                                onChange={handleFormChange}
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
                                I consent to Quantum Robotics processing my data
                                and contacting me about their products and
                                services.
                              </Typography>
                            }
                          />
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          className="flex justify-between pt-6"
                        >
                          <Button
                            variant="outlined"
                            onClick={() => setContactStep(2)}
                            sx={{
                              backgroundColor: '#2d2d2d',
                              color: 'white',
                              borderColor: '#3c5a1e',
                              '&:hover': {
                                backgroundColor: '#3c5a1e',
                                borderColor: '#3c5a1e',
                              },
                            }}
                          >
                            Previous
                          </Button>

                          <Button
                            variant="contained"
                            type="submit"
                            loading={loading}
                            sx={{
                              backgroundColor: '#3c5a1e',
                              color: 'white',
                              transform: 'none',
                              '& .MuiCircularProgress-root': {
                                color: 'white',
                              },
                            }}
                            onClick={handleSubmitPilotProgramInfo}
                          >
                            Submit Request
                          </Button>
                        </Grid>
                      </Grid>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
          >
            <Alert
              severity={severity}
              sx={{ width: '100%' }}
              onClose={() => setOpen(false)}
            >
              {alertmessage}
            </Alert>
          </Snackbar>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;

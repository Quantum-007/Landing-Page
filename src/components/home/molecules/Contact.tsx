import React, { ChangeEvent, FormEvent, useState } from 'react';
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
  Stepper,
  Step,
  StepLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

import { useMutation } from '@apollo/client';
import { CreateGeneralInqueryDocument } from '@/lib/gql/graphql';



interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
  industry: string;
}

const Contact = () => {
  const [contactStep, setContactStep] = useState(0);
  const [contactFormType, setContactFormType] = useState('comprehensive');
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false,
    industry: '',
  });

  const [createGeneralInquery] = useMutation(CreateGeneralInqueryDocument);

  const isTablet = window.innerWidth < 1024;


  const handleFormChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked, type } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const HandleSubmitGeneralInquery = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await createGeneralInquery({
      variables: {
        input: {
          attributes: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            consent: formData.consent
          }
        }
      }
    });


    if (data?.createGeneralInquery?.success) {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        consent: false,
        industry: '',
      })
      setLoading(false);

    }
  }

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
              className={`text-3xl font-bold pb-1 relative ${isTablet ? 'after:left-1/2 after:-translate-x-1/2' : ''
                }`}
              sx={{
                position: 'relative',
                '&::after': {
                  left: 0,
                  height: '3px',
                  content: '""',
                  width: '180px',
                  bottom: '-10px',
                  position: 'absolute',
                  backgroundColor: '#3c5a1e',
                },
              }}
            >
              Contact Quantum
            </Typography>

            <Typography
              variant="body1"
              className={`text-[#b0b0b0] pt-8 ${isTablet ? 'text-center' : ''
                }`}
            >
              Join our{' '}
              <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded ml-2 animate-pulse">
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
              className={`rounded-md inline-flex overflow-hidden mt-8 ${isTablet ? 'mx-auto' : ''}`}
            >
              <Button
                sx={{

                  backgroundColor: contactFormType === 'comprehensive' ? '#3c5a1e' : '#2d2d2d',
                  color: contactFormType === 'comprehensive' ? 'white' : 'grey',
                  transform: 'none'
                }}
                onClick={() => setContactFormType('comprehensive')}
              >
                Pilot Program Sign Up
              </Button>
              <Button
                sx={{

                  backgroundColor: contactFormType === 'quick' ? '#3c5a1e' : '#2d2d2d',
                  color: contactFormType === 'quick' ? 'white' : 'grey',
                  transform: 'none'
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
                  // General Inquiries Form
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
                            className: 'bg-gray-800',
                          }}
                          InputLabelProps={commonInputStyles.InputLabelProps} />
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
                            className: 'bg-gray-800',
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
                            className: 'bg-gray-800',
                          }}
                          InputLabelProps={commonInputStyles.InputLabelProps}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="consent"
                              checked={formData.consent}
                              onChange={handleFormChange}
                              required
                              sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                '&.Mui-checked': {
                                  color: '#3c5a1e',
                                },
                              }}
                            />
                          }
                          label={
                            <Typography variant="body2" className="text-gray-400 pt-4">
                              I consent to Quantum Robotics processing my data and contacting me about their products and services.*
                            </Typography>
                          }
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          variant='contained'
                          type='submit'
                          fullWidth
                          loading={loading}
                          sx={{

                            backgroundColor: '#3c5a1e',
                            color: 'white',
                            transform: 'none',
                            '& .MuiCircularProgress-root': {
                              color: 'white',
                            }
                          }}
                          onClick={HandleSubmitGeneralInquery}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                ) : (
                  // Pilot Program Form (Multi-step)
                  <form onSubmit={handleFormSubmit}>
                    <Stepper activeStep={contactStep} className="mb-8">
                      <Step>
                        <StepLabel>Your Info</StepLabel>
                      </Step>
                      <Step>
                        <StepLabel>Current Setup</StepLabel>
                      </Step>
                      <Step>
                        <StepLabel>Challenges</StepLabel>
                      </Step>
                      <Step>
                        <StepLabel>Desired Outcomes</StepLabel>
                      </Step>
                    </Stepper>

                    {/* Step 1: Basic Information */}
                    {contactStep === 0 && (
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            label="Full Name*"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                              className: 'bg-white rounded-md',
                            }}
                            InputLabelProps={{
                              className: 'text-gray-400',
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Email Address*"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                              className: 'bg-white rounded-md',
                            }}
                            InputLabelProps={{
                              className: 'text-gray-400',
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Company Name*"
                            name="company"
                            value={formData.company}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                              className: 'bg-white rounded-md',
                            }}
                            InputLabelProps={{
                              className: 'text-gray-400',
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel className="text-gray-400">
                              Industry*
                            </InputLabel>
                            <Select
                              label="Industry*"
                              name="industry"
                              value={formData.industry}
                              onChange={handleFormChange}
                              required
                              className="bg-white rounded-md text-white"
                              sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'rgba(255, 255, 255, 0.23)',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'rgba(255, 255, 255, 0.5)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline':
                                {
                                  borderColor: '#3c5a1e',
                                },
                                '& .MuiSvgIcon-root': {
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
                            onClick={() => { setContactStep(2) }}
                            className="px-6 py-2 bg-green-700 hover:bg-green-800"
                          >
                            Next: Current Setup
                          </Button>
                        </Grid>
                      </Grid>
                    )}

                    {/* Step navigation and next steps logic */}
                    {/* Steps 2 to 4 would be similar to step 1 */}
                  </form>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;

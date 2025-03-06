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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false,
    industry: '',
  });

  const isTablet = false; // You can replace this with actual logic for detecting tablet

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };
  return (
    <Box id="contact" className="py-20 bg-gray-800">
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h2"
              className={`text-3xl font-bold mb-4 relative ${
                isTablet
                  ? 'text-center after:left-1/2 after:-translate-x-1/2'
                  : ''
              }`}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '80px',
                  height: '4px',
                  backgroundColor: '#3c5a1e',
                },
              }}
            >
              Contact Quantum
            </Typography>
            <Typography
              variant="body1"
              className={`text-gray-400 mt-8 mb-6 ${
                isTablet ? 'text-center' : ''
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
              className={`text-gray-400 mb-6 ${isTablet ? 'text-center' : ''}`}
            >
              Fill out the form to schedule a personalized demo tailored to your
              industry needs.
            </Typography>

            <Box
              className={`bg-gray-700 rounded-md inline-flex overflow-hidden mb-8 ${
                isTablet ? 'mx-auto' : ''
              }`}
            >
              <Button
                className={`px-4 py-2 ${
                  contactFormType === 'comprehensive'
                    ? 'bg-green-700 text-white'
                    : 'text-gray-400'
                }`}
                onClick={() => setContactFormType('comprehensive')}
              >
                Pilot Program Sign Up
              </Button>
              <Button
                className={`px-4 py-2 ${
                  contactFormType === 'quick'
                    ? 'bg-green-700 text-white'
                    : 'text-gray-400'
                }`}
                onClick={() => setContactFormType('quick')}
              >
                General Inquiries
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card className="bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                {contactFormType === 'quick' ? (
                  // General Inquiries Form
                  <form onSubmit={handleFormSubmit}>
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
                            className: 'bg-gray-800 rounded-md',
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
                            className: 'bg-gray-800 rounded-md',
                          }}
                          InputLabelProps={{
                            className: 'text-gray-400',
                          }}
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
                            className: 'bg-gray-800 rounded-md',
                          }}
                          InputLabelProps={{
                            className: 'text-gray-400',
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Message*"
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={4}
                          required
                          InputProps={{
                            className: 'bg-gray-800 rounded-md',
                          }}
                          InputLabelProps={{
                            className: 'text-gray-400',
                          }}
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
                            <Typography
                              variant="body2"
                              className="text-gray-400"
                            >
                              I consent to Quantum Robotics processing my data
                              and contacting me about their products and
                              services.*
                            </Typography>
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          className="py-3 bg-green-700 hover:bg-green-800"
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
                              className: 'bg-gray-800 rounded-md',
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
                              className: 'bg-gray-800 rounded-md',
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
                              className: 'bg-gray-800 rounded-md',
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
                              className="bg-gray-800 rounded-md text-white"
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
                            onClick={() => setContactStep(1)}
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

'use client';

import GeneralInquiryForm from '../atoms/GeneralInqueryForm';
import JoinPilotProgram from '../atoms/JoinPilotProgram';

import React, { useState, useEffect } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';
import { useQuantumStore } from '@/providers/QuantumStoreProvider';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';

const Contact = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [contactFormType, setContactFormType] = useState('comprehensive');

  const { message, tabName, clearTab } = useQuantumStore((state) => state);

  useEffect(() => {
    if (message) {
      setContactFormType('quick');
    }

    if (tabName) {
      setContactFormType(tabName);
      clearTab();
    }
  }, [, clearTab, message, tabName]);

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
              className={`rounded-md inline-flex overflow-hidden mt-8 ${isTablet ? 'mx-auto' : ''
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
                  <GeneralInquiryForm />
                ) : (
                  <JoinPilotProgram />
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

import React from 'react';

import { getPlaceholderImage } from '@/utils/placeHolderImage';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const IndustrialAutomation = () => {
  return (
    <Box
      id="hero"
      className="flex items-center relative overflow-hidden py-20 bg-[#121212]"
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '50%',
          background:
            'linear-gradient(to right, transparent, rgba(60, 90, 30, 0.1))',
          zIndex: 1,
        },
      }}
    >
      <Container className="relative z-2">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="body1"
                fontWeight="600"
                className="font-bold pb-4 tracking-wider uppercase text-[#5a7d2f]"
              >
                INDUSTRIAL AUTOMATION
              </Typography>

              <Typography
                variant="h2"
                fontWeight="1000"
                className="text-start pb-4"
              >
                Precision Robotics Engineered for Performance
              </Typography>

              <Typography
                variant="body1"
                fontSize="17.6"
                className="text-[#b0b0b0] mt-6"
              >
                Our robotic solutions combine cutting-edge technology with
                industrial-grade reliability to deliver unmatched efficiency,
                precision, and cost-effectiveness across multiple industries.
              </Typography>

              <Box className="flex flex-col sm:flex-row gap-4 mb-8 mt-4">
                <Button
                  href="#contact"
                  variant="contained"
                  sx={{
                    bgcolor: '#3c5a1e',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: 'var(--accent-hover)' },
                  }}
                >
                  Join Pilot Program *
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#products"
                  sx={{
                    borderColor: '#3c5a1e',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'var(--accent-hover)',
                      borderColor: '#3c5a1e',
                    },
                  }}
                >
                  Explore Solutions
                </Button>
              </Box>
              <Box className="flex flex-col sm:flex-row gap-8">
                <Box className="flex flex-col">
                  <Typography
                    variant="h4"
                    className="text-4xl font-bold text-[#3c5a1e]"
                  >
                    99.8%
                  </Typography>
                  <Typography variant="body2" className="text-[#b0b0b0]">
                    Operational Reliability
                  </Typography>
                </Box>
                <Box className="flex flex-col">
                  <Typography
                    variant="h4"
                    className="text-4xl font-bold text-[#3c5a1e]"
                  >
                    35%
                  </Typography>
                  <Typography variant="body2" className="text-[#b0b0b0]">
                    Average Cost Reduction
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="flex justify-center md:justify-end"
          >
            <Box
              component="img"
              className="rounded-md shadow-2xl"
              src={getPlaceholderImage(600, 400)}
              alt="Quantum Robotics Industrial Automation Solutions"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustrialAutomation;

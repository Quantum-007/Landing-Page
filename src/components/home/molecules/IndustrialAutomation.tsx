import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

import { getPlaceholderImage } from '@/utils/placeHolderImage';

const IndustrialAutomation = () => {
  return (
    <Box
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-[#121212]"
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '50%',
          background: 'linear-gradient(to right, transparent, rgba(60, 90, 30, 0.1))',
          zIndex: 1,
        },
      }}
    >
      <Container className="relative z-2">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h6"
                sx={{ color: 'var(--accent-primary)' }}
                className="font-bold mb-10 tracking-wider uppercase"
              >
                INDUSTRIAL AUTOMATION
              </Typography>

              <Typography
                variant="h3"
                className="font-bold text-start mb-10 mt-20"
              >
                Precision Robotics Engineered for Performance
              </Typography>
              <Typography variant="h6" className="text-gray-400 mt-6">
                Our robotic solutions combine cutting-edge technology with industrial-grade reliability to deliver unmatched efficiency, precision, and cost-effectiveness across multiple industries.
              </Typography>

              <Box className="flex flex-col sm:flex-row gap-4 mb-8 mt-4">
                <Button
                  variant="contained"
                  href="#contact"
                  sx={{
                    bgcolor: 'var(--accent-primary)',
                    '&:hover': { bgcolor: 'var(--accent-hover)' },
                    fontWeight: 'bold',
                  }}
                >
                  Join Pilot Program *
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#products"
                  sx={{
                    borderColor: "#5a7d2f",
                    color: "white",
                    "&:hover": {
                      bgcolor: 'var(--accent-hover)',
                      borderColor: "#5a7d2f",
                    },
                  }}
                >
                  Explore Solutions
                </Button>

              </Box>
              <Box className="flex flex-col sm:flex-row gap-8">
                <Box className="flex flex-col">
                  <Typography variant="h3" className="text-4xl font-bold text-green-500">
                    99.8%
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Operational Reliability
                  </Typography>
                </Box>
                <Box className="flex flex-col">
                  <Typography variant="h3" className="text-4xl font-bold text-green-500">
                    35%
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Average Cost Reduction
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="flex justify-center md:justify-end">
            <Box
              component="img"
              src={getPlaceholderImage(600, 400)}
              alt="Quantum Robotics Industrial Automation Solutions"
              className="rounded-md shadow-2xl"
            />
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
};

export default IndustrialAutomation;

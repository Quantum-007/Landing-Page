import React from 'react';
import Image from 'next/image';
import { useQuantumStore } from '@/providers/QuantumStoreProvider';

import { Box, Container, Grid, Typography, Button } from '@mui/material';

const IndustrialAutomation = () => {
  const { setTab } = useQuantumStore((state) => state)
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
                  onClick={() => setTab('comprehensive')}
                  sx={{
                    bgcolor: '#3c5a1e',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#2c6e31' },
                  }}
                >
                  Join Pilot Program
                  <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 ml-2 rounded animate-pulse">
                    FREE
                  </span>
                </Button>

                <Button
                  size="large"
                  variant="outlined"
                  href="#our-products"
                  sx={{
                    borderColor: '#3c5a1e',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#2c6e31',
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
                    sx={{ fontWeight: 600 }}
                    className="text-4xl text-[#3c5a1e]"
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
                    sx={{ fontWeight: 600 }}
                    className="text-4xl text-[#3c5a1e]"
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
            md={6}
            xs={12}
            className="flex justify-center md:justify-end"
          >
            <Image
              width={600}
              height={500}
              loading="lazy"
              alt="precision"
              src="/assets/home/precision.svg"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustrialAutomation;

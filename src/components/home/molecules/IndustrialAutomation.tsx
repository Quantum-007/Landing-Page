import React from 'react';
// import Image from 'next/image';

import { useQuantumStore } from '@/providers/QuantumStoreProvider';
import { Box, Container, Typography, Button } from '@mui/material';

const IndustrialAutomation = () => {
  const { setTab, setMessage } = useQuantumStore((state) => state);

  const handleButtonClicked = () => {
    setTab('comprehensive');
    setMessage('');
  };

  return (
    <Box
      id="hero"
      className="flex flex-col items-center overflow-hidden py-20 bg-[#121212]"
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
      <Container className="relative z-2 flex flex-col items-center text-center">
        <Typography
          variant="body1"
          fontWeight="600"
          className="font-bold pb-4 tracking-wider uppercase text-[#5a7d2f]"
        >
          Automation From the Future
        </Typography>

        <Typography variant="h2" fontWeight="1000" className="pb-4 max-w-4xl">
          Precision Robotics Engineered for Performance
        </Typography>

        <Typography
          variant="body1"
          fontSize="17.6"
          className="text-[#b0b0b0] mt-6"
        >
          Smart Robotics. Smarter Software. Infinite Possibilities.
        </Typography>

        <Box className="flex flex-col sm:flex-row gap-4 mb-8 mt-4">
          <Button
            href="#contact"
            variant="contained"
            onClick={handleButtonClicked}
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

          {/* <Button
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
          </Button> */}
        </Box>

        {/* <Box className="h-[600] w-full">
          <Image
            width={1200}
            height={600}
            loading="lazy"
            alt="precision"
            layout="intrinsic"
            className="w-full h-auto"
            src="/assets/home/precision.svg"
          />
        </Box> */}
      </Container>
    </Box>
  );
};

export default IndustrialAutomation;

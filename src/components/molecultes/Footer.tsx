'use client';

import Image from 'next/image';

import {
  Box,
  Grid,
  Link,
  Container,
  Typography,
} from '@mui/material';

import {
  Map as MapIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

// Temporarily comment out store dependency
// import { useQuantumStore } from '@/providers/QuantumStoreProvider';

const Footer = () => {
  // Temporarily remove store dependency
  // const { setMessage } = useQuantumStore((state) => state);

  const handleClick = (message: string | null) => {
    // Temporarily comment out store action
    // if (message) {
    //   setMessage(message);
    // }
    
    // For now, just scroll to the contact section
    if (message) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Box
      component="footer"
      className="py-12 bg-[#2d2d2d] border-t border-[#3a3a3a]"
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              fontWeight="600"
              className="font-semibold text-[#f2f2f2] relative inline-block"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#3c5a1e',
                  transform: 'translateX(-50%)',
                },
              }}
            >
              Quantum Robotics
            </Typography>

            <Typography variant="body1" className="text-[#b0b0b0] py-5">
              Revolutionizing industrial automation with precision robotics and
              intelligent systems.
            </Typography>

            <Image
              width={100}
              height={100}
              src="/assets/logo.svg"
              alt="Quantum Robotics Logo"
              priority
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="600"
              className="font-semibold text-[#f2f2f2] relative inline-block"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#3c5a1e',
                  transform: 'translateX(-50%)',
                },
              }}
            >
              Company
            </Typography>

            <Box className="space-y-2 mt-5">
              {[
                { text: 'About Us', href: '#vision-mission' },
                { text: 'Our Team', href: '#team' },
                { text: 'Blog', href: '#blog' },
                {
                  text: 'Careers',
                  href: '#contact',
                  message:
                    "I'm interested in career opportunities at Quantum Robotics.",
                },
                {
                  text: 'Investor Relations',
                  href: '#contact',
                  message:
                    "I'm interested in investment opportunities with Quantum Robotics.",
                },
              ].map((item) => (
                <Box key={item.text}>
                  <Link
                    href={item.href}
                    onClick={() => handleClick(item.message ?? null)}
                    sx={{
                      color: '#b0b0b0',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': { color: '#3c5a1e' },
                    }}
                  >
                    {item.text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              fontWeight="600"
              className="font-semibold text-[#f2f2f2] relative inline-block"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#3c5a1e',
                  transform: 'translateX(-50%)',
                },
              }}
            >
              Contact
            </Typography>

            <Box className="space-y-3 mt-5">
              <Box className="flex items-center justify-start gap-3 text-[#b0b0b0]">
                <MapIcon className="mt-1 text-[#3c5a1e] flex-shrink-0" />
                <Typography variant="body2">
                  RoboHouse, New York, NY 10036, United States
                </Typography>
              </Box>
              <Box className="flex items-center justify-start gap-3 text-[#b0b0b0]">
                <PhoneIcon className="mt-1 text-[#3c5a1e] flex-shrink-0" />
                <Typography variant="body2">+1 (650)-273-0693</Typography>
              </Box>
              <Box className="flex items-center justify-start gap-3 text-[#b0b0b0]">
                <EmailIcon className="mt-1 text-[#3c5a1e] flex-shrink-0" />
                <Typography variant="body2">
                  abdul@quantumroboticslab.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box className="mt-12 pt-6 border-t border-[#3a3a3a] text-center text-[#b0b0b0]">
          <Typography variant="body2">
            &copy; 2025 Quantum Robotics. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

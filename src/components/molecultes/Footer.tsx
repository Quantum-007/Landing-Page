'use client';

import {
  Box,
  Grid,
  Link,
  Container,
  Typography,
  IconButton,
} from '@mui/material';

import {
  Map as MapIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="py-12 bg-[#2d2d2d] border-t border-[#3a3a3a]"
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight="600"
              className="font-semibold pb-2 text-[#f2f2f2]"
              sx={{ borderBottomWidth: 3, borderBottomColor: '#3c5a1e' }}
            >
              Quantum Robotics
            </Typography>

            <Typography variant="body1" className="text-[#b0b0b0] pt-4">
              Revolutionizing industrial automation with precision robotics and
              intelligent systems.
            </Typography>

            <Box className="flex gap-2 mt-3">
              {[
                {
                  icon: (
                    <LinkedInIcon
                      fontSize="large"
                      className="text-[#b0b0b0] bg-[#1e1e1e] p-2 rounded-full"
                    />
                  ),
                  href: '#',
                },
                {
                  icon: (
                    <TwitterIcon
                      fontSize="large"
                      className="text-[#b0b0b0] bg-[#1e1e1e] p-2 rounded-full"
                    />
                  ),
                  href: '#',
                },
                {
                  icon: (
                    <YouTubeIcon
                      fontSize="large"
                      className="text-[#b0b0b0] bg-[#1e1e1e] p-2 rounded-full"
                    />
                  ),
                  href: '#',
                },
                {
                  icon: (
                    <GitHubIcon
                      fontSize="large"
                      className="text-[#b0b0b0] bg-[#1e1e1e] p-2 rounded-full"
                    />
                  ),
                  href: '#',
                },
              ].map((item, index) => (
                <IconButton
                  key={index}
                  className="bg-[#1e1e1e] text-[#b0b0b0] transition-transform"
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight="600"
              className="font-semibold pb-2 text-[#f2f2f2]"
              sx={{ borderBottomWidth: 3, borderBottomColor: '#3c5a1e' }}
            >
              Products
            </Typography>

            <Box className="space-y-2 mt-4">
              {[
                'QuantumFlex™',
                'QuantumCo™',
                'QuantumDelta™',
                'QuantumSwift™',
                'QuantumMover™',
                'QuantumAero™',
              ].map((product) => (
                <Box key={product}>
                  <Link
                    href="#products"
                    sx={{
                      color: '#b0b0b0',
                      textDecoration: 'none',
                      '&:hover': { color: '#3c5a1e' },
                    }}
                  >
                    {product}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight="600"
              className="font-semibold pb-2 text-[#f2f2f2]"
              sx={{ borderBottomWidth: 3, borderBottomColor: '#3c5a1e' }}
            >
              Company
            </Typography>

            <Box className="space-y-2 mt-4">
              {[
                { text: 'About Us', href: '#vision-mission' },
                { text: 'Our Team', href: '#team' },
                { text: 'Blog', href: '#blog' },
                { text: 'Careers', href: '#contact' },
                { text: 'Investor Relations', href: '#contact' },
              ].map((item) => (
                <Box key={item.text}>
                  <Link
                    href={item.href}
                    sx={{
                      color: '#b0b0b0',
                      textDecoration: 'none',
                      '&:hover': { color: '#3c5a1e' },
                    }}
                  >
                    {item.text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight="600"
              className="font-semibold pb-2 text-[#f2f2f2]"
              sx={{ borderBottomWidth: 3, borderBottomColor: '#3c5a1e' }}
            >
              Contact
            </Typography>

            <Box className="space-y-3 mt-4">
              <Box className="flex items-center justify-start gap-3 text-[#b0b0b0]">
                <MapIcon className="mt-1 text-[#3c5a1e] flex-shrink-0" />
                <Typography variant="body2">
                  123 Innovation Way, Robotics Park, CA 94103
                </Typography>
              </Box>
              <Box className="flex items-center justify-start gap-3 text-[#b0b0b0]">
                <PhoneIcon className="mt-1 text-[#3c5a1e] flex-shrink-0" />
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Box>
              <Box className="flex items-center justify-start gap-3 text-[#b0b0b0]">
                <EmailIcon className="mt-1 text-[#3c5a1e] flex-shrink-0" />
                <Typography variant="body2">
                  info@quantumrobotics.tech
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

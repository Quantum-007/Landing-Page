'use client';

import {
  Button,
  IconButton,
  Box,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import {
  Map as MapIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="py-12 bg-gray-700 border-t border-gray-600"
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-6 relative">
              Contact
              <Box
                className="absolute bottom-(-8px) left-0 w-10 h-1 bg-green-700"
                sx={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '40px',
                  height: '3px',
                  backgroundColor: '#3c5a1e',
                }}
              />
            </Typography>
            <Box className="space-y-3">
              <Box className="flex items-start gap-3 text-gray-400">
                <MapIcon className="mt-1 text-green-500 flex-shrink-0" />
                <Typography variant="body2">
                  123 Innovation Way, Robotics Park, CA 94103
                </Typography>
              </Box>
              <Box className="flex items-start gap-3 text-gray-400">
                <PhoneIcon className="mt-1 text-green-500 flex-shrink-0" />
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Box>
              <Box className="flex items-start gap-3 text-gray-400">
                <EmailIcon className="mt-1 text-green-500 flex-shrink-0" />
                <Typography variant="body2">
                  info@quantumrobotics.tech
                </Typography>
              </Box>
            </Box>
            <Box className="flex gap-2 mt-4">
              <IconButton className="bg-gray-800 text-gray-400 hover:bg-green-700 hover:text-white transition-transform hover:translate-y-(-3px)">
                <LinkedInIcon />
              </IconButton>
              <IconButton className="bg-gray-800 text-gray-400 hover:bg-green-700 hover:text-white transition-transform hover:translate-y-(-3px)">
                <TwitterIcon />
              </IconButton>
              <IconButton className="bg-gray-800 text-gray-400 hover:bg-green-700 hover:text-white transition-transform hover:translate-y-(-3px)">
                <YouTubeIcon />
              </IconButton>
              <IconButton className="bg-gray-800 text-gray-400 hover:bg-green-700 hover:text-white transition-transform hover:translate-y-(-3px)">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-semibold mb-6 relative">
              Company
              <Box
                className="absolute bottom-(-8px) left-0 w-10 h-1 bg-green-700"
                sx={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '40px',
                  height: '3px',
                  backgroundColor: '#3c5a1e',
                }}
              />
            </Typography>
            <Box className="space-y-2">
              <Box>
                <Button
                  href="#vision-mission"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  About Us
                </Button>
              </Box>
              <Box>
                <Button
                  href="#team"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  Our Team
                </Button>
              </Box>
              <Box>
                <Button
                  href="#blog"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  Blog
                </Button>
              </Box>
              <Box>
                <Button
                  href="#contact"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  Careers
                </Button>
              </Box>
              <Box>
                <Button
                  href="#contact"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  Investor Relations
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-semibold mb-6 relative">
              Products
              <Box
                className="absolute bottom-(-8px) left-0 w-10 h-1 bg-green-700"
                sx={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '40px',
                  height: '3px',
                  backgroundColor: '#3c5a1e',
                }}
              />
            </Typography>
            <Box className="space-y-2">
              <Box>
                <Button
                  href="#products"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  QuantumFlex™
                </Button>
              </Box>
              <Box>
                <Button
                  href="#products"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  QuantumCo™
                </Button>
              </Box>
              <Box>
                <Button
                  href="#products"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  QuantumDelta™
                </Button>
              </Box>
              <Box>
                <Button
                  href="#products"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  QuantumSwift™
                </Button>
              </Box>
              <Box>
                <Button
                  href="#products"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  QuantumMover™
                </Button>
              </Box>
              <Box>
                <Button
                  href="#products"
                  color="inherit"
                  className="text-gray-400 hover:text-green-500 justify-start px-0"
                >
                  QuantumAero™
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-6 relative">
              Quantum Robotics
              <Box
                className="absolute bottom-(-8px) left-0 w-10 h-1 bg-green-700"
                sx={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '40px',
                  height: '3px',
                  backgroundColor: '#3c5a1e',
                }}
              />
            </Typography>
            <Typography variant="body2" className="text-gray-400 mb-6">
              Revolutionizing industrial automation with precision robotics and
              intelligent systems.
            </Typography>
          </Grid>
        </Grid>

        <Box className="mt-16 pt-8 border-t border-gray-600 text-center text-gray-400">
          <Typography variant="body2">
            &copy; 2025 Quantum Robotics. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

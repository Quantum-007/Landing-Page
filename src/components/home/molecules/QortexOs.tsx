'use clinet';

import React from 'react';
import QortexDemo from '../atoms/QortextDemo';
import CodeComparison from '../atoms/CodeComparison';
import DeploymentComparison from '../atoms/DeploymentComparison';

import { useTheme } from '@mui/material/styles';
import { QORTEX_FEATURES } from '@/utils/home/qortex_os/data';
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';

const QortexOS: React.FC = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="qortex" className="py-20 bg-[#121212]">
      <Box className="absolute inset-0 z-0" />

      <Container className="relative z-10">
        <Typography
          variant="h4"
          fontWeight="600"
          className="text-3xl text-start font-bold pb-1 text-white relative inline-block"
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
          Qortex OS Platform
        </Typography>

        <Typography
          variant="subtitle1"
          className={`text-xl text-[#b0b0b0] py-5 max-w-3xl ${
            isTablet ? 'text-center mx-auto' : ''
          }`}
        >
          Our proprietary operating system powers all Quantum robots, enabling
          rapid deployment, seamless integration, and unparalleled performance.
        </Typography>

        <DeploymentComparison />
        <CodeComparison />
        <QortexDemo />

        <Grid container spacing={4} className="mt-16">
          {QORTEX_FEATURES.map(({ icon: Icon, title, description }, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Box className="flex items-start gap-4">
                <Box className="text-2xl text-[#5a7d2f]">
                  <Icon fontSize="inherit" />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: '600' }}
                    className="mb-2 text-[#f2f2f2]"
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2" className="text-[#b0b0b0]">
                    {description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className="text-center mt-12">
          <Button
            href="#contact"
            variant="contained"
            sx={{
              bgcolor: '#3c5a1e',
              fontWeight: 'bold',
              '&:hover': { bgcolor: '#2c6e31' },
            }}
          >
            Deploy with Qortex
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default QortexOS;

'use clinet';

import React from 'react';
import QortexDemo from '../atoms/QortextDemo';
import CodeComparison from '../atoms/CodeComparison';
import DeploymentComparison from '../atoms/DeploymentComparison';

import { useTheme } from '@mui/material/styles';
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  Bolt as BoltIcon,
  Build as BuildIcon,
  Memory as MemoryIcon,
  Psychology as PsychologyIcon,
  AccountTree as AccountTreeIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
} from '@mui/icons-material';

const QortexOS: React.FC = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: BoltIcon,
      title: 'Rapid Integration',
      description:
        'Connect with existing systems through standard protocols and pre-built connectors.',
    },
    {
      icon: MemoryIcon,
      title: 'Optimized Runtime',
      description:
        'Real-time performance optimization through adaptive learning algorithms.',
    },
    {
      icon: AccountTreeIcon,
      title: 'Multi-Robot Coordination',
      description:
        'Seamlessly coordinate multiple robots for complex operations and workflows.',
    },
    {
      icon: BuildIcon,
      title: 'Predictive Maintenance',
      description:
        'AI-powered system health monitoring to prevent downtime and extend equipment life.',
    },
    {
      icon: ChatBubbleOutlineIcon,
      title: 'Natural Language Processing',
      description:
        'Control robots with simple voice or typed commands without complex programming.',
    },
    {
      icon: PsychologyIcon,
      title: 'Adaptive Learning',
      description:
        'System improves over time by analyzing performance data and user interactions.',
    },
  ];

  return (
    <Box id="qortex" className="py-20 bg-[#121212]">
      <Box className="absolute inset-0 z-0" />

      <Container className="relative z-10">
        <Typography
          variant="h4"
          fontWeight="600"
          className={`text-3xl font-bold mb-4 relative ${
            isTablet ? 'text-center after:left-1/2 after:-translate-x-1/2' : ''
          }`}
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: 0,
              width: '320px',
              height: '4px',
              backgroundColor: '#3c5a1e',
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
          {features.map(({ icon: Icon, title, description }, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
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

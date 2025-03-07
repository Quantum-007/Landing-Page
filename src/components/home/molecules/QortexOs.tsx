'use clinet';

import React from 'react';
import QortexDemo from '../atoms/QortextDemo';
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
  SwapHoriz as SwapHorizIcon,
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

        <Box className="relative my-16 max-w-4xl mx-auto">
          <Box className="rounded-lg overflow-hidden">
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                className="relative"
                sx={{ zIndex: 10 }}
              >
                <Box className="bg-[#2d2d2d] p-8 h-full">
                  <Typography variant="h6" className="text-center mb-4">
                    Traditional Robotics
                  </Typography>
                  <Box
                    component="pre"
                    className="text-left text-xs bg-gray-900 bg-opacity-30 p-4 overflow-auto max-h-80"
                  >
                    {`// Traditional robot programming - complex, verbose, error-prone
Robot.Initialize();
RobotArm arm = Robot.GetArm();
RobotGripper gripper = arm.GetEndEffector();

// Manual trajectory calculation
Vector3[] waypoints = new Vector3[] {
  new Vector3(234.56, 187.32, 345.87),  // Home position
  new Vector3(312.45, 298.17, 201.34),  // Approach position
  new Vector3(312.45, 298.17, 156.73),  // Grasp position
};

// Manual velocity and acceleration profiles
double[] velocities = new double[] { 0.3, 0.2, 0.1 };
double[] accelerations = new double[] { 0.1, 0.05, 0.025 };

// Complex error handling and recovery
try {
  for (int i = 0; i < waypoints.Length; i++) {
      if (Robot.IsPathBlocked(arm.GetCurrentPosition(), waypoints[i])) {
          LogWarning("Path blocked, recalculating...");
          waypoints[i] = RecalculateWaypoint(waypoints[i]);
      }
      
      arm.MoveTo(waypoints[i], 
                 velocities[i], 
                 accelerations[i], 
                 ArmConfiguration.ELBOW_DOWN, 
                 CollisionAvoidanceLevel.HIGH);
  }
  
  // Gripper control with explicit width
  gripper.SetWidth(82.5);  // Specific width in mm
  gripper.Close(0.7);      // 70% force
  
  // Wait for grip confirmation with timeout
  bool hasGrip = false;
  int timeout = 100;  // 10 seconds
  while (!hasGrip && timeout > 0) {
      hasGrip = gripper.CheckForceThreshold(5.0);
      Thread.Sleep(100);
      timeout--;
  }
  
  if (!hasGrip) {
      throw new Exception("Failed to grip item");
  }
  
  // Return path with manually defined waypoints
  Vector3[] returnWaypoints = new Vector3[] {
      new Vector3(312.45, 298.17, 201.34),  // Lift position
      new Vector3(198.35, 245.89, 201.34),  // Intermediate point
      new Vector3(198.35, 245.89, 156.73),  // Drop position
  };
  
  for (int i = 0; i < returnWaypoints.Length; i++) {
      arm.MoveTo(returnWaypoints[i], 0.2, 0.1,
                ArmConfiguration.ELBOW_DOWN,
                CollisionAvoidanceLevel.HIGH);
  }
  
  gripper.Open();
} catch (Exception e) {
  LogError("Motion error: " + e.Message);
  arm.EmergencyStop();
  Robot.ResetToHome();
  throw;
}`}
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="relative"
                sx={{ zIndex: 10 }}
              >
                <Box className="bg-[#2d2d2d] p-8 h-full">
                  <Typography variant="h6" className="text-center mb-4">
                    Qortex OS
                  </Typography>
                  <Box
                    component="pre"
                    className="text-left text-sm bg-green-900 bg-opacity-20 p-4 overflow-auto max-h-80"
                  >
                    {`// Qortex OS - Natural language robotics control
qortex.command("Pick up the item from bin A and place it in box B");

// Alternative approaches with the same outcome:
qortex.command("Move product from conveyor to packaging area");

// Complex operations simplified:
qortex.command("Inspect parts from tray C for defects");
qortex.command("Sort blue components into bin 1, red into bin 2");

// Contextual understanding:
qortex.command("Increase gripper force when handling fragile items");
qortex.command("Use faster movements for the next 5 operations");

// Adaptive learning:
qortex.teach("Gentle placement", () => {
  // Qortex learns this pattern and can repeat it from a
  // single natural language command later
});

// Qortex handles all the complexity behind a simple interface`}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Divider & Slider */}
          <Box
            className="absolute top-0 left-1/2 bottom-0 w-1 bg-green-700 transform -translate-x-1/2"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Box
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white cursor-pointer"
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <SwapHorizIcon />
          </Box>
        </Box>

        <Box className="flex flex-wrap justify-around gap-8 my-16">
          <Box className="text-center">
            <Typography
              variant="h3"
              sx={{ fontWeight: 600 }}
              className="text-4xl text-[#5a7d2f]"
            >
              80%
            </Typography>
            <Typography variant="body2" className="text-[#b0b0b0]">
              Less code required
            </Typography>
          </Box>
          <Box className="text-center">
            <Typography
              variant="h3"
              className="text-4xl font-bold text-[#5a7d2f]"
            >
              95%
            </Typography>
            <Typography variant="body2" className="text-[#b0b0b0]">
              Faster setup time
            </Typography>
          </Box>
          <Box className="text-center">
            <Typography
              variant="h3"
              className="text-4xl font-bold text-[#5a7d2f]"
            >
              99.8%
            </Typography>
            <Typography variant="body2" className="text-[#b0b0b0]">
              System reliability
            </Typography>
          </Box>
        </Box>

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

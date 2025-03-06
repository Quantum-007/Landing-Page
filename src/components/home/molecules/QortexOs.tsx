'use clinet'
import React from 'react';
import {
  Box, Container, Grid, Typography, Button, useMediaQuery, Card,
  CardContent,
} from '@mui/material';
import {
  Bolt as BoltIcon,
  Memory as MemoryIcon,
  AccountTree as AccountTreeIcon,
  Build as BuildIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Psychology as PsychologyIcon,
  SwapHoriz as SwapHorizIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';


const QortexOS: React.FC = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="qortex" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <Box
        className="absolute inset-0 z-0"
        sx={{
          background:
            'radial-gradient(circle at center, rgba(60, 90, 30, 0.1) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <Typography
          variant="h2"
          className={`text-3xl font-bold mb-4 relative ${isTablet ? 'text-center after:left-1/2 after:-translate-x-1/2' : ''
            }`}
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: 0,
              width: '80px',
              height: '4px',
              backgroundColor: '#3c5a1e',
            },
          }}
        >
          Qortex OS Platform
        </Typography>
        <Typography
          variant="subtitle1"
          className={`text-xl text-gray-400 mb-12 max-w-3xl ${isTablet ? 'text-center mx-auto' : ''
            }`}
        >
          Our proprietary operating system powers all Quantum robots, enabling
          rapid deployment, seamless integration, and unparalleled performance.
        </Typography>

        <Grid container spacing={6} className="mb-16">
          <Grid item xs={12} md={6}>
            <Card className="bg-gray-800 h-full flex flex-col">
              <Box className="bg-gray-700 p-4 text-center border-b border-gray-600">
                <Typography variant="h5" className="font-semibold">
                  Traditional Deployment
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Complex programming, custom integration, extensive testing
                </Typography>
              </Box>
              <CardContent className="p-6 flex-grow">
                <Typography
                  variant="h3"
                  className="text-4xl font-bold text-center mb-6"
                >
                  4-16 Weeks
                </Typography>

                <Box className="space-y-4">
                  {/* Step 1 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      1
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Requirements Analysis
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 weeks of meetings and assessments
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 2 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      2
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Custom Programming
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        2-4 weeks of specialized coding
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 3 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      3
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Integration
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-3 weeks adapting to existing systems
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 4 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      4
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Testing & Debugging
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 weeks of validation
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 5 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      5
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Staff Training
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        3-5 days of operator training
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="bg-gray-800 h-full flex flex-col border-2 border-green-700">
              <Box className="bg-gray-700 p-4 text-center border-b border-gray-600">
                <Typography variant="h5" className="font-semibold">
                  Qortex OS Deployment
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Visual programming, plug-and-play integration, AI
                  configuration
                </Typography>
              </Box>
              <CardContent className="p-6 flex-grow">
                <Typography
                  variant="h3"
                  className="text-4xl font-bold text-center mb-6 text-green-500"
                >
                  4-10 Days
                </Typography>

                <Box className="space-y-4">
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      1
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Rapid Assessment
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        2-4 hours with AI-assisted analysis
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 2 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      2
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Visual Task Creation
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 days of drag & drop programming
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 3 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      3
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Auto-Integration
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 days with pre-built connectors
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 4 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      4
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        AI-Optimized Testing
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 days of automated validation
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 5 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      5
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Intuitive Interface
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        2-4 hours of guided onboarding
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Code Comparison */}
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
                <Box className="bg-gray-800 p-8 h-full">
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
                <Box className="bg-gray-800 p-8 h-full">
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

        {/* Metrics */}
        <Box className="flex flex-wrap justify-around gap-8 my-16">
          <Box className="text-center">
            <Typography
              variant="h3"
              className="text-4xl font-bold text-green-500"
            >
              80%
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Less code required
            </Typography>
          </Box>
          <Box className="text-center">
            <Typography
              variant="h3"
              className="text-4xl font-bold text-green-500"
            >
              95%
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Faster setup time
            </Typography>
          </Box>
          <Box className="text-center">
            <Typography
              variant="h3"
              className="text-4xl font-bold text-green-500"
            >
              99.8%
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              System reliability
            </Typography>
          </Box>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4} className="mt-16">
          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <BoltIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Rapid Integration
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Connect with existing systems through standard protocols and
                  pre-built connectors.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <MemoryIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Optimized Runtime
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Real-time performance optimization through adaptive learning
                  algorithms.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <AccountTreeIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Multi-Robot Coordination
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Seamlessly coordinate multiple robots for complex operations
                  and workflows.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <BuildIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Predictive Maintenance
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  AI-powered system health monitoring to prevent downtime and
                  extend equipment life.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <ChatBubbleOutlineIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Natural Language Processing
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Control robots with simple voice or typed commands without
                  complex programming.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <PsychologyIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Adaptive Learning
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  System improves over time by analyzing performance data and
                  user interactions.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box className="text-center mt-12">
          <Button
            variant="contained"
            href="#contact"
            size="large"
            className="bg-green-700 hover:bg-green-800"
          >
            Deploy with Qortex{' '}
            <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded ml-2 animate-pulse">
              FREE
            </span>
          </Button>
        </Box>
      </Container>
    </Box>

  );
};

export default QortexOS;
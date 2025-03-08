import { Box } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { SwapHoriz as SwapHorizIcon } from '@mui/icons-material';

const CodeComparison = () => {
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [sliderPosition, setSliderPosition] = useState(50);

  // Handle mouse/touch events for dragging
  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect(); // ✅ No more TS error
    const containerWidth = containerRect.width;
    const mouseX = e.clientX - containerRect.left;

    // Calculate percentage (0-100)
    let newPosition = (mouseX / containerWidth) * 100;

    // Allow full range from 0% to 100% to completely hide either side
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  };

  // Add and remove event listeners
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box className="relative my-16 max-w-4xl mx-auto" ref={containerRef}>
      <Box className="rounded-lg overflow-hidden" sx={{ height: '500px' }}>
        {/* Container for the entire component including title and code */}
        <Box className="relative h-full">
          {/* Traditional side - left side (includes both title and code) */}
          <Box
            className="absolute top-0 left-0 bottom-0 bg-[#222] overflow-hidden transition-all"
            sx={{
              width: '100%',
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              display: sliderPosition === 0 ? 'none' : 'block',
            }}
          >
            {/* Title area for traditional side */}
            <Box className="h-20 bg-[#2d2d2d] flex items-center justify-center text-[#f2f2f2] text-xl font-bold">
              Traditional Robotics
            </Box>

            {/* Code area for traditional side */}
            <Box className="overflow-auto h-full">
              <Box className="p-10">
                <Box
                  component="pre"
                  sx={{ fontFamily: 'monospace' }}
                  className="text-left text-sm text-gray-300 overflow-auto pb-20"
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
            </Box>
          </Box>

          {/* Qortex OS side - right side (includes both title and code) */}
          <Box
            className="absolute top-0 right-0 bottom-0 bg-[#3c5a1e33] overflow-hidden transition-all"
            sx={{
              width: '100%',
              clipPath: `inset(0 0 0 ${sliderPosition}%)`,
              display: sliderPosition === 100 ? 'none' : 'block',
            }}
          >
            {/* Title area for Qortex side */}
            <Box className="h-20 bg-[#252f24] flex items-center justify-center text-[#f2f2f2] text-xl font-bold">
              Qortex OS
            </Box>

            {/* Code area for Qortex side */}
            <Box className="overflow-auto h-full">
              <Box className="p-10">
                <Box
                  component="pre"
                  sx={{ fontFamily: 'monospace' }}
                  className="text-left text-sm text-green-200 overflow-auto pb-20"
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
            </Box>
          </Box>

          {/* Divider line that extends through entire component */}
          <Box
            onMouseDown={handleMouseDown}
            className="absolute top-0 bottom-0 w-1 bg-[#5a7d2f]"
            sx={{
              zIndex: 20,
              cursor: 'col-resize',
              left: `${sliderPosition}%`,
              transform: 'translateX(-50%)',
            }}
          />

          {/* Slider handle */}
          <Box
            className="absolute flex items-center justify-center w-14 h-14 bg-[#5a7d2f] rounded-full text-[#f2f2f2] cursor-grab"
            sx={{
              top: '50%',
              left: `${sliderPosition}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 30,
              '&:active': {
                cursor: 'grabbing',
              },
            }}
            onMouseDown={handleMouseDown}
          >
            <SwapHorizIcon fontSize="medium" />
          </Box>

          {/* <Box
            className="absolute bottom-4 left-4 px-4 py-2 bg-gray-800 text-[#f2f2f2] rounded"
            sx={{
              transition: 'opacity 0.3s ease',
              opacity: sliderPosition < 80 ? 1 : 0,
            }}
          >
            Before
          </Box>
          <Box
            className="absolute bottom-4 right-4 px-4 py-2 bg-gray-700 text-[#f2f2f2] rounded"
            sx={{
              transition: 'opacity 0.3s ease',
              opacity: sliderPosition > 20 ? 1 : 0,
            }}
          >
            After
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default CodeComparison;

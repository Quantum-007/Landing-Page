import { Box, Card, CardContent, Typography } from '@mui/material';

const deployments = [
  {
    title: 'Traditional Deployment',
    subtitle: 'Complex programming, custom integration, extensive testing',
    duration: '4-16 Weeks',
    steps: [
      {
        title: 'Requirements Analysis',
        description: '1-2 weeks of meetings and assessments',
      },
      {
        title: 'Custom Programming',
        description: '2-4 weeks of specialized coding',
      },
      {
        title: 'Integration',
        description: '1-3 weeks adapting to existing systems',
      },
      { title: 'Testing & Debugging', description: '1-2 weeks of validation' },
      { title: 'Staff Training', description: '3-5 days of operator training' },
    ],
  },
  {
    title: 'Qortex OS Deployment',
    subtitle: 'Visual programming, plug-and-play integration, AI configuration',
    duration: '4-10 Days',
    highlight: true,
    steps: [
      {
        title: 'Rapid Assessment',
        description: '2-4 hours with AI-assisted analysis',
      },
      {
        title: 'Visual Task Creation',
        description: '1-2 days of drag & drop programming',
      },
      {
        title: 'Auto-Integration',
        description: '1-2 days with pre-built connectors',
      },
      {
        title: 'AI-Optimized Testing',
        description: '1-2 days of automated validation',
      },
      {
        title: 'Intuitive Interface',
        description: '2-4 hours of guided onboarding',
      },
    ],
  },
];

const DeploymentComparison = () => {
  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
      {deployments.map((deployment, index) => (
        <Card
          key={index}
          className={`rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 ${
            deployment.highlight ? 'border-2 border-[#5a7d2f]' : ''
          }`}
          sx={{ backgroundColor: '#1e1e1e', color: '#f2f2f2' }}
        >
          <Box className="bg-[#2d2d2d] p-5 text-center border-b border-[#3a3a3a]">
            <Typography variant="h6" className="font-bold text-[#f2f2f2]">
              {deployment.title}
            </Typography>
            <Typography variant="body2" className="text-[#b0b0b0]">
              {deployment.subtitle}
            </Typography>
          </Box>

          <CardContent>
            <Typography
              variant="h3"
              className={`text-center font-extrabold p-4 ${
                deployment.highlight ? 'text-[#5a7d2f]' : 'text-white'
              }`}
              sx={{ fontWeight: 1000 }}
            >
              {deployment.duration}
            </Typography>

            <Box className="space-y-4 p-4">
              {deployment.steps.map((step, stepIndex) => (
                <Box key={stepIndex} className="flex items-start gap-4">
                  <Box
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                      deployment.highlight ? 'bg-[#3c5a1e]' : 'bg-[#2d2d2d]'
                    }`}
                  >
                    {stepIndex + 1}
                  </Box>

                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" className="text-[#b0b0b0]">
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DeploymentComparison;

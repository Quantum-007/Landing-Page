import { Box, Container, Card, CardContent, Typography } from '@mui/material';
import {
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const advantages = [
  {
    title: 'Reliability & Quality',
    description:
      'Our robotics systems achieve 99.8% operational reliability through redundant systems, predictive maintenance algorithms, and industrial-grade components designed for continuous operation in demanding environments.',
    icon: <ShieldIcon fontSize="large" />,
  },
  {
    title: 'Cost Savings',
    description:
      'Customers typically experience a 35% reduction in operational costs through improved efficiency, reduced waste, lower energy consumption, and optimized resource utilization across their manufacturing and logistics processes.',
    icon: <TrendingUpIcon fontSize="large" />,
  },
  {
    title: 'Precision & Consistency',
    description:
      'Our systems deliver sub-millimeter precision with consistency that human operations cannot match, reducing defects and enabling complex manufacturing processes that were previously impossible.',
    icon: <TrendingUpIcon fontSize="large" />,
  },
];

const CoreAdvantages = () => {
  return (
    <Box id="features" sx={{ py: 10, backgroundColor: '#121212' }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight="600"
          className="relative inline-block pb-1"
          sx={{
            '&::after': {
              left: '50%',
              content: '""',
              width: '100%',
              height: '4px',
              bottom: '-5px',
              position: 'absolute',
              backgroundColor: '#3c5a1e',
              transform: 'translateX(-50%)',
            },
          }}
        >
          Core Advantages
        </Typography>

        <Typography
          variant="body1"
          sx={{ mt: 4, maxWidth: 'xl', color: '#b0b0b0', fontSize: '1.2rem' }}
        >
          Our solutions are built on three foundational pillars that ensure
          superior performance across all deployments.
        </Typography>

        <Box
          sx={{
            mt: 4,
            gap: 4,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {advantages.map(({ title, description, icon }, index) => (
            <Card
              key={index}
              className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              sx={{
                color: 'white',
                display: 'flex',
                borderRadius: 2,
                flex: '1 1 300px',
                flexDirection: 'column',
                backgroundColor: '#1e1e1e',
              }}
            >
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Box sx={{ fontSize: '2rem', color: '#5a7d2f', mb: 2 }}>
                  {icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#b0b0b0', fontSize: '18px' }}
                >
                  {description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoreAdvantages;

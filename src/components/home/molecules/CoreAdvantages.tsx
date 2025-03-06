import { Box, Container, Card, CardContent, Typography } from '@mui/material';
import {
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const CoreAdvantages = () => {
  return (
    <Box id="features" className="py-20" sx={{ backgroundColor: '#121212' }}>
      <Container>
        <Typography
          variant="h2"
          className="text-3xl text-start font-bold mb-4 relative"
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '4%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#3c5a1e',
            },
          }}
        >
          Core Advantages
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 6,
            color: '#b0b0b0',
            textAlign: 'start',
            maxWidth: 'xl',
            fontSize: '24px',
            mx: 'auto',
          }}
        >
          Our solutions are built on three foundational pillars that ensure
          superior performance across all deployments.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginTop: 4,
          }}
        >
          <Card
            className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            sx={{
              backgroundColor: '#1e1e1e',
              color: 'white',
              flex: '1 1 300px',
              maxWidth: '350px',
              minHeight: '250px',
            }}
          >
            <CardContent sx={{ p: 4, textAlign: 'start' }}>
              <Box className="text-4xl text-green-500 mb-4">
                <ShieldIcon fontSize="inherit" />
              </Box>
              <Typography variant="h5" className="font-bold mb-3">
                Reliability & Quality
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#b0b0b0',
                  textAlign: 'start',
                  fontSize: '20px',
                  marginTop: 2,
                }}
              >
                Our robotics systems achieve 99.8% operational reliability
                through redundant systems, predictive maintenance algorithms,
                and industrial-grade components designed for continuous
                operation in demanding environments.
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            sx={{
              backgroundColor: '#1e1e1e',
              color: 'white',
              flex: '1 1 300px',
              maxWidth: '350px',
              minHeight: '250px',
            }}
          >
            <CardContent sx={{ p: 4, textAlign: 'start' }}>
              <Box className="text-4xl text-green-500 mb-4">
                <TrendingUpIcon fontSize="inherit" />
              </Box>
              <Typography variant="h5" className="font-bold mb-3">
                Cost Savings
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#b0b0b0',
                  textAlign: 'start',
                  fontSize: '20px',
                  marginTop: 2,
                }}
              >
                Customers typically experience 35% reduction in operational
                costs through improved efficiency, reduced waste, lower energy
                consumption, and optimized resource utilization across their
                manufacturing and logistics processes.
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            sx={{
              backgroundColor: '#1e1e1e',
              color: 'white',
              flex: '1 1 300px',
              maxWidth: '350px',
              minHeight: '250px',
            }}
          >
            <CardContent sx={{ p: 4, textAlign: 'start' }}>
              <Box className="text-4xl text-green-500 mb-4">
                <TrendingUpIcon fontSize="inherit" />
              </Box>

              <Typography variant="h5" className="font-bold mb-3">
                Precision & Consistency
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#b0b0b0',
                  textAlign: 'start',
                  fontSize: '20px',
                  marginTop: 2,
                }}
              >
                Our systems deliver sub- millimeter precision with consistency
                that human operations cannot match, reducing defects, and
                enabling complex manufacturing processes that were previously
                impossible.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default CoreAdvantages;

import { getPlaceholderImage } from '@/utils/placeHolderImage';
import { Box, Container, Grid, Typography } from '@mui/material';

const VisionMission = () => {
  const isTablet = window.innerWidth < 1024;

  return (
    <Box id="vision-mission" className="py-20 bg-[#1e1e1e]">
      <Container>
        <Box className="space-y-20">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                className={
                  isTablet ? 'text-center max-w-lg mx-auto' : 'max-w-lg'
                }
              >
                <Typography
                  variant="h2"
                  className={`text-3xl font-bold mb-6 relative ${
                    isTablet ? 'after:left-1/2 after:-translate-x-1/2' : ''
                  }`}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-10px',
                      left: 0,
                      width: '60px',
                      height: '3px',
                      backgroundColor: '#3c5a1e',
                    },
                  }}
                >
                  Our Vision
                </Typography>
                <Typography variant="body1" className="text-gray-400 mt-10">
                  At Quantum Robotics, we envision a future where advanced
                  robotics solutions seamlessly integrate into industrial
                  workflows, enhancing human capabilities rather than replacing
                  them. We believe in creating technology that empowers
                  industries to achieve unprecedented levels of efficiency,
                  precision, and sustainability while maintaining the human
                  element at the center of innovation.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="rounded-lg overflow-hidden shadow-2xl">
                <Box
                  component="img"
                  src={getPlaceholderImage(600, 400)}
                  alt="Future of Industrial Automation"
                  className="w-full h-full object-cover"
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={6}
            alignItems="center"
            direction={isTablet ? 'column-reverse' : 'row'}
          >
            <Grid item xs={12} md={6}>
              <Box className="rounded-lg overflow-hidden shadow-2xl">
                <Box
                  component="img"
                  src={getPlaceholderImage(600, 400)}
                  alt="Sustainable Robotics"
                  className="w-full h-full object-cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                className={
                  isTablet ? 'text-center max-w-lg mx-auto' : 'max-w-lg'
                }
              >
                <Typography
                  variant="h2"
                  className={`text-3xl font-bold mb-6 relative ${
                    isTablet ? 'after:left-1/2 after:-translate-x-1/2' : ''
                  }`}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-10px',
                      left: 0,
                      width: '60px',
                      height: '3px',
                      backgroundColor: '#3c5a1e',
                    },
                  }}
                >
                  Our Mission
                </Typography>
                <Typography variant="body1" className="text-gray-400 mt-8">
                  Our mission is to democratize access to advanced robotics
                  technology by developing solutions that are not only powerful
                  and precise but also accessible, scalable, and sustainable. We
                  are committed to reducing the environmental footprint of
                  industrial operations while simultaneously improving
                  productivity and worker safety through thoughtful automation
                  that complements human expertise.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionMission;

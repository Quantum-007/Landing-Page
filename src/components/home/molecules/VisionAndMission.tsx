import Image from 'next/image';

import {
  Box,
  Grid,
  useTheme,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';

const VisionAndMission = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="vision-mission" className="py-20 bg-[#1e1e1e]">
      <Container>
        <Box className="space-y-10">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box
                className={
                  isTablet ? 'text-center max-w-lg mx-auto' : 'max-w-lg'
                }
              >
                <Typography
                  variant="h4"
                  fontWeight="600"
                  className={`text-3xl font-bold pb-1 relative ${
                    isTablet ? 'after:left-1/2 after:-translate-x-1/2' : ''
                  }`}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      left: 0,
                      height: '3px',
                      content: '""',
                      width: '180px',
                      bottom: '-10px',
                      position: 'absolute',
                      backgroundColor: '#3c5a1e',
                    },
                  }}
                >
                  Our Vision
                </Typography>

                <Typography variant="body1" className="text-[#b0b0b0] pt-5">
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
                <Image
                  width={600}
                  height={500}
                  loading="lazy"
                  alt="precision"
                  src="/assets/home/our-vision.svg"
                  className="w-full h-full object-cover"
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={6}
            direction={isTablet ? 'column-reverse' : 'row'}
          >
            <Grid item xs={12} md={6}>
              <Box className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  width={600}
                  height={500}
                  loading="lazy"
                  alt="precision"
                  src="/assets/home/our-mission.svg"
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
                  variant="h4"
                  fontWeight="600"
                  className={`text-3xl font-bold pb-1 relative ${
                    isTablet ? 'after:left-1/2 after:-translate-x-1/2' : ''
                  }`}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      left: 0,
                      width: '200px',
                      height: '3px',
                      content: '""',
                      bottom: '-10px',
                      position: 'absolute',
                      backgroundColor: '#3c5a1e',
                    },
                  }}
                >
                  Our Mission
                </Typography>

                <Typography variant="body1" className="text-[#b0b0b0] pt-5">
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

export default VisionAndMission;

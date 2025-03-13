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
    <Box id="vision-mission" className="py-24 bg-[#1e1e1e]">
      <Container>
        <Grid container spacing={10} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              className={isTablet ? 'text-center mx-auto' : ''}
              maxWidth={500}
            >
              <Typography
                variant="h4"
                fontWeight="700"
                className="relative inline-block text-3xl pb-1"
                sx={{
                  '&::after': {
                    content: '""',
                    width: '100%',
                    height: '3px',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    backgroundColor: '#3c5a1e',
                  },
                }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" className="text-[#b0b0b0] pt-5">
                To accelerate humanity&apos;s progress through intelligent
                robotics
              </Typography>
              <br />
            </Box>

            <Box
              sx={{
                mt: 4,
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '6 / 4',
              }}
            >
              <Image
                layout="fill"
                priority
                objectFit="cover"
                alt="Our Mission"
                src="/assets/home/our-mission.webp"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              className={isTablet ? 'text-center mx-auto' : ''}
              maxWidth={500}
            >
              <Typography
                variant="h4"
                fontWeight="700"
                className="relative inline-block text-3xl pb-1"
                sx={{
                  '&::after': {
                    content: '""',
                    width: '100%',
                    height: '3px',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    backgroundColor: '#3c5a1e',
                  },
                }}
              >
                Our Vision
              </Typography>
              <Typography variant="body1" className="text-[#b0b0b0] pt-5">
                To create a world where humans and machines work as one,
                unlocking a new era of creativity, productivity, and
                possibility.
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 4,
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '6 / 4', // Reduced height
              }}
            >
              <Image
                layout="fill"
                loading="lazy"
                alt="Our Vision"
                objectFit="cover"
                src="/assets/home/our-vision.svg"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VisionAndMission;

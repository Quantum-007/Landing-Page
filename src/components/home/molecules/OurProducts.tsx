import { Box, Container, Typography } from '@mui/material';

const OurProducts = () => {
  return (
    <Box id="features" className="py-20" sx={{ backgroundColor: '#1e1e1e' }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight="600"
          className="text-3xl text-start font-bold pb-2 relative"
          sx={{
            position: 'relative',
            '&::after': {
              left: '10%',
              content: '""',
              height: '4px',
              width: '220px',
              bottom: '-10px',
              position: 'absolute',
              transform: 'translateX(-50%)',
              backgroundColor: '#3c5a1e',
            },
          }}
        >
          Our Products
        </Typography>

        {/* Show Slider here */}
      </Container>
    </Box>
  );
};

export default OurProducts;

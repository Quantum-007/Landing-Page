import { Box, CircularProgress } from '@mui/material';

const HomeLoader = () => (
  <Box
    sx={{
      display: 'flex',
      minHeight: '50vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress size={40} sx={{ color: '#3c5a1e' }} />
  </Box>
);

export default HomeLoader;

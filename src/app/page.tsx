'use client';

import Home from '@/components/home/Home';

import { Box } from '@mui/material';

const App = () => {
  return (
    <Box className="bg-gray-900 text-white min-h-screen">
      <Box component="main">
        <Home />
      </Box>
    </Box>
  );
};

export default App;

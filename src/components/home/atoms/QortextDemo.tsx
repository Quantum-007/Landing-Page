import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const QortexDemo = () => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState(
    'Enter a command to see Qortex OS in action...',
  );

  const handleCommandSubmit = () => {
    if (command.trim()) {
      setResponse(`Processing: "${command}"`);
      setCommand('');
    }
  };

  return (
    <Box className="bg-[#2d2d2d] border border-[#3a3a3a] rounded-lg p-6 my-12">
      <Typography variant="h6" className="text-center text-white pb-6">
        Experience Qortex NLP Control
      </Typography>

      <Box className="flex flex-col gap-6">
        <Box className="flex gap-4">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Try a command, e.g. 'Pick up items from bin A and place in storage area B'"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            InputProps={{
              className: 'bg-[#1e1e1e] text-white rounded-md',
              sx: {
                '& input': {
                  color: 'white',
                  fontSize: '16px',
                },
                '& input::placeholder': {
                  opacity: 1,
                  color: '#b0b0b0',
                  fontSize: '14px',
                },
              },
            }}
          />

          <Button
            variant="contained"
            onClick={handleCommandSubmit}
            sx={{
              bgcolor: '#3c5a1e',
              fontWeight: 'bold',
              '&:hover': { bgcolor: '#2c6e31' },
            }}
          >
            Send
          </Button>
        </Box>

        <Box className="bg-[#1e1e1e] border-l-4 border-[#3c5a1e] rounded-lg p-6 min-h-[120px]">
          <Typography className="text-[#b0b0b0] italic mb-2">
            {response}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default QortexDemo;

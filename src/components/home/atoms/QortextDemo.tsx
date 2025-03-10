import { useState, useRef, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface ResponseItem {
  type: 'user' | 'thinking' | 'action' | 'error';
  text: string;
}

const QortexDemo = () => {
  const responseAreaRef = useRef<HTMLDivElement | null>(null);

  const [command, setCommand] = useState<string>('');
  const [responses, setResponses] = useState<ResponseItem[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    if (responseAreaRef.current) {
      responseAreaRef.current.scrollTop = responseAreaRef.current.scrollHeight;
    }
  }, [responses]);

  useEffect(() => {
    setTimeout(() => {
      setResponses([
        {
          type: 'action',
          text: 'Qortex NLP system online. Ready to accept natural language commands. What operation would you like to perform?',
        },
      ]);
    }, 500);
  }, []);

  const processCommand = async (input: string) => {
    if (!input.trim() || isProcessing) return;

    setResponses((prev) => [...prev, { type: 'user', text: input }]);
    setIsProcessing(true);
    setResponses((prev) => [
      ...prev,
      { type: 'thinking', text: 'Processing...' },
    ]);

    try {
      const response = await fetch('/api/anthropic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();

      setResponses((prev) =>
        prev.map((res) =>
          res.type === 'thinking'
            ? { type: 'thinking', text: 'Response received...' }
            : res,
        ),
      );

      if (data.error) {
        throw new Error(data.error);
      }

      setTimeout(() => {
        setResponses((prev) => [
          ...prev,
          { type: 'action', text: data?.content?.[0]?.text },
        ]);

        setIsProcessing(false);
      }, 1000);
    } catch (error) {
      console.error('Error processing command:', error);

      setResponses((prev) =>
        prev.map((res) =>
          res.type === 'thinking'
            ? {
                type: 'error',
                text: 'Error processing command. Please try again.',
              }
            : res,
        ),
      );

      setIsProcessing(false);
    }
  };

  const handleCommandSubmit = () => {
    processCommand(command);
    setCommand('');
  };

  return (
    <Box className="bg-[#2d2d2d] border border-[#3a3a3a] rounded-lg p-6 my-12">
      <Typography variant="h6" className="text-center text-white pb-6">
        Experience Qortex NLP Control
      </Typography>

      <Box className="flex flex-col gap-6">
        {/* Input Field */}
        <Box className="flex gap-4">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Try a command, e.g. 'Pick up items from bin A and place in storage area B'"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            disabled={isProcessing}
            InputProps={{
              className: 'bg-[#1e1e1e] text-white rounded-md',
              sx: {
                '& input': { color: 'white', fontSize: '16px' },
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
            disabled={isProcessing}
            sx={{
              bgcolor: '#3c5a1e',
              fontWeight: 'bold',
              '&:hover': { bgcolor: '#2c6e31' },
            }}
          >
            Send
          </Button>
        </Box>

        {/* Response Area */}
        <Box
          ref={responseAreaRef}
          className="bg-[#1e1e1e] border-l-4 border-[#3c5a1e] rounded-lg p-6 min-h-[120px] overflow-y-auto max-h-64"
        >
          {responses.map((response, index) => (
            <Typography
              key={index}
              className={`mb-2 ${
                response.type === 'user'
                  ? 'text-blue-400'
                  : response.type === 'thinking'
                  ? 'text-gray-400 italic'
                  : response.type === 'error'
                  ? 'text-red-400'
                  : 'text-[#b0b0b0]'
              }`}
            >
              {response.type === 'user' && (
                <span className="text-blue-400 font-medium">➤ You: </span>
              )}
              {response.type === 'thinking' && (
                <span className="text-yellow-500 font-medium">
                  ⟳ Processing:{' '}
                </span>
              )}
              {response.type === 'action' && (
                <span className="text-green-500 font-medium">✓ Action: </span>
              )}
              {response.type === 'error' && (
                <span className="text-red-500 font-medium">✗ Error: </span>
              )}
              {response.text}
            </Typography>
          ))}

          {isProcessing && (
            <Typography className="text-green-500">•••</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default QortexDemo;

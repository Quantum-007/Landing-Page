'use client';

import { useState } from 'react';
import { getPlaceholderImage } from '@/utils/placeHolderImage';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';
import {
  Box,
  Card,
  Grid,
  Button,
  Checkbox,
  CardMedia,
  Typography,
  CardContent,
} from '@mui/material';

interface Industry {
  id: string;
  title: string;
  robotType: string;
  description: string;
  painPoints: string[];
  metrics: { value: string; label: string }[];
}

const ProductCard = ({ industry }: { industry: Industry }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Grid item md={4} sm={6} xs={12} key={industry.id}>
      <Card
        sx={{ borderRadius: 3, backgroundColor: '#2d2d2d' }}
        className="h-full flex flex-col transition-transform duration-300 hover:translate-y-(-5px) hover:shadow-xl"
      >
        <CardMedia
          height="160"
          component="img"
          alt={`${industry.title} Robotics`}
          image={getPlaceholderImage(400, 200)}
        />

        <CardContent className="p-8 flex-grow flex flex-col justify-between bg-[#2d2d2d]">
          <Box>
            <Typography
              variant="subtitle2"
              className="flex items-center pb-3 font-semibold text-[#5a7d2f]"
            >
              {industry.robotType}
            </Typography>

            <Typography
              variant="h5"
              className="flex items-center pb-3 font-bold text-[#f2f2f2]"
            >
              {industry.title}
            </Typography>

            <Typography
              variant="subtitle2"
              className="flex items-center pb-3 font-semibold text-[#b0b0b0]"
            >
              {industry.description}
            </Typography>

            <Box className="flex flex-wrap pb-3 gap-2">
              {industry.painPoints.map((point, idx) => (
                <Box
                  key={idx}
                  sx={{ fontSize: '0.7rem' }}
                  className="bg-[#3C5A1E33] px-2 py-1 rounded text-xs text-[#5a7d2f]"
                >
                  {point}
                </Box>
              ))}
            </Box>
          </Box>

          {isExpanded && (
            <Box className="my-4 p-2 bg-[#3c5a1e1a] bg-opacity-10 rounded-lg">
              <Grid container spacing={1}>
                {industry.metrics.map(({ value, label }, index) => (
                  <Grid item xs={4} key={index}>
                    <Box className="text-center">
                      <Typography
                        variant="subtitle1"
                        sx={{ fontSize: '0.9rem' }}
                        className="text-[#5a7d2f] font-bold"
                      >
                        {value}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{ fontSize: '0.6rem' }}
                        className="text-[#b0b0b0] text-xs"
                      >
                        {label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          <Box className="flex flex-row justify-between items-center">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              startIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              sx={{
                color: '#5a7d2f',
                fontSize: '0.75rem',
                justifyContent: 'start',
              }}
            >
              {isExpanded ? 'Hide Details' : 'View More Details'}
            </Button>

            <Checkbox
              required
              name="compare"
              checked={false}
              // onChange={handleFormChange}
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-checked': {
                  color: '#3c5a1e',
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;

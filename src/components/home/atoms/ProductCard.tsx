'use client';

import { useState } from 'react';
import { getPlaceholderImage } from '@/utils/placeHolderImage';
import {
  Box,
  Card,
  Grid,
  Checkbox,
  CardMedia,
  Typography,
  CardContent,
  FormControlLabel,
} from '@mui/material';

interface Metric {
  value: string;
  label: string;
}

interface Industry {
  id: string;
  title: string;
  robotType: string;
  description: string;
  painPoints: string[];
  metrics: Metric[];
}

interface ProductCardProps {
  industry: Industry;
  setSelectedProducts: React.Dispatch<React.SetStateAction<string[]>>;
  selectedProducts: string[];
}

const ProductCard = ({ industry, setSelectedProducts, selectedProducts }: ProductCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    if (isChecked && selectedProducts.length >= 3) {
      alert('You can only compare up to 3 products at once.');
      return;
    }

    setIsChecked(isChecked);

    if (isChecked) {
      setSelectedProducts((prev) => [...prev, industry.id]);
    } else {
      setSelectedProducts((prev) => prev.filter((id) => id !== industry.id));
    }
  };

  return (
    <Grid item md={4} sm={6} xs={12} key={industry.id}>
      <Card sx={{ borderRadius: 3, backgroundColor: '#2d2d2d' }}>
        <CardMedia
          height="160"
          component="img"
          alt={`${industry.title} Robotics`}
          image={getPlaceholderImage(400, 200)}
        />

        <CardContent className="p-8 flex-grow flex flex-col justify-between bg-[#2d2d2d]">
          <Box>
            <Typography variant="subtitle2" className="flex items-center pb-3 font-semibold text-[#5a7d2f]">
              {industry.robotType}
            </Typography>
            <Typography variant="h5" className="flex items-center pb-3 font-bold text-[#f2f2f2]">
              {industry.title}
            </Typography>
            <Typography variant="subtitle2" className="flex items-center pb-3 font-semibold text-[#b0b0b0]">
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

          <Box className="flex flex-row justify-between items-center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-checked': {
                      color: '#3c5a1e',
                    },
                  }}
                />
              }
              label="Compare"
              sx={{
                '& .MuiFormControlLabel-label': {
                  color: 'white',
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

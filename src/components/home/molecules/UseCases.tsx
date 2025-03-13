import Image from 'next/image';

import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import {
  INDUSTRY_DATA,
  INDUSTRY_CATEGORIES,
} from '@/utils/home/use_cases/data';
import {
  Box,
  Card,
  Grid,
  Button,
  Container,
  Typography,
  CardContent,
  useMediaQuery,
} from '@mui/material';
import {
  Info as InfoIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

const UseCases: React.FC = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [industryFilter, setIndustryFilter] = useState<string>('all');
  const [showMoreIndustries, setShowMoreIndustries] = useState<boolean>(false);
  const [expandedUseCases, setExpandedUseCases] = useState<
    Record<string, boolean>
  >({});

  const toggleUseCaseDetails = (caseId: string) => {
    setExpandedUseCases((prev) => ({
      ...prev,
      [caseId]: !prev[caseId],
    }));
  };

  const renderIndustryFilters = (
    industries: typeof INDUSTRY_CATEGORIES.MAIN,
  ) => (
    <Box className="flex flex-wrap justify-center gap-2 mb-4">
      {industries.map(({ key, label }) => (
        <Button
          key={key}
          onClick={() => setIndustryFilter(key)}
          variant={industryFilter === key ? 'contained' : 'outlined'}
          sx={{
            fontSize: 12,
            borderColor: '#2d2d2d',
            '&:hover': { bgcolor: '#2d2d2d' },
            color: industryFilter === key ? 'white' : '#b0b0b0',
            bgcolor: industryFilter === key ? '#3c5a1e' : '#2d2d2d',
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );

  const renderMetricsSection = (
    metrics: { value: string; label: string }[],
  ) => (
    <Box className="mb-4 bg-[#3c5a1e1a] bg-opacity-10 p-4 rounded">
      <Typography
        variant="subtitle2"
        className="flex items-center gap-2 mb-2 font-semibold text-[#f2f2f2]"
      >
        ROI Metrics
      </Typography>

      <Grid container spacing={2}>
        {metrics.map(({ value, label }, index) => (
          <Grid item xs={4} key={index}>
            <Box className="text-center">
              <Typography variant="h6" className="text-[#5a7d2f] font-bold">
                {value}
              </Typography>
              <Typography
                variant="caption"
                className="text-[#b0b0b0]"
                sx={{ fontSize: 10 }}
              >
                {label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderIndustryCard = (industry: (typeof INDUSTRY_DATA)[0]) => {
    const isExpanded = expandedUseCases[industry.id] || false;

    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        data-industry={industry.key}
        style={{
          display:
            industryFilter === 'all' || industryFilter === industry.key
              ? 'block'
              : 'none',
        }}
        key={industry.id}
      >
        <Card
          sx={{ borderRadius: 3, backgroundColor: '#2d2d2d' }}
          className="h-full flex flex-col transition-transform duration-300 hover:translate-y-(-5px) hover:shadow-xl"
        >
          <Box
            sx={{ backgroundColor: '#3c5a1e1a' }}
            className="flex items-center gap-4 p-4 border-b border-[#3a3a3a]"
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1e1e1e',
              }}
            >
              {industry.icon}
            </Box>

            <Typography
              variant="body1"
              sx={{ fontWeight: '600' }}
              className="text-[#f2f2f2]"
            >
              {industry.title}
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', width: '100%', height: 200 }}>
            <Image
              layout="fill"
              priority={true}
              objectFit="cover"
              src={industry.imageUrl}
              alt={`${industry.title} Robotics`}
            />
          </Box>

          <CardContent className="p-6 flex-grow flex flex-col bg-[#2d2d2d]">
            <Box className="mb-4">
              <Typography
                variant="subtitle2"
                className="flex items-center gap-2 pb-4 font-semibold text-[#f2f2f2]"
              >
                <InfoIcon fontSize="small" className="text-[#5a7d2f]" />
                Pain Points Addressed
              </Typography>
              <Box className="flex flex-wrap gap-2">
                {industry.painPoints.map((point, idx) => (
                  <Box
                    key={idx}
                    className="bg-[#1e1e1e] px-2 py-1 rounded text-xs text-[#b0b0b0]"
                  >
                    {point}
                  </Box>
                ))}
              </Box>
            </Box>

            <Button
              startIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              onClick={() => toggleUseCaseDetails(industry.id)}
              sx={{
                color: '#5a7d2f',
                fontSize: '0.75rem',
                justifyContent: 'start',
              }}
            >
              {isExpanded ? 'Hide Details' : 'View More Details'}
            </Button>

            {isExpanded && (
              <Box className="mt-4 pt-4 border-t border-[#3a3a3a]">
                {renderMetricsSection(industry.metrics)}

                <Box className="mb-4">
                  <Typography
                    variant="subtitle2"
                    className="flex items-center gap-2 mb-2 font-semibold text-[#f2f2f2]"
                  >
                    Applicable Robots
                  </Typography>

                  <Box className="flex flex-wrap gap-2 pt-2">
                    {industry.robots.map((robot, idx) => (
                      <Box
                        key={idx}
                        className="bg-[#3C5A1E33] text-[#5a7d2f] px-2 py-1 rounded text-xs"
                      >
                        {robot}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <Box id="use-cases" className="py-20 bg-[#1e1e1e]">
      <Container>
        <Typography
          variant="h4"
          fontWeight="600"
          className="text-3xl text-start font-bold pb-1 text-white relative inline-block"
          sx={{
            '&::after': {
              left: '50%',
              content: '""',
              height: '4px',
              width: '100%',
              bottom: '-5px',
              position: 'absolute',
              backgroundColor: '#3c5a1e',
              transform: 'translateX(-50%)',
            },
          }}
        >
          Use Cases by Industry
        </Typography>

        <Typography
          variant="subtitle1"
          className={`text-xl text-[#b0b0b0] pt-5 max-w-3xl ${
            isTablet ? 'text-center mx-auto' : ''
          }`}
        >
          Discover how our robotic solutions are transforming operations across
          various industries.
        </Typography>

        <Box className="my-10">
          {renderIndustryFilters(INDUSTRY_CATEGORIES.MAIN)}

          {showMoreIndustries &&
            renderIndustryFilters(INDUSTRY_CATEGORIES.SECONDARY)}

          <Box className="flex justify-center">
            <Button
              variant="outlined"
              onClick={() => setShowMoreIndustries(!showMoreIndustries)}
              sx={{
                fontSize: 12,
                color: '#b0b0b0',
                bgcolor: '#2d2d2d',
                borderColor: '#2d2d2d',
                '&:hover': { bgcolor: '#2d2d2d' },
              }}
            >
              {showMoreIndustries
                ? 'View Less Industries'
                : 'View More Industries'}
            </Button>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {INDUSTRY_DATA.map((industry) => renderIndustryCard(industry))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UseCases;

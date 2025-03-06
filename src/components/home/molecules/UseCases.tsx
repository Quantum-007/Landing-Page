import React, { useState, useEffect } from 'react';

import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  useMediaQuery

} from '@mui/material';
import {
  AccountTree as AccountTreeIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  PlayCircle as PlayCircleIcon,
  FileDocument as FileDocumentIcon,

} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { getPlaceholderImage } from "@/utils/placeHolderImage";



const UseCases: React.FC = () => {

  const [industryFilter, setIndustryFilter] = useState('all');
  const [showMoreIndustries, setShowMoreIndustries] = useState(false);
  const [expandedUseCases, setExpandedUseCases] = useState({});


  const toggleUseCaseDetails = (caseId) => {
    setExpandedUseCases((prev) => ({
      ...prev,
      [caseId]: !prev[caseId],
    }));
  };




  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <Box id="use-cases" className="py-20 bg-gray-800">
      <Container>
        <Typography
          variant="h2"
          className={`text-3xl font-bold mb-4 relative ${isTablet ? 'text-center after:left-1/2 after:-translate-x-1/2' : ''
            }`}
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: 0,
              width: '80px',
              height: '4px',
              backgroundColor: '#3c5a1e',
            },
          }}
        >
          Use Cases by Industry
        </Typography>
        <Typography
          variant="subtitle1"
          className={`text-xl text-gray-400 mb-12 max-w-3xl ${isTablet ? 'text-center mx-auto' : ''
            }`}
        >
          Discover how our robotic solutions are transforming operations across
          various industries.
        </Typography>

        {/* Industry Filters */}
        <Box className="mb-12">
          <Box className="flex flex-wrap justify-center gap-2 mb-4">
            <Button
              variant={industryFilter === 'all' ? 'contained' : 'outlined'}
              onClick={() => setIndustryFilter('all')}
              className={
                industryFilter === 'all'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              All Industries
            </Button>
            <Button
              variant={
                industryFilter === 'pharmaceutical' ? 'contained' : 'outlined'
              }
              onClick={() => setIndustryFilter('pharmaceutical')}
              className={
                industryFilter === 'pharmaceutical'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              Pharmaceutical
            </Button>
            <Button
              variant={
                industryFilter === 'logistics' ? 'contained' : 'outlined'
              }
              onClick={() => setIndustryFilter('logistics')}
              className={
                industryFilter === 'logistics'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              Logistics
            </Button>
            <Button
              variant={
                industryFilter === 'semiconductor' ? 'contained' : 'outlined'
              }
              onClick={() => setIndustryFilter('semiconductor')}
              className={
                industryFilter === 'semiconductor'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              Semiconductor
            </Button>
            <Button
              variant={
                industryFilter === 'automotive' ? 'contained' : 'outlined'
              }
              onClick={() => setIndustryFilter('automotive')}
              className={
                industryFilter === 'automotive'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              Automotive
            </Button>
          </Box>

          {/* Additional industries - hidden by default */}
          {showMoreIndustries && (
            <Box className="flex flex-wrap justify-center gap-2 mb-4">
              <Button
                variant={industryFilter === 'food' ? 'contained' : 'outlined'}
                onClick={() => setIndustryFilter('food')}
                className={
                  industryFilter === 'food'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Food & Beverage/Commercial Kitchens
              </Button>
              <Button
                variant={industryFilter === 'energy' ? 'contained' : 'outlined'}
                onClick={() => setIndustryFilter('energy')}
                className={
                  industryFilter === 'energy'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Energy & Utilities
              </Button>
              <Button
                variant={
                  industryFilter === 'construction' ? 'contained' : 'outlined'
                }
                onClick={() => setIndustryFilter('construction')}
                className={
                  industryFilter === 'construction'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Construction
              </Button>
              <Button
                variant={
                  industryFilter === 'agriculture' ? 'contained' : 'outlined'
                }
                onClick={() => setIndustryFilter('agriculture')}
                className={
                  industryFilter === 'agriculture'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Agriculture
              </Button>
            </Box>
          )}

          <Box className="flex justify-center">
            <Button
              variant="outlined"
              onClick={() => setShowMoreIndustries(!showMoreIndustries)}
              className="text-gray-400 border-gray-700 hover:bg-gray-700"
            >
              {showMoreIndustries
                ? 'View Less Industries'
                : 'View More Industries'}
            </Button>
          </Box>
        </Box>

        {/* Use Cases Grid */}
        <Grid container spacing={4}>
          {/* Pharmaceutical Manufacturing */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-industry="pharmaceutical"
            style={{
              display:
                industryFilter === 'all' || industryFilter === 'pharmaceutical'
                  ? 'block'
                  : 'none',
            }}
          >
            <Card className="bg-gray-700 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-5px) hover:shadow-xl">
              <Box className="flex items-center gap-4 p-4 bg-green-900 bg-opacity-10 border-b border-gray-600">
                <Box className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-500 flex-shrink-0">
                  <i className="fas fa-prescription-bottle-alt"></i>
                </Box>
                <Typography variant="h6">
                  Pharmaceutical Manufacturing
                </Typography>
              </Box>
              <CardMedia
                component="img"
                height="160"
                image={getPlaceholderImage(400, 200)}
                alt="Pharmaceutical Manufacturing Robotics"
              />
              <CardContent className="p-6 flex-grow flex flex-col">
                <Box className="mb-4">
                  <Typography
                    variant="subtitle2"
                    className="flex items-center gap-2 mb-2 font-semibold"
                  >
                    <Box
                      component="i"
                      className="fas fa-exclamation-circle text-green-500"
                    ></Box>
                    Pain Points Addressed
                  </Typography>
                  <Box className="flex flex-wrap gap-2">
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Contamination Risk
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Regulatory Compliance
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Batch Consistency
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Labor Shortages
                    </Box>
                  </Box>
                </Box>

                <Button
                  startIcon={
                    expandedUseCases.pharma ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )
                  }
                  onClick={() => toggleUseCaseDetails('pharma')}
                  className="text-green-500 justify-start"
                >
                  {expandedUseCases.pharma
                    ? 'Hide Details'
                    : 'View More Details'}
                </Button>

                {/* Hidden Details */}
                {expandedUseCases.pharma && (
                  <Box className="mt-4 pt-4 border-t border-gray-600">
                    {/* ROI Metrics */}
                    <Box className="mb-4 bg-green-900 bg-opacity-10 p-4 rounded">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-chart-line text-green-500"
                        ></Box>
                        ROI Metrics
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              99.9%
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Defect Detection
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              14mo
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              ROI Period
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              45%
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Labor Savings
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Applicable Robots */}
                    <Box className="mb-4">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-robot text-green-500"
                        ></Box>
                        Applicable Robots
                      </Typography>
                      <Box className="flex flex-wrap gap-2">
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumCo™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumDelta™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumMover™
                        </Box>
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box className="flex flex-wrap gap-2">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<AccountTreeIcon />}
                        onClick={() => openWorkflowModal('pharma')}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        View Workflow
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<PlayCircleIcon />}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        Watch Demo
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<FileDocumentIcon />}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        Case Study
                      </Button>
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Logistics & Distribution */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-industry="logistics"
            style={{
              display:
                industryFilter === 'all' || industryFilter === 'logistics'
                  ? 'block'
                  : 'none',
            }}
          >
            <Card className="bg-gray-700 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-5px) hover:shadow-xl">
              <Box className="flex items-center gap-4 p-4 bg-green-900 bg-opacity-10 border-b border-gray-600">
                <Box className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-500 flex-shrink-0">
                  <i className="fas fa-dolly"></i>
                </Box>
                <Typography variant="h6">Logistics & Distribution</Typography>
              </Box>
              <CardMedia
                component="img"
                height="160"
                image={getPlaceholderImage(400, 200)}
                alt="Logistics & Distribution Robotics"
              />
              <CardContent className="p-6 flex-grow flex flex-col">
                <Box className="mb-4">
                  <Typography
                    variant="subtitle2"
                    className="flex items-center gap-2 mb-2 font-semibold"
                  >
                    <Box
                      component="i"
                      className="fas fa-exclamation-circle text-green-500"
                    ></Box>
                    Pain Points Addressed
                  </Typography>
                  <Box className="flex flex-wrap gap-2">
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Order Fulfillment Speed
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Labor Costs
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Space Utilization
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Inventory Accuracy
                    </Box>
                  </Box>
                </Box>

                <Button
                  startIcon={
                    expandedUseCases.logistics ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )
                  }
                  onClick={() => toggleUseCaseDetails('logistics')}
                  className="text-green-500 justify-start"
                >
                  {expandedUseCases.logistics
                    ? 'Hide Details'
                    : 'View More Details'}
                </Button>

                {/* Hidden Details */}
                {expandedUseCases.logistics && (
                  <Box className="mt-4 pt-4 border-t border-gray-600">
                    {/* ROI Metrics */}
                    <Box className="mb-4 bg-green-900 bg-opacity-10 p-4 rounded">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-chart-line text-green-500"
                        ></Box>
                        ROI Metrics
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              3x
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Throughput
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              10mo
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              ROI Period
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              99.8%
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Pick Accuracy
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Applicable Robots */}
                    <Box className="mb-4">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-robot text-green-500"
                        ></Box>
                        Applicable Robots
                      </Typography>
                      <Box className="flex flex-wrap gap-2">
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumMover™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumFlex™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumAero™
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Semiconductor Manufacturing */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-industry="semiconductor"
            style={{
              display:
                industryFilter === 'all' || industryFilter === 'semiconductor'
                  ? 'block'
                  : 'none',
            }}
          >
            <Card className="bg-gray-700 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-5px) hover:shadow-xl">
              <Box className="flex items-center gap-4 p-4 bg-green-900 bg-opacity-10 border-b border-gray-600">
                <Box className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-500 flex-shrink-0">
                  <i className="fas fa-microchip"></i>
                </Box>
                <Typography variant="h6">
                  Semiconductor Manufacturing
                </Typography>
              </Box>
              <CardMedia
                component="img"
                height="160"
                image={getPlaceholderImage(400, 200)}
                alt="Semiconductor Manufacturing Robotics"
              />
              <CardContent className="p-6 flex-grow flex flex-col">
                <Box className="mb-4">
                  <Typography
                    variant="subtitle2"
                    className="flex items-center gap-2 mb-2 font-semibold"
                  >
                    <Box
                      component="i"
                      className="fas fa-exclamation-circle text-green-500"
                    ></Box>
                    Pain Points Addressed
                  </Typography>
                  <Box className="flex flex-wrap gap-2">
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Cleanroom Requirements
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Precision Handling
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Contamination
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Yield Rates
                    </Box>
                  </Box>
                </Box>

                <Button
                  startIcon={
                    expandedUseCases.semiconductor ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )
                  }
                  onClick={() => toggleUseCaseDetails('semiconductor')}
                  className="text-green-500 justify-start"
                >
                  {expandedUseCases.semiconductor
                    ? 'Hide Details'
                    : 'View More Details'}
                </Button>

                {/* Hidden Details */}
                {expandedUseCases.semiconductor && (
                  <Box className="mt-4 pt-4 border-t border-gray-600">
                    {/* ROI Metrics */}
                    <Box className="mb-4 bg-green-900 bg-opacity-10 p-4 rounded">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-chart-line text-green-500"
                        ></Box>
                        ROI Metrics
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              ±0.001mm
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Precision
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              16mo
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              ROI Period
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              52%
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Yield Increase
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Applicable Robots */}
                    <Box className="mb-4">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-robot text-green-500"
                        ></Box>
                        Applicable Robots
                      </Typography>
                      <Box className="flex flex-wrap gap-2">
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumSwift™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumDelta™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumCo™
                        </Box>
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box className="flex flex-wrap gap-2">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<AccountTreeIcon />}
                        onClick={() => openWorkflowModal('semiconductor')}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        View Workflow
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<PlayCircleIcon />}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        Watch Demo
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<FileDocumentIcon />}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        Case Study
                      </Button>
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Add other industry use cases following the same pattern */}
          {/* Automotive Manufacturing */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-industry="automotive"
            style={{
              display:
                industryFilter === 'all' || industryFilter === 'automotive'
                  ? 'block'
                  : 'none',
            }}
          >
            <Card className="bg-gray-700 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-5px) hover:shadow-xl">
              <Box className="flex items-center gap-4 p-4 bg-green-900 bg-opacity-10 border-b border-gray-600">
                <Box className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-500 flex-shrink-0">
                  <i className="fas fa-car"></i>
                </Box>
                <Typography variant="h6">Automotive Manufacturing</Typography>
              </Box>
              <CardMedia
                component="img"
                height="160"
                image={getPlaceholderImage(400, 200)}
                alt="Automotive Manufacturing Robotics"
              />
              <CardContent className="p-6 flex-grow flex flex-col">
                <Box className="mb-4">
                  <Typography
                    variant="subtitle2"
                    className="flex items-center gap-2 mb-2 font-semibold"
                  >
                    <Box
                      component="i"
                      className="fas fa-exclamation-circle text-green-500"
                    ></Box>
                    Pain Points Addressed
                  </Typography>
                  <Box className="flex flex-wrap gap-2">
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Assembly Speed
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Weld Quality
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Worker Safety
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Material Handling
                    </Box>
                  </Box>
                </Box>

                <Button
                  startIcon={
                    expandedUseCases.automotive ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )
                  }
                  onClick={() => toggleUseCaseDetails('automotive')}
                  className="text-green-500 justify-start"
                >
                  {expandedUseCases.automotive
                    ? 'Hide Details'
                    : 'View More Details'}
                </Button>

                {/* Hidden Details */}
                {expandedUseCases.automotive && (
                  <Box className="mt-4 pt-4 border-t border-gray-600">
                    {/* ROI Metrics */}
                    <Box className="mb-4 bg-green-900 bg-opacity-10 p-4 rounded">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-chart-line text-green-500"
                        ></Box>
                        ROI Metrics
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              28%
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Speed Increase
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              12mo
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              ROI Period
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              92%
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Defect Reduction
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Applicable Robots */}
                    <Box className="mb-4">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-robot text-green-500"
                        ></Box>
                        Applicable Robots
                      </Typography>
                      <Box className="flex flex-wrap gap-2">
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumFlex™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumCo™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumMover™
                        </Box>
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box className="flex flex-wrap gap-2">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<AccountTreeIcon />}
                        onClick={() => openWorkflowModal('automotive')}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        View Workflow
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<PlayCircleIcon />}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        Watch Demo
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<FileDocumentIcon />}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        Case Study
                      </Button>
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Food & Beverage */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-industry="food"
            style={{
              display:
                industryFilter === 'all' || industryFilter === 'food'
                  ? 'block'
                  : 'none',
            }}
          >
            <Card className="bg-gray-700 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-5px) hover:shadow-xl">
              <Box className="flex items-center gap-4 p-4 bg-green-900 bg-opacity-10 border-b border-gray-600">
                <Box className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-500 flex-shrink-0">
                  <i className="fas fa-utensils"></i>
                </Box>
                <Typography variant="h6">Food & Beverage Production</Typography>
              </Box>
              <CardMedia
                component="img"
                height="160"
                image={getPlaceholderImage(400, 200)}
                alt="Food & Beverage Robotics"
              />
              <CardContent className="p-6 flex-grow flex flex-col">
                <Box className="mb-4">
                  <Typography
                    variant="subtitle2"
                    className="flex items-center gap-2 mb-2 font-semibold"
                  >
                    <Box
                      component="i"
                      className="fas fa-exclamation-circle text-green-500"
                    ></Box>
                    Pain Points Addressed
                  </Typography>
                  <Box className="flex flex-wrap gap-2">
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Hygiene Requirements
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Labor Costs
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Food Safety
                    </Box>
                    <Box className="bg-gray-800 px-2 py-1 rounded text-xs">
                      Packaging Efficiency
                    </Box>
                  </Box>
                </Box>

                <Button
                  startIcon={
                    expandedUseCases.food ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )
                  }
                  onClick={() => toggleUseCaseDetails('food')}
                  className="text-green-500 justify-start"
                >
                  {expandedUseCases.food ? 'Hide Details' : 'View More Details'}
                </Button>

                {/* Hidden Details */}
                {expandedUseCases.food && (
                  <Box className="mt-4 pt-4 border-t border-gray-600">
                    {/* ROI Metrics */}
                    <Box className="mb-4 bg-green-900 bg-opacity-10 p-4 rounded">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-chart-line text-green-500"
                        ></Box>
                        ROI Metrics
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              2.5x
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Throughput
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              9mo
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              ROI Period
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box className="text-center">
                            <Typography
                              variant="h6"
                              className="text-green-500 font-bold"
                            >
                              98%
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              Quality Rate
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Applicable Robots */}
                    <Box className="mb-4">
                      <Typography
                        variant="subtitle2"
                        className="flex items-center gap-2 mb-2 font-semibold"
                      >
                        <Box
                          component="i"
                          className="fas fa-robot text-green-500"
                        ></Box>
                        Applicable Robots
                      </Typography>
                      <Box className="flex flex-wrap gap-2">
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumDelta™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumCo™
                        </Box>
                        <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">
                          QuantumSwift™
                        </Box>
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box className="flex flex-wrap gap-2">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<AccountTreeIcon />}
                        onClick={() => openWorkflowModal('food')}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        View Workflow
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<PlayCircleIcon />}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        Watch Demo
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<FileDocumentIcon />}
                        className="text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        Case Study
                      </Button>
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>

  );

}


export default UseCases;
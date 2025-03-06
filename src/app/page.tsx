'use client';

import Footer from '@/components/molecultes/Footer';

import React, { useState, useEffect } from 'react';
import Home from '@/components/home/Home';

import {
  Button,
  IconButton,
  Drawer,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Stepper,
  Step,
  StepLabel,
  Snackbar,
  Alert,
  useMediaQuery,
} from '@mui/material';
import {
  Close as CloseIcon,
  Bolt as BoltIcon,
  Memory as MemoryIcon,
  AccountTree as AccountTreeIcon,
  Build as BuildIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Psychology as PsychologyIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  PlayCircle as PlayCircleIcon,
  FileDocument as FileDocumentIcon,
  SwapHoriz as SwapHorizIcon,
  CheckCircle as CheckCircleIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

// Mock image placeholders
const getPlaceholderImage = (width, height) =>
  `https://placehold.co/${width}x${height}`;

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // State for mobile navigation
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // State for header scrolling
  const [isScrolled, setIsScrolled] = useState(false);

  // State for product filtering
  const [productCategory, setProductCategory] = useState('all');
  const [solutionFilter, setSolutionFilter] = useState('all');

  // State for product technical specs
  const [expandedSpecs, setExpandedSpecs] = useState({});

  // State for product comparison
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  // State for industry filtering
  const [industryFilter, setIndustryFilter] = useState('all');
  const [showMoreIndustries, setShowMoreIndustries] = useState(false);

  // State for use case details
  const [expandedUseCases, setExpandedUseCases] = useState({});

  // State for workflow modal
  const [workflowModalOpen, setWorkflowModalOpen] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState('');

  // State for contact form
  const [contactFormType, setContactFormType] = useState('comprehensive'); // Default to comprehensive form
  const [contactStep, setContactStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
    consent: false,
  });

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle toggle of product specs
  const toggleProductSpecs = (productId) => {
    setExpandedSpecs((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  // Handle toggle of use case details
  const toggleUseCaseDetails = (caseId) => {
    setExpandedUseCases((prev) => ({
      ...prev,
      [caseId]: !prev[caseId],
    }));
  };

  // Handle product comparison selection
  const handleCompareProduct = (productId, isChecked) => {
    if (isChecked) {
      if (selectedProducts.length >= 3) {
        alert('You can only compare up to 3 products at once.');
        return false;
      }
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    }

    return true;
  };

  useEffect(() => {
    if (selectedProducts.length > 0) {
      setShowComparison(true);
    } else {
      setShowComparison(false);
    }
  }, [selectedProducts]);

  // Handle workflow modal open
  const openWorkflowModal = (workflowId) => {
    setActiveWorkflow(workflowId);
    setWorkflowModalOpen(true);
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log('Form submitted with data:', formData);
    setFormSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      industry: '',
      message: '',
      consent: false,
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  // Product specifications data
  const productSpecs = {
    quantumflex: {
      name: 'QuantumFlex™',
      category: '6-Axis Articulated Robot',
      payload: '210kg',
      reach: '2.8m',
      precision: '±0.08mm',
      speed: '180°/sec',
      features: 'Flexible Mounting, Heavy Payload, Path Planning',
      bestFor: 'Heavy manufacturing, welding, assembly',
    },
    quantumco: {
      name: 'QuantumCo™',
      category: 'Collaborative Robot',
      payload: '35kg',
      reach: '1.7m',
      precision: '±0.03mm',
      speed: '120°/sec',
      features: 'Force Sensing, Multi-Tool Support, Adaptive Learning',
      bestFor: 'Human-robot collaboration, medical devices, food production',
    },
    quantumdelta: {
      name: 'QuantumDelta™',
      category: 'Delta Robot',
      payload: '8kg',
      reach: '1.2m',
      precision: '±0.02mm',
      speed: '200 picks/min',
      features: 'High-Speed, Washdown Ready, Precision Control',
      bestFor: 'Picking, packaging, sorting applications',
    },
    quantumswift: {
      name: 'QuantumSwift™',
      category: 'SCARA Robot',
      payload: '20kg',
      reach: '850mm',
      precision: '±0.01mm',
      speed: '7m/sec',
      features: 'Compact Design, High Throughput, IoT Enabled',
      bestFor: 'Electronics assembly, testing, small component handling',
    },
    quantummover: {
      name: 'QuantumMover™',
      category: 'Autonomous Mobile Robot',
      payload: '1500kg',
      reach: 'Site-wide',
      precision: '±10mm',
      speed: '2m/sec',
      features: 'Dynamic Navigation, Fleet Management, Obstacle Avoidance',
      bestFor: 'Material transport, warehouse logistics',
    },
    quantumaero: {
      name: 'QuantumAero™',
      category: 'Drone/UAV',
      payload: '5kg',
      reach: '10km range',
      precision: '±5cm',
      speed: '15m/sec',
      features: 'Indoor Navigation, Computer Vision, Extended Flight Time',
      bestFor: 'Inventory scanning, inspection, monitoring',
    },
  };

  const renderProducts = () => {
    // Helper function to filter products
    const filterProducts = (product) => {
      const productElement = document.querySelector(
        `[data-category="${product}"]`,
      );
      if (!productElement) return true;

      const matchesCategory =
        productCategory === 'all' || product === productCategory;
      const solutions = productElement.getAttribute('data-solutions') || '';
      const matchesSolution =
        solutionFilter === 'all' || solutions.includes(solutionFilter);

      return matchesCategory && matchesSolution;
    };

    return (
      <Box id="products" className="py-20 bg-gray-800">
        <Container>
          <Typography
            variant="h2"
            className={`text-3xl font-bold mb-4 relative ${
              isTablet
                ? 'text-center after:left-1/2 after:-translate-x-1/2'
                : ''
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
            Our Products
          </Typography>
          <Typography
            variant="subtitle1"
            className={`text-xl text-gray-400 mb-12 max-w-3xl ${
              isTablet ? 'text-center mx-auto' : ''
            }`}
          >
            Discover our range of core robotics platforms designed for specific
            industrial applications.
          </Typography>

          {/* Product Category Tabs */}
          <Box
            className={`flex flex-wrap justify-center gap-4 mb-8 ${
              isMobile ? 'flex-col' : ''
            }`}
          >
            <Button
              variant={productCategory === 'all' ? 'contained' : 'outlined'}
              onClick={() => setProductCategory('all')}
              className={
                productCategory === 'all'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              All Platforms
            </Button>
            <Button
              variant={
                productCategory === 'articulated' ? 'contained' : 'outlined'
              }
              onClick={() => setProductCategory('articulated')}
              className={
                productCategory === 'articulated'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              6-Axis Articulated
            </Button>
            <Button
              variant={
                productCategory === 'collaborative' ? 'contained' : 'outlined'
              }
              onClick={() => setProductCategory('collaborative')}
              className={
                productCategory === 'collaborative'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              Collaborative
            </Button>
            <Button
              variant={productCategory === 'delta' ? 'contained' : 'outlined'}
              onClick={() => setProductCategory('delta')}
              className={
                productCategory === 'delta'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              Delta
            </Button>
            <Button
              variant={productCategory === 'scara' ? 'contained' : 'outlined'}
              onClick={() => setProductCategory('scara')}
              className={
                productCategory === 'scara'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              SCARA
            </Button>
            <Button
              variant={productCategory === 'mobile' ? 'contained' : 'outlined'}
              onClick={() => setProductCategory('mobile')}
              className={
                productCategory === 'mobile'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              Mobile
            </Button>
            <Button
              variant={productCategory === 'drone' ? 'contained' : 'outlined'}
              onClick={() => setProductCategory('drone')}
              className={
                productCategory === 'drone'
                  ? 'bg-green-700'
                  : 'text-gray-400 border-gray-700 hover:bg-gray-700'
              }
            >
              UAV/Drone
            </Button>
          </Box>

          {/* Industry Filter */}
          <Box className="mb-8">
            <Typography
              variant="subtitle2"
              className="text-gray-400 mb-2 font-semibold"
            >
              Solutions For:
            </Typography>
            <Box
              className={`flex flex-wrap gap-2 mb-2 ${
                isMobile ? 'flex-col' : ''
              }`}
            >
              <Button
                variant={solutionFilter === 'all' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setSolutionFilter('all')}
                className={
                  solutionFilter === 'all'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                All Industries
              </Button>
              <Button
                variant={solutionFilter === 'pharma' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setSolutionFilter('pharma')}
                className={
                  solutionFilter === 'pharma'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Pharmaceutical
              </Button>
              <Button
                variant={
                  solutionFilter === 'logistics' ? 'contained' : 'outlined'
                }
                size="small"
                onClick={() => setSolutionFilter('logistics')}
                className={
                  solutionFilter === 'logistics'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Logistics
              </Button>
              <Button
                variant={
                  solutionFilter === 'semiconductor' ? 'contained' : 'outlined'
                }
                size="small"
                onClick={() => setSolutionFilter('semiconductor')}
                className={
                  solutionFilter === 'semiconductor'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Semiconductor
              </Button>
              <Button
                variant={
                  solutionFilter === 'automotive' ? 'contained' : 'outlined'
                }
                size="small"
                onClick={() => setSolutionFilter('automotive')}
                className={
                  solutionFilter === 'automotive'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Automotive
              </Button>
              <Button
                variant={solutionFilter === 'food' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setSolutionFilter('food')}
                className={
                  solutionFilter === 'food'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Food & Beverage
              </Button>
              <Button
                variant={
                  solutionFilter === 'medical' ? 'contained' : 'outlined'
                }
                size="small"
                onClick={() => setSolutionFilter('medical')}
                className={
                  solutionFilter === 'medical'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Medical Devices
              </Button>
              <Button
                variant={
                  solutionFilter === 'aerospace' ? 'contained' : 'outlined'
                }
                size="small"
                onClick={() => setSolutionFilter('aerospace')}
                className={
                  solutionFilter === 'aerospace'
                    ? 'bg-green-700'
                    : 'text-gray-400 border-gray-700 hover:bg-gray-700'
                }
              >
                Aerospace
              </Button>
            </Box>
          </Box>

          {/* Products Grid */}
          <Grid container spacing={4}>
            {/* QuantumFlex: 6-Axis Articulated Robot */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-category="articulated"
              data-solutions="automotive,aerospace,manufacturing"
              style={{
                display: filterProducts('articulated') ? 'block' : 'none',
              }}
            >
              <Card className="bg-gray-800 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl">
                <CardMedia
                  component="img"
                  height="200"
                  image={getPlaceholderImage(400, 300)}
                  alt="QuantumFlex 6-Axis Robot"
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                  <Typography
                    variant="caption"
                    className="text-green-500 uppercase"
                  >
                    6-Axis Articulated Robot
                  </Typography>
                  <Typography variant="h5" className="font-semibold mb-2">
                    QuantumFlex™
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    Versatile 6-axis articulated robot for complex
                    manufacturing, welding, and material handling tasks.
                  </Typography>

                  {/* Technical Specs - Hidden by default */}
                  {expandedSpecs.quantumflex && (
                    <Box className="flex flex-wrap gap-2 mb-4 bg-green-900 bg-opacity-10 p-2 rounded">
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          210kg
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Payload
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          2.8m
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Reach
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          ±0.08mm
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Precision
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          180°/s
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Speed
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  <Box className="flex flex-wrap gap-2 mb-4">
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Flexible Mounting
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Heavy Payload
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Path Planning
                    </Box>
                  </Box>

                  <Box className="flex justify-between items-center mt-auto">
                    <Button
                      startIcon={
                        expandedSpecs.quantumflex ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                      onClick={() => toggleProductSpecs('quantumflex')}
                      className="text-green-500"
                    >
                      {expandedSpecs.quantumflex
                        ? 'Hide Specs'
                        : 'Technical Specs'}
                    </Button>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={selectedProducts.includes('quantumflex')}
                          onChange={(e) => {
                            const success = handleCompareProduct(
                              'quantumflex',
                              e.target.checked,
                            );
                            if (!success) e.preventDefault();
                          }}
                        />
                      }
                      label={<Typography variant="caption">Compare</Typography>}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* QuantumCo: Collaborative Robot */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-category="collaborative"
              data-solutions="medical,pharma,food"
              style={{
                display: filterProducts('collaborative') ? 'block' : 'none',
              }}
            >
              <Card className="bg-gray-800 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl">
                <CardMedia
                  component="img"
                  height="200"
                  image={getPlaceholderImage(400, 300)}
                  alt="QuantumCo Collaborative Robot"
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                  <Typography
                    variant="caption"
                    className="text-green-500 uppercase"
                  >
                    Collaborative Robot
                  </Typography>
                  <Typography variant="h5" className="font-semibold mb-2">
                    QuantumCo™
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    Advanced collaborative robot designed to work alongside
                    human operators in mixed manufacturing environments.
                  </Typography>

                  {/* Technical Specs - Hidden by default */}
                  {expandedSpecs.quantumco && (
                    <Box className="flex flex-wrap gap-2 mb-4 bg-green-900 bg-opacity-10 p-2 rounded">
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          35kg
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Payload
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          1.7m
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Reach
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          ±0.03mm
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Precision
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          120°/s
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Speed
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  <Box className="flex flex-wrap gap-2 mb-4">
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Force Sensing
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Multi-Tool Support
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Adaptive Learning
                    </Box>
                  </Box>

                  <Box className="flex justify-between items-center mt-auto">
                    <Button
                      startIcon={
                        expandedSpecs.quantumco ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                      onClick={() => toggleProductSpecs('quantumco')}
                      className="text-green-500"
                    >
                      {expandedSpecs.quantumco
                        ? 'Hide Specs'
                        : 'Technical Specs'}
                    </Button>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={selectedProducts.includes('quantumco')}
                          onChange={(e) => {
                            const success = handleCompareProduct(
                              'quantumco',
                              e.target.checked,
                            );
                            if (!success) e.preventDefault();
                          }}
                        />
                      }
                      label={<Typography variant="caption">Compare</Typography>}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* QuantumDelta: Delta Robot */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-category="delta"
              data-solutions="food,pharma,medical"
              style={{ display: filterProducts('delta') ? 'block' : 'none' }}
            >
              <Card className="bg-gray-800 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl">
                <CardMedia
                  component="img"
                  height="200"
                  image={getPlaceholderImage(400, 300)}
                  alt="QuantumDelta Robot"
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                  <Typography
                    variant="caption"
                    className="text-green-500 uppercase"
                  >
                    Delta Robot
                  </Typography>
                  <Typography variant="h5" className="font-semibold mb-2">
                    QuantumDelta™
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    High-speed picking and placing robot optimized for food,
                    pharmaceutical, and small component assembly.
                  </Typography>

                  {/* Technical Specs - Hidden by default */}
                  {expandedSpecs.quantumdelta && (
                    <Box className="flex flex-wrap gap-2 mb-4 bg-green-900 bg-opacity-10 p-2 rounded">
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          8kg
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Payload
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          1.2m
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Workspace
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          ±0.02mm
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Precision
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          200/min
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Cycle Rate
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  <Box className="flex flex-wrap gap-2 mb-4">
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      High-Speed
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Precision Control
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Washdown Ready
                    </Box>
                  </Box>

                  <Box className="flex justify-between items-center mt-auto">
                    <Button
                      startIcon={
                        expandedSpecs.quantumdelta ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                      onClick={() => toggleProductSpecs('quantumdelta')}
                      className="text-green-500"
                    >
                      {expandedSpecs.quantumdelta
                        ? 'Hide Specs'
                        : 'Technical Specs'}
                    </Button>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={selectedProducts.includes('quantumdelta')}
                          onChange={(e) => {
                            const success = handleCompareProduct(
                              'quantumdelta',
                              e.target.checked,
                            );
                            if (!success) e.preventDefault();
                          }}
                        />
                      }
                      label={<Typography variant="caption">Compare</Typography>}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* QuantumSwift: SCARA Robot */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-category="scara"
              data-solutions="semiconductor,medical,electronics"
              style={{ display: filterProducts('scara') ? 'block' : 'none' }}
            >
              <Card className="bg-gray-800 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl">
                <CardMedia
                  component="img"
                  height="200"
                  image={getPlaceholderImage(400, 300)}
                  alt="QuantumSwift SCARA Robot"
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                  <Typography
                    variant="caption"
                    className="text-green-500 uppercase"
                  >
                    SCARA Robot
                  </Typography>
                  <Typography variant="h5" className="font-semibold mb-2">
                    QuantumSwift™
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    Selective Compliance Articulated Robot Arm designed for
                    precise assembly and handling operations.
                  </Typography>

                  {/* Technical Specs - Hidden by default */}
                  {expandedSpecs.quantumswift && (
                    <Box className="flex flex-wrap gap-2 mb-4 bg-green-900 bg-opacity-10 p-2 rounded">
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          20kg
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Payload
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          850mm
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Reach
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          ±0.01mm
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Precision
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          7m/s
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Speed
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  <Box className="flex flex-wrap gap-2 mb-4">
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Compact Design
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      High Throughput
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      IoT Enabled
                    </Box>
                  </Box>

                  <Box className="flex justify-between items-center mt-auto">
                    <Button
                      startIcon={
                        expandedSpecs.quantumswift ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                      onClick={() => toggleProductSpecs('quantumswift')}
                      className="text-green-500"
                    >
                      {expandedSpecs.quantumswift
                        ? 'Hide Specs'
                        : 'Technical Specs'}
                    </Button>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={selectedProducts.includes('quantumswift')}
                          onChange={(e) => {
                            const success = handleCompareProduct(
                              'quantumswift',
                              e.target.checked,
                            );
                            if (!success) e.preventDefault();
                          }}
                        />
                      }
                      label={<Typography variant="caption">Compare</Typography>}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* QuantumMover: Autonomous Mobile Robot */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-category="mobile"
              data-solutions="logistics,automotive,pharma,aerospace"
              style={{ display: filterProducts('mobile') ? 'block' : 'none' }}
            >
              <Card className="bg-gray-800 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl">
                <CardMedia
                  component="img"
                  height="200"
                  image={getPlaceholderImage(400, 300)}
                  alt="QuantumMover AMR"
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                  <Typography
                    variant="caption"
                    className="text-green-500 uppercase"
                  >
                    Autonomous Mobile Robot
                  </Typography>
                  <Typography variant="h5" className="font-semibold mb-2">
                    QuantumMover™
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    Self-navigating mobile robot for material transport across
                    factory floors, warehouses, and distribution centers.
                  </Typography>

                  {/* Technical Specs - Hidden by default */}
                  {expandedSpecs.quantummover && (
                    <Box className="flex flex-wrap gap-2 mb-4 bg-green-900 bg-opacity-10 p-2 rounded">
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          1500kg
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Payload
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          2.0m/s
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Speed
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          ±10mm
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Navigation
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          10hrs
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Runtime
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  <Box className="flex flex-wrap gap-2 mb-4">
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Dynamic Navigation
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Fleet Management
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Obstacle Avoidance
                    </Box>
                  </Box>

                  <Box className="flex justify-between items-center mt-auto">
                    <Button
                      startIcon={
                        expandedSpecs.quantummover ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                      onClick={() => toggleProductSpecs('quantummover')}
                      className="text-green-500"
                    >
                      {expandedSpecs.quantummover
                        ? 'Hide Specs'
                        : 'Technical Specs'}
                    </Button>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={selectedProducts.includes('quantummover')}
                          onChange={(e) => {
                            const success = handleCompareProduct(
                              'quantummover',
                              e.target.checked,
                            );
                            if (!success) e.preventDefault();
                          }}
                        />
                      }
                      label={<Typography variant="caption">Compare</Typography>}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* QuantumAero: Drone/UAV */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-category="drone"
              data-solutions="logistics,aerospace"
              style={{ display: filterProducts('drone') ? 'block' : 'none' }}
            >
              <Card className="bg-gray-800 h-full flex flex-col transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl">
                <CardMedia
                  component="img"
                  height="200"
                  image={getPlaceholderImage(400, 300)}
                  alt="QuantumAero Drone"
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                  <Typography
                    variant="caption"
                    className="text-green-500 uppercase"
                  >
                    Drone/UAV
                  </Typography>
                  <Typography variant="h5" className="font-semibold mb-2">
                    QuantumAero™
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    Autonomous aerial system for inventory management,
                    inspection, and light cargo transport.
                  </Typography>

                  {/* Technical Specs - Hidden by default */}
                  {expandedSpecs.quantumaero && (
                    <Box className="flex flex-wrap gap-2 mb-4 bg-green-900 bg-opacity-10 p-2 rounded">
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          5kg
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Payload
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          45min
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Flight Time
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          10km
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Range
                        </Typography>
                      </Box>
                      <Box className="flex flex-col items-center p-1 min-w-16 flex-1">
                        <Typography
                          variant="subtitle2"
                          className="font-semibold text-green-500"
                        >
                          ±5cm
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Positioning
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  <Box className="flex flex-wrap gap-2 mb-4">
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Indoor Navigation
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Computer Vision
                    </Box>
                    <Box className="bg-green-900 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs font-medium">
                      Extended Flight Time
                    </Box>
                  </Box>

                  <Box className="flex justify-between items-center mt-auto">
                    <Button
                      startIcon={
                        expandedSpecs.quantumaero ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                      onClick={() => toggleProductSpecs('quantumaero')}
                      className="text-green-500"
                    >
                      {expandedSpecs.quantumaero
                        ? 'Hide Specs'
                        : 'Technical Specs'}
                    </Button>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={selectedProducts.includes('quantumaero')}
                          onChange={(e) => {
                            const success = handleCompareProduct(
                              'quantumaero',
                              e.target.checked,
                            );
                            if (!success) e.preventDefault();
                          }}
                        />
                      }
                      label={<Typography variant="caption">Compare</Typography>}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Product Comparison View */}
          {showComparison && (
            <Box className="mt-12 bg-gray-700 rounded-lg p-6 overflow-x-auto">
              <Typography
                variant="h5"
                className="font-semibold mb-6 text-center"
              >
                Product Comparison
              </Typography>
              <Box className="min-w-max">
                <Grid container className="border-b border-gray-600 pb-4 mb-2">
                  <Grid item xs={3}>
                    <Typography
                      variant="subtitle2"
                      className="font-semibold text-green-500"
                    >
                      Specification
                    </Typography>
                  </Grid>
                  {selectedProducts.map((productId, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography
                        variant="subtitle2"
                        className="font-semibold text-green-500"
                      >
                        {productSpecs[productId]?.name ||
                          `Product ${index + 1}`}
                      </Typography>
                    </Grid>
                  ))}
                  {[...Array(3 - selectedProducts.length)].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography
                        variant="subtitle2"
                        className="text-gray-500 italic"
                      >
                        Select a product
                      </Typography>
                    </Grid>
                  ))}
                </Grid>

                <Grid container className="border-b border-gray-600 py-2">
                  <Grid item xs={3}>
                    <Typography variant="body2" className="font-medium">
                      Category
                    </Typography>
                  </Grid>
                  {selectedProducts.map((productId, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">
                        {productSpecs[productId]?.category || '-'}
                      </Typography>
                    </Grid>
                  ))}
                  {[...Array(3 - selectedProducts.length)].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">-</Typography>
                    </Grid>
                  ))}
                </Grid>

                <Grid container className="border-b border-gray-600 py-2">
                  <Grid item xs={3}>
                    <Typography variant="body2" className="font-medium">
                      Payload
                    </Typography>
                  </Grid>
                  {selectedProducts.map((productId, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">
                        {productSpecs[productId]?.payload || '-'}
                      </Typography>
                    </Grid>
                  ))}
                  {[...Array(3 - selectedProducts.length)].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">-</Typography>
                    </Grid>
                  ))}
                </Grid>

                <Grid container className="border-b border-gray-600 py-2">
                  <Grid item xs={3}>
                    <Typography variant="body2" className="font-medium">
                      Reach/Range
                    </Typography>
                  </Grid>
                  {selectedProducts.map((productId, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">
                        {productSpecs[productId]?.reach || '-'}
                      </Typography>
                    </Grid>
                  ))}
                  {[...Array(3 - selectedProducts.length)].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">-</Typography>
                    </Grid>
                  ))}
                </Grid>

                <Grid container className="border-b border-gray-600 py-2">
                  <Grid item xs={3}>
                    <Typography variant="body2" className="font-medium">
                      Precision
                    </Typography>
                  </Grid>
                  {selectedProducts.map((productId, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">
                        {productSpecs[productId]?.precision || '-'}
                      </Typography>
                    </Grid>
                  ))}
                  {[...Array(3 - selectedProducts.length)].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">-</Typography>
                    </Grid>
                  ))}
                </Grid>

                <Grid container className="border-b border-gray-600 py-2">
                  <Grid item xs={3}>
                    <Typography variant="body2" className="font-medium">
                      Speed
                    </Typography>
                  </Grid>
                  {selectedProducts.map((productId, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">
                        {productSpecs[productId]?.speed || '-'}
                      </Typography>
                    </Grid>
                  ))}
                  {[...Array(3 - selectedProducts.length)].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">-</Typography>
                    </Grid>
                  ))}
                </Grid>

                <Grid container className="border-b border-gray-600 py-2">
                  <Grid item xs={3}>
                    <Typography variant="body2" className="font-medium">
                      Key Features
                    </Typography>
                  </Grid>
                  {selectedProducts.map((productId, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">
                        {productSpecs[productId]?.features || '-'}
                      </Typography>
                    </Grid>
                  ))}
                  {[...Array(3 - selectedProducts.length)].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">-</Typography>
                    </Grid>
                  ))}
                </Grid>

                <Grid container className="pt-2">
                  <Grid item xs={3}>
                    <Typography variant="body2" className="font-medium">
                      Best For
                    </Typography>
                  </Grid>
                  {selectedProducts.map((productId, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">
                        {productSpecs[productId]?.bestFor || '-'}
                      </Typography>
                    </Grid>
                  ))}
                  {[...Array(3 - selectedProducts.length)].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <Typography variant="body2">-</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    );
  };

  // Render Qortex OS Section
  const renderQortexOS = () => (
    <Box id="qortex" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <Box
        className="absolute inset-0 z-0"
        sx={{
          background:
            'radial-gradient(circle at center, rgba(60, 90, 30, 0.1) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <Typography
          variant="h2"
          className={`text-3xl font-bold mb-4 relative ${
            isTablet ? 'text-center after:left-1/2 after:-translate-x-1/2' : ''
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
          Qortex OS Platform
        </Typography>
        <Typography
          variant="subtitle1"
          className={`text-xl text-gray-400 mb-12 max-w-3xl ${
            isTablet ? 'text-center mx-auto' : ''
          }`}
        >
          Our proprietary operating system powers all Quantum robots, enabling
          rapid deployment, seamless integration, and unparalleled performance.
        </Typography>

        {/* Deployment Comparison */}
        <Grid container spacing={6} className="mb-16">
          <Grid item xs={12} md={6}>
            <Card className="bg-gray-800 h-full flex flex-col">
              <Box className="bg-gray-700 p-4 text-center border-b border-gray-600">
                <Typography variant="h5" className="font-semibold">
                  Traditional Deployment
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Complex programming, custom integration, extensive testing
                </Typography>
              </Box>
              <CardContent className="p-6 flex-grow">
                <Typography
                  variant="h3"
                  className="text-4xl font-bold text-center mb-6"
                >
                  4-16 Weeks
                </Typography>

                <Box className="space-y-4">
                  {/* Step 1 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      1
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Requirements Analysis
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 weeks of meetings and assessments
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 2 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      2
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Custom Programming
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        2-4 weeks of specialized coding
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 3 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      3
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Integration
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-3 weeks adapting to existing systems
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 4 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      4
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Testing & Debugging
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 weeks of validation
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 5 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      5
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Staff Training
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        3-5 days of operator training
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="bg-gray-800 h-full flex flex-col border-2 border-green-700">
              <Box className="bg-gray-700 p-4 text-center border-b border-gray-600">
                <Typography variant="h5" className="font-semibold">
                  Qortex OS Deployment
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Visual programming, plug-and-play integration, AI
                  configuration
                </Typography>
              </Box>
              <CardContent className="p-6 flex-grow">
                <Typography
                  variant="h3"
                  className="text-4xl font-bold text-center mb-6 text-green-500"
                >
                  4-10 Days
                </Typography>

                <Box className="space-y-4">
                  {/* Step 1 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      1
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Rapid Assessment
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        2-4 hours with AI-assisted analysis
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 2 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      2
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Visual Task Creation
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 days of drag & drop programming
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 3 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      3
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Auto-Integration
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 days with pre-built connectors
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 4 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      4
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        AI-Optimized Testing
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        1-2 days of automated validation
                      </Typography>
                    </Box>
                  </Box>

                  {/* Step 5 */}
                  <Box className="flex items-start gap-4">
                    <Box className="w-8 h-8 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-semibold">
                      5
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" className="font-semibold">
                        Intuitive Interface
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        2-4 hours of guided onboarding
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Code Comparison */}
        <Box className="relative my-16 max-w-4xl mx-auto">
          <Box className="rounded-lg overflow-hidden">
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                className="relative"
                sx={{ zIndex: 10 }}
              >
                <Box className="bg-gray-800 p-8 h-full">
                  <Typography variant="h6" className="text-center mb-4">
                    Traditional Robotics
                  </Typography>
                  <Box
                    component="pre"
                    className="text-left text-xs bg-gray-900 bg-opacity-30 p-4 overflow-auto max-h-80"
                  >
                    {`// Traditional robot programming - complex, verbose, error-prone
Robot.Initialize();
RobotArm arm = Robot.GetArm();
RobotGripper gripper = arm.GetEndEffector();

// Manual trajectory calculation
Vector3[] waypoints = new Vector3[] {
    new Vector3(234.56, 187.32, 345.87),  // Home position
    new Vector3(312.45, 298.17, 201.34),  // Approach position
    new Vector3(312.45, 298.17, 156.73),  // Grasp position
};

// Manual velocity and acceleration profiles
double[] velocities = new double[] { 0.3, 0.2, 0.1 };
double[] accelerations = new double[] { 0.1, 0.05, 0.025 };

// Complex error handling and recovery
try {
    for (int i = 0; i < waypoints.Length; i++) {
        if (Robot.IsPathBlocked(arm.GetCurrentPosition(), waypoints[i])) {
            LogWarning("Path blocked, recalculating...");
            waypoints[i] = RecalculateWaypoint(waypoints[i]);
        }
        
        arm.MoveTo(waypoints[i], 
                   velocities[i], 
                   accelerations[i], 
                   ArmConfiguration.ELBOW_DOWN, 
                   CollisionAvoidanceLevel.HIGH);
    }
    
    // Gripper control with explicit width
    gripper.SetWidth(82.5);  // Specific width in mm
    gripper.Close(0.7);      // 70% force
    
    // Wait for grip confirmation with timeout
    bool hasGrip = false;
    int timeout = 100;  // 10 seconds
    while (!hasGrip && timeout > 0) {
        hasGrip = gripper.CheckForceThreshold(5.0);
        Thread.Sleep(100);
        timeout--;
    }
    
    if (!hasGrip) {
        throw new Exception("Failed to grip item");
    }
    
    // Return path with manually defined waypoints
    Vector3[] returnWaypoints = new Vector3[] {
        new Vector3(312.45, 298.17, 201.34),  // Lift position
        new Vector3(198.35, 245.89, 201.34),  // Intermediate point
        new Vector3(198.35, 245.89, 156.73),  // Drop position
    };
    
    for (int i = 0; i < returnWaypoints.Length; i++) {
        arm.MoveTo(returnWaypoints[i], 0.2, 0.1,
                  ArmConfiguration.ELBOW_DOWN,
                  CollisionAvoidanceLevel.HIGH);
    }
    
    gripper.Open();
} catch (Exception e) {
    LogError("Motion error: " + e.Message);
    arm.EmergencyStop();
    Robot.ResetToHome();
    throw;
}`}
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="relative"
                sx={{ zIndex: 10 }}
              >
                <Box className="bg-gray-800 p-8 h-full">
                  <Typography variant="h6" className="text-center mb-4">
                    Qortex OS
                  </Typography>
                  <Box
                    component="pre"
                    className="text-left text-sm bg-green-900 bg-opacity-20 p-4 overflow-auto max-h-80"
                  >
                    {`// Qortex OS - Natural language robotics control
qortex.command("Pick up the item from bin A and place it in box B");

// Alternative approaches with the same outcome:
qortex.command("Move product from conveyor to packaging area");

// Complex operations simplified:
qortex.command("Inspect parts from tray C for defects");
qortex.command("Sort blue components into bin 1, red into bin 2");

// Contextual understanding:
qortex.command("Increase gripper force when handling fragile items");
qortex.command("Use faster movements for the next 5 operations");

// Adaptive learning:
qortex.teach("Gentle placement", () => {
    // Qortex learns this pattern and can repeat it from a
    // single natural language command later
});

// Qortex handles all the complexity behind a simple interface`}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Divider & Slider */}
          <Box
            className="absolute top-0 left-1/2 bottom-0 w-1 bg-green-700 transform -translate-x-1/2"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Box
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white cursor-pointer"
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <SwapHorizIcon />
          </Box>
        </Box>

        {/* Metrics */}
        <Box className="flex flex-wrap justify-around gap-8 my-16">
          <Box className="text-center">
            <Typography
              variant="h3"
              className="text-4xl font-bold text-green-500"
            >
              80%
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Less code required
            </Typography>
          </Box>
          <Box className="text-center">
            <Typography
              variant="h3"
              className="text-4xl font-bold text-green-500"
            >
              95%
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Faster setup time
            </Typography>
          </Box>
          <Box className="text-center">
            <Typography
              variant="h3"
              className="text-4xl font-bold text-green-500"
            >
              99.8%
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              System reliability
            </Typography>
          </Box>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4} className="mt-16">
          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <BoltIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Rapid Integration
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Connect with existing systems through standard protocols and
                  pre-built connectors.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <MemoryIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Optimized Runtime
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Real-time performance optimization through adaptive learning
                  algorithms.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <AccountTreeIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Multi-Robot Coordination
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Seamlessly coordinate multiple robots for complex operations
                  and workflows.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <BuildIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Predictive Maintenance
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  AI-powered system health monitoring to prevent downtime and
                  extend equipment life.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <ChatBubbleOutlineIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Natural Language Processing
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Control robots with simple voice or typed commands without
                  complex programming.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className="flex items-start gap-4">
              <Box className="text-2xl text-green-500">
                <PsychologyIcon fontSize="inherit" />
              </Box>
              <Box>
                <Typography variant="h6" className="font-semibold mb-2">
                  Adaptive Learning
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  System improves over time by analyzing performance data and
                  user interactions.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box className="text-center mt-12">
          <Button
            variant="contained"
            href="#contact"
            size="large"
            className="bg-green-700 hover:bg-green-800"
          >
            Deploy with Qortex{' '}
            <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded ml-2 animate-pulse">
              FREE
            </span>
          </Button>
        </Box>
      </Container>
    </Box>
  );

  // Render Use Cases section
  const renderUseCases = () => (
    <Box id="use-cases" className="py-20 bg-gray-800">
      <Container>
        <Typography
          variant="h2"
          className={`text-3xl font-bold mb-4 relative ${
            isTablet ? 'text-center after:left-1/2 after:-translate-x-1/2' : ''
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
          className={`text-xl text-gray-400 mb-12 max-w-3xl ${
            isTablet ? 'text-center mx-auto' : ''
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

                    {/* Action Buttons */}
                    <Box className="flex flex-wrap gap-2">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<AccountTreeIcon />}
                        onClick={() => openWorkflowModal('logistics')}
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

  // Render Workflow Modal
  const renderWorkflowModal = () => (
    <Dialog
      open={workflowModalOpen}
      onClose={() => setWorkflowModalOpen(false)}
      maxWidth="md"
      fullWidth
    >
      <Box className="relative">
        <IconButton
          aria-label="close"
          onClick={() => setWorkflowModalOpen(false)}
          className="absolute top-2 right-2 z-10 bg-black bg-opacity-50 text-white"
          size="small"
        >
          <CloseIcon />
        </IconButton>

        <Box className="h-64 relative">
          <Box
            component="img"
            src={getPlaceholderImage(800, 400)}
            alt={`${
              activeWorkflow.charAt(0).toUpperCase() + activeWorkflow.slice(1)
            } Workflow`}
            className="w-full h-full object-cover"
          />
          <Box className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
            <Typography variant="h4" className="font-bold">
              {activeWorkflow.charAt(0).toUpperCase() + activeWorkflow.slice(1)}{' '}
              Manufacturing Workflow
            </Typography>
          </Box>
        </Box>

        <DialogContent>
          <Box className="mt-6 border-t border-gray-700 pt-6">
            <Typography
              variant="h6"
              className="flex items-center gap-2 font-semibold mb-4"
            >
              <AccountTreeIcon className="text-green-500" />
              Automated Manufacturing Process Flow
            </Typography>
            <Box className="relative h-64 bg-gray-700 p-6 rounded">
              {/* Workflow Step 1 */}
              <Box className="absolute top-8 left-8 bg-gray-800 p-3 rounded w-32 text-center transform transition-transform hover:scale-105 hover:bg-green-700 hover:z-10">
                <Box className="inline-block w-6 h-6 bg-green-700 rounded-full mb-1 font-semibold">
                  1
                </Box>
                <Typography variant="body2">Raw Material Handling</Typography>
              </Box>

              {/* Workflow Step 2 */}
              <Box className="absolute top-24 left-44 bg-gray-800 p-3 rounded w-32 text-center transform transition-transform hover:scale-105 hover:bg-green-700 hover:z-10">
                <Box className="inline-block w-6 h-6 bg-green-700 rounded-full mb-1 font-semibold">
                  2
                </Box>
                <Typography variant="body2">Formulation & Mixing</Typography>
              </Box>

              {/* Workflow Step 3 */}
              <Box className="absolute top-8 left-80 bg-gray-800 p-3 rounded w-32 text-center transform transition-transform hover:scale-105 hover:bg-green-700 hover:z-10">
                <Box className="inline-block w-6 h-6 bg-green-700 rounded-full mb-1 font-semibold">
                  3
                </Box>
                <Typography variant="body2">Quality Inspection</Typography>
              </Box>

              {/* Workflow Step 4 */}
              <Box className="absolute top-24 right-44 bg-gray-800 p-3 rounded w-32 text-center transform transition-transform hover:scale-105 hover:bg-green-700 hover:z-10">
                <Box className="inline-block w-6 h-6 bg-green-700 rounded-full mb-1 font-semibold">
                  4
                </Box>
                <Typography variant="body2">Packaging</Typography>
              </Box>

              {/* Workflow Step 5 */}
              <Box className="absolute top-8 right-8 bg-gray-800 p-3 rounded w-32 text-center transform transition-transform hover:scale-105 hover:bg-green-700 hover:z-10">
                <Box className="inline-block w-6 h-6 bg-green-700 rounded-full mb-1 font-semibold">
                  5
                </Box>
                <Typography variant="body2">Palletizing & Shipping</Typography>
              </Box>
            </Box>
          </Box>

          <Typography variant="body1" className="my-6">
            Our {activeWorkflow} manufacturing solution integrates robotic
            systems at each critical stage of production, from raw material
            handling to final packaging. This fully validated system complies
            with industry standards and provides complete traceability
            throughout the production process.
          </Typography>

          <Grid container spacing={3} className="mb-6">
            <Grid item xs={12} sm={6}>
              <Box className="flex items-center gap-2">
                <CheckCircleIcon className="text-green-500" />
                <Typography>Eliminates contamination risk</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className="flex items-center gap-2">
                <CheckCircleIcon className="text-green-500" />
                <Typography>Ensures batch consistency</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className="flex items-center gap-2">
                <CheckCircleIcon className="text-green-500" />
                <Typography>Reduces labor requirements by 45%</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className="flex items-center gap-2">
                <CheckCircleIcon className="text-green-500" />
                <Typography>Full compliance with regulations</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box className="flex justify-end">
            <Button
              variant="contained"
              href="#contact"
              className="bg-green-700 hover:bg-green-800"
              onClick={() => setWorkflowModalOpen(false)}
            >
              Request a Demo
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );

  // Render Team Section
  const renderTeam = () => (
    <Box id="team" className="py-20 bg-gray-900">
      <Container>
        <Typography
          variant="h2"
          className={`text-3xl font-bold mb-4 relative ${
            isTablet ? 'text-center after:left-1/2 after:-translate-x-1/2' : ''
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
          Our Team
        </Typography>
        <Typography
          variant="subtitle1"
          className={`text-xl text-gray-400 mb-12 max-w-3xl ${
            isTablet ? 'text-center mx-auto' : ''
          }`}
        >
          Meet the experts behind Quantum Robotics' revolutionary technology.
        </Typography>

        <Grid container spacing={4}>
          {/* Team Member 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-gray-800 h-full transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl overflow-hidden">
              <Box className="relative h-80">
                <CardMedia
                  component="img"
                  image={getPlaceholderImage(400, 500)}
                  alt="Sarah Chen"
                  className="h-full w-full object-cover transition-transform duration-300"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Box
                  className="absolute inset-0 bg-green-800 bg-opacity-80 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  sx={{
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <IconButton className="bg-gray-900 text-white hover:bg-green-700 hover:transform-gpu hover:translate-y-(-3px) transition-all">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton className="bg-gray-900 text-white hover:bg-green-700 hover:transform-gpu hover:translate-y-(-3px) transition-all">
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Box>
              <CardContent className="p-6">
                <Typography variant="h6" className="font-semibold mb-1">
                  Sarah Chen
                </Typography>
                <Typography variant="subtitle2" className="text-green-500 mb-3">
                  Chief Executive Officer
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Former robotics engineer with 15+ years experience in
                  industrial automation. Led multiple successful startups in the
                  manufacturing technology space.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Team Member 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-gray-800 h-full transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl overflow-hidden">
              <Box className="relative h-80">
                <CardMedia
                  component="img"
                  image={getPlaceholderImage(400, 500)}
                  alt="Marcus Johnson"
                  className="h-full w-full object-cover transition-transform duration-300"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Box
                  className="absolute inset-0 bg-green-800 bg-opacity-80 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  sx={{
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <IconButton className="bg-gray-900 text-white hover:bg-green-700 hover:transform-gpu hover:translate-y-(-3px) transition-all">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton className="bg-gray-900 text-white hover:bg-green-700 hover:transform-gpu hover:translate-y-(-3px) transition-all">
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </Box>
              <CardContent className="p-6">
                <Typography variant="h6" className="font-semibold mb-1">
                  Marcus Johnson
                </Typography>
                <Typography variant="subtitle2" className="text-green-500 mb-3">
                  Chief Technology Officer
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  AI and robotics Ph.D. with background in developing learning
                  algorithms for complex robotic systems. Previously led R&D at
                  Boston Dynamics.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Team Member 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-gray-800 h-full transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl overflow-hidden">
              <Box className="relative h-80">
                <CardMedia
                  component="img"
                  image={getPlaceholderImage(400, 500)}
                  alt="Aisha Patel"
                  className="h-full w-full object-cover transition-transform duration-300"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Box
                  className="absolute inset-0 bg-green-800 bg-opacity-80 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  sx={{
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <IconButton className="bg-gray-900 text-white hover:bg-green-700 hover:transform-gpu hover:translate-y-(-3px) transition-all">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton className="bg-gray-900 text-white hover:bg-green-700 hover:transform-gpu hover:translate-y-(-3px) transition-all">
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Box>
              <CardContent className="p-6">
                <Typography variant="h6" className="font-semibold mb-1">
                  Aisha Patel
                </Typography>
                <Typography variant="subtitle2" className="text-green-500 mb-3">
                  VP of Operations
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Operations expert specializing in supply chain optimization
                  and manufacturing efficiency. Transformed operations at
                  multiple Fortune 500 companies.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Team Member 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-gray-800 h-full transition-transform duration-300 hover:translate-y-(-10px) hover:shadow-xl overflow-hidden">
              <Box className="relative h-80">
                <CardMedia
                  component="img"
                  image={getPlaceholderImage(400, 500)}
                  alt="Carlos Rodriguez"
                  className="h-full w-full object-cover transition-transform duration-300"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Box
                  className="absolute inset-0 bg-green-800 bg-opacity-80 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  sx={{
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <IconButton className="bg-gray-900 text-white hover:bg-green-700 hover:transform-gpu hover:translate-y-(-3px) transition-all">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton className="bg-gray-900 text-white hover:bg-green-700 hover:transform-gpu hover:translate-y-(-3px) transition-all">
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Box>
              <CardContent className="p-6">
                <Typography variant="h6" className="font-semibold mb-1">
                  Carlos Rodriguez
                </Typography>
                <Typography variant="subtitle2" className="text-green-500 mb-3">
                  Chief Design Officer
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Award-winning industrial designer focused on creating
                  intuitive, human-centered robotic systems that seamlessly
                  integrate into existing workflows.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Render Contact Section
  const renderContact = () => (
    <Box id="contact" className="py-20 bg-gray-800">
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h2"
              className={`text-3xl font-bold mb-4 relative ${
                isTablet
                  ? 'text-center after:left-1/2 after:-translate-x-1/2'
                  : ''
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
              Contact Quantum
            </Typography>
            <Typography
              variant="body1"
              className={`text-gray-400 mt-8 mb-6 ${
                isTablet ? 'text-center' : ''
              }`}
            >
              Join our{' '}
              <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded ml-2 animate-pulse">
                FREE
              </span>{' '}
              pilot program to be among the first to implement our cutting-edge
              robotics solutions in your operations. Our pilot program provides
              hands-on experience with our technology along with dedicated
              implementation support and custom configuration.
            </Typography>
            <Typography
              variant="body1"
              className={`text-gray-400 mb-6 ${isTablet ? 'text-center' : ''}`}
            >
              Fill out the form to schedule a personalized demo tailored to your
              industry needs.
            </Typography>

            <Box
              className={`bg-gray-700 rounded-md inline-flex overflow-hidden mb-8 ${
                isTablet ? 'mx-auto' : ''
              }`}
            >
              <Button
                className={`px-4 py-2 ${
                  contactFormType === 'comprehensive'
                    ? 'bg-green-700 text-white'
                    : 'text-gray-400'
                }`}
                onClick={() => setContactFormType('comprehensive')}
              >
                Pilot Program Sign Up
              </Button>
              <Button
                className={`px-4 py-2 ${
                  contactFormType === 'quick'
                    ? 'bg-green-700 text-white'
                    : 'text-gray-400'
                }`}
                onClick={() => setContactFormType('quick')}
              >
                General Inquiries
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card className="bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                {contactFormType === 'quick' ? (
                  // General Inquiries Form
                  <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          label="Full Name*"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          variant="outlined"
                          fullWidth
                          required
                          InputProps={{
                            className: 'bg-gray-800 rounded-md',
                          }}
                          InputLabelProps={{
                            className: 'text-gray-400',
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.23)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#3c5a1e',
                              },
                            },
                            '& .MuiInputBase-input': {
                              color: 'white',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Email Address*"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          variant="outlined"
                          fullWidth
                          required
                          InputProps={{
                            className: 'bg-gray-800 rounded-md',
                          }}
                          InputLabelProps={{
                            className: 'text-gray-400',
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.23)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#3c5a1e',
                              },
                            },
                            '& .MuiInputBase-input': {
                              color: 'white',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Company Name"
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          variant="outlined"
                          fullWidth
                          InputProps={{
                            className: 'bg-gray-800 rounded-md',
                          }}
                          InputLabelProps={{
                            className: 'text-gray-400',
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.23)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#3c5a1e',
                              },
                            },
                            '& .MuiInputBase-input': {
                              color: 'white',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Message*"
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={4}
                          required
                          InputProps={{
                            className: 'bg-gray-800 rounded-md',
                          }}
                          InputLabelProps={{
                            className: 'text-gray-400',
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.23)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#3c5a1e',
                              },
                            },
                            '& .MuiInputBase-input': {
                              color: 'white',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="consent"
                              checked={formData.consent}
                              onChange={handleFormChange}
                              required
                              sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                '&.Mui-checked': {
                                  color: '#3c5a1e',
                                },
                              }}
                            />
                          }
                          label={
                            <Typography
                              variant="body2"
                              className="text-gray-400"
                            >
                              I consent to Quantum Robotics processing my data
                              and contacting me about their products and
                              services.*
                            </Typography>
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          className="py-3 bg-green-700 hover:bg-green-800"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                ) : (
                  // Pilot Program Form (Multi-step)
                  <form onSubmit={handleFormSubmit}>
                    <Stepper activeStep={contactStep} className="mb-8">
                      <Step>
                        <StepLabel>Your Info</StepLabel>
                      </Step>
                      <Step>
                        <StepLabel>Current Setup</StepLabel>
                      </Step>
                      <Step>
                        <StepLabel>Challenges</StepLabel>
                      </Step>
                      <Step>
                        <StepLabel>Desired Outcomes</StepLabel>
                      </Step>
                    </Stepper>

                    {/* Step 1: Basic Information */}
                    {contactStep === 0 && (
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            label="Full Name*"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                              className: 'bg-gray-800 rounded-md',
                            }}
                            InputLabelProps={{
                              className: 'text-gray-400',
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.23)',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#3c5a1e',
                                },
                              },
                              '& .MuiInputBase-input': {
                                color: 'white',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Email Address*"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                              className: 'bg-gray-800 rounded-md',
                            }}
                            InputLabelProps={{
                              className: 'text-gray-400',
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.23)',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#3c5a1e',
                                },
                              },
                              '& .MuiInputBase-input': {
                                color: 'white',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Company Name*"
                            name="company"
                            value={formData.company}
                            onChange={handleFormChange}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                              className: 'bg-gray-800 rounded-md',
                            }}
                            InputLabelProps={{
                              className: 'text-gray-400',
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.23)',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#3c5a1e',
                                },
                              },
                              '& .MuiInputBase-input': {
                                color: 'white',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel className="text-gray-400">
                              Industry*
                            </InputLabel>
                            <Select
                              label="Industry*"
                              name="industry"
                              value={formData.industry}
                              onChange={handleFormChange}
                              required
                              className="bg-gray-800 rounded-md text-white"
                              sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'rgba(255, 255, 255, 0.23)',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'rgba(255, 255, 255, 0.5)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline':
                                  {
                                    borderColor: '#3c5a1e',
                                  },
                                '& .MuiSvgIcon-root': {
                                  color: 'white',
                                },
                              }}
                            >
                              <MenuItem value="">Select your industry</MenuItem>
                              <MenuItem value="manufacturing">
                                Manufacturing
                              </MenuItem>
                              <MenuItem value="food">Food & Beverage</MenuItem>
                              <MenuItem value="pharma">Pharmaceutical</MenuItem>
                              <MenuItem value="logistics">
                                Logistics & Distribution
                              </MenuItem>
                              <MenuItem value="retail">Retail</MenuItem>
                              <MenuItem value="agriculture">
                                Agriculture
                              </MenuItem>
                              <MenuItem value="healthcare">Healthcare</MenuItem>
                              <MenuItem value="energy">
                                Renewable Energy
                              </MenuItem>
                              <MenuItem value="construction">
                                Construction
                              </MenuItem>
                              <MenuItem value="other">Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} className="flex justify-end">
                          <Button
                            variant="contained"
                            onClick={() => setContactStep(1)}
                            className="px-6 py-2 bg-green-700 hover:bg-green-800"
                          >
                            Next: Current Setup
                          </Button>
                        </Grid>
                      </Grid>
                    )}

                    {/* For brevity, only showing first step. In a real app, you'd implement other steps similarly */}
                    {contactStep > 0 && contactStep < 3 && (
                      <Box className="text-center py-8">
                        <Typography variant="body1" className="mb-4">
                          Additional form steps would appear here in a real
                          application.
                        </Typography>
                        <Box className="flex justify-between">
                          <Button
                            variant="outlined"
                            onClick={() => setContactStep(contactStep - 1)}
                            className="px-6 py-2 border-gray-400 text-gray-200"
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            onClick={() => setContactStep(contactStep + 1)}
                            className="px-6 py-2 bg-green-700 hover:bg-green-800"
                          >
                            Next Step
                          </Button>
                        </Box>
                      </Box>
                    )}

                    {/* Final Step */}
                    {contactStep === 3 && (
                      <Box className="py-4">
                        <Typography variant="h6" className="mb-4">
                          Ready to submit your application for the pilot
                          program?
                        </Typography>
                        <Typography
                          variant="body1"
                          className="mb-6 text-gray-400"
                        >
                          Our team will review your information and contact you
                          within 2 business days to discuss the next steps in
                          your robotics journey.
                        </Typography>

                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="consent"
                                  checked={formData.consent}
                                  onChange={handleFormChange}
                                  required
                                  sx={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    '&.Mui-checked': {
                                      color: '#3c5a1e',
                                    },
                                  }}
                                />
                              }
                              label={
                                <Typography
                                  variant="body2"
                                  className="text-gray-400"
                                >
                                  I consent to Quantum Robotics processing my
                                  data and contacting me about their products
                                  and services.*
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item xs={12} className="flex justify-between">
                            <Button
                              variant="outlined"
                              onClick={() => setContactStep(2)}
                              className="px-6 py-2 border-gray-400 text-gray-200"
                            >
                              Back
                            </Button>
                            <Button
                              type="submit"
                              variant="contained"
                              className="px-6 py-2 bg-green-700 hover:bg-green-800"
                            >
                              Submit Application
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Main app component
  return (
    <Box className="bg-gray-900 text-white min-h-screen">
      <Box component="main">
        <Home></Home>

        {/* Products Section */}
        {renderProducts()}

        {/* Qortex OS Section */}
        {renderQortexOS()}

        {/* Use Cases Section */}
        {renderUseCases()}

        {/* Team Section */}
        {renderTeam()}

        {/* Contact Section */}
        {renderContact()}
      </Box>

      {/* Footer */}
      <Footer />

      {/* Workflow Modal */}
      {renderWorkflowModal()}

      {/* Toast Notification */}
      <Snackbar
        open={formSubmitted}
        autoHideDuration={3000}
        onClose={() => setFormSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success" sx={{ width: '100%', bgcolor: '#3c5a1e' }}>
          Request submitted! We'll reach out soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;

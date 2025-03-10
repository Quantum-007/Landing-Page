'use client';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import ProductCard from '../atoms/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Grid, Container, Typography } from '@mui/material';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const productImages = [
  '/assets/home/our_products/Slide-1.svg',
  '/assets/home/our_products/Slide-2.svg',
  '/assets/home/our_products/Slide-3.svg',
  '/assets/home/our_products/Slide-4.svg',
  '/assets/home/our_products/Slide-5.svg',
];

const INDUSTRY_DATA = [
  {
    id: 'quantum-flex',
    title: 'QuantumFlex™',
    robotType: '6-Axis Articulated Robot',
    description:
      'Versatile 6-axis articulated robot for complex manufacturing, welding, and material handling tasks.',
    metrics: [
      { value: '210kg', label: 'Payload' },
      { value: '2.8m', label: 'Reach' },
      { value: '±0.08mm', label: 'Precision' },
      { value: '180°/s', label: 'Speed' },
    ],
    painPoints: ['Flexible Mounting', 'Heavy Payload', 'Path Planning'],
  },
  {
    id: 'quantum-co',
    title: 'QuantumCo™',
    robotType: 'Collaborative Robot',
    description:
      'Advanced collaborative robot designed to work alongside human operators in mixed manufacturing environments.',
    metrics: [
      { value: '35kg', label: 'Payload' },
      { value: '1.7m', label: 'Reach' },
      { value: '±0.03mm', label: 'Precision' },
      { value: '120°/s', label: 'Speed' },
    ],
    painPoints: ['Force Sensing', 'Multi-Tool Support', 'Adaptive Learning'],
  },
  {
    id: 'quantum-delta',
    title: 'QuantumDelta™',
    robotType: 'Delta Robot',
    description:
      'High-speed picking and placing robot optimized for food, pharmaceutical, and small component assembly.',
    metrics: [
      { value: '8kg', label: 'Payload' },
      { value: '1.2m', label: 'Workspace' },
      { value: '±0.02mm', label: 'Precision' },
      { value: '200/min', label: 'Cycle Rate' },
    ],
    painPoints: ['High-Speed', 'Precision Control', 'Washdown Ready'],
  },
  {
    id: 'quantum-swift',
    title: 'QuantumSwift™',
    robotType: 'SCARA Robot',
    description:
      'Selective Compliance Articulated Robot Arm designed for precise assembly and handling operations.',
    metrics: [
      { value: '20kg', label: 'Payload' },
      { value: '850mm', label: 'Reach' },
      { value: '±0.01mm', label: 'Precision' },
      { value: '7m/s', label: 'Speed' },
    ],
    painPoints: ['Compact Design', 'High Throughput', 'IoT Enabled'],
  },
  {
    id: 'quantum-mover',
    title: 'QuantumMover™',
    robotType: 'Autonomous Mobile Robot',
    description:
      'Self-navigating mobile robot for material transport across factory floors, warehouses, and distribution centers.',
    metrics: [
      { value: '1500kg', label: 'Payload' },
      { value: '2.0m/s', label: 'Speed' },
      { value: '±10mm', label: 'Navigation' },
      { value: '10hrs', label: 'Runtime' },
    ],
    painPoints: [
      'Dynamic Navigation',
      'Fleet Management',
      'Obstacle Avoidance',
    ],
  },
  {
    id: 'quantum-aero',
    title: 'QuantumAero™',
    robotType: 'Drone/UAV',
    description:
      'Autonomous aerial system for inventory management, inspection, and light cargo transport.',
    metrics: [
      { value: '5kg', label: 'Payload' },
      { value: '45min', label: 'Flight Time' },
      { value: '10km', label: 'Range' },
      { value: '±5cm', label: 'Positioning' },
    ],
    painPoints: [
      'Indoor Navigation',
      'Computer Vision',
      'Extended Flight Time',
    ],
  },
];

const OurProducts = () => {
  return (
    <Box
      id="products"
      className="py-20 overflow-hidden"
      sx={{ backgroundColor: '#1e1e1e' }}
    >
      <Container>
        <Typography
          variant="h4"
          fontWeight="600"
          className="text-3xl text-start font-bold pb-1 text-white relative inline-block"
          sx={{
            '&::after': {
              content: '""',
              position: 'absolute',
              left: '50%',
              bottom: '-5px',
              width: '100%',
              height: '4px',
              backgroundColor: '#3c5a1e',
              transform: 'translateX(-50%)',
            },
          }}
        >
          Our Products
        </Typography>

        <Typography
          variant="body1"
          className="py-5"
          sx={{ maxWidth: 'xl', color: '#b0b0b0', fontSize: '1.2rem' }}
        >
          Discover our range of core robotics platforms designed for specific
          industrial applications.
        </Typography>

        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={10}
          effect="coverflow"
          navigation={false}
          centeredSlides={true}
          className="swiper-container"
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <Image
                  src={image}
                  width={700}
                  height={400}
                  priority={index === 2}
                  alt={`Product ${index + 1}`}
                  className="object-fit rounded-xl shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-pagination-bullet {
            background: white !important;
            opacity: 0.5;
            width: 12px;
            height: 12px;
            margin: 0 6px;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: #3c5a1e !important;
            opacity: 1;
            transform: scale(1.2);
          }
        `}</style>

        <Grid container spacing={4} paddingTop={4}>
          {INDUSTRY_DATA.map((industry) => (
            <ProductCard key={industry.id} industry={industry} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurProducts;

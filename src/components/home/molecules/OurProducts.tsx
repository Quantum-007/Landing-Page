'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay'; // Import Autoplay CSS

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Typography } from '@mui/material';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay

const productImages = [
  '/assets/home/our_products/Slide-1.svg',
  '/assets/home/our_products/Slide-2.svg',
  '/assets/home/our_products/Slide-3.svg',
  '/assets/home/our_products/Slide-4.svg',
  '/assets/home/our_products/Slide-5.svg',
];

const OurProducts = () => {
  return (
    <Box
      id="our-products"
      className="py-20 overflow-hidden"
      sx={{ backgroundColor: '#1e1e1e' }}
    >
      <Container>
        <Typography
          variant="h4"
          fontWeight="600"
          className="text-3xl text-start font-bold pb-2 text-white relative"
          sx={{
            position: 'relative',
            '&::after': {
              left: '10%',
              content: '""',
              height: '4px',
              width: '220px',
              bottom: '-10px',
              position: 'absolute',
              transform: 'translateX(-50%)',
              backgroundColor: '#3c5a1e',
            },
          }}
        >
          Our Products
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
      </Container>
    </Box>
  );
};

export default OurProducts;

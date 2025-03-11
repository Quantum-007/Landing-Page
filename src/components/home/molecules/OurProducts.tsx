'use client';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import ProductCard from '../atoms/ProductCard';
import ComparisonTable from '../atoms/ComparisionTable';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Grid, Container, Typography } from '@mui/material';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { INDUSTRY_DATA, PRODUCT_IMAGES } from '@/utils/home/our_products/data';

const OurProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const filteredProducts = INDUSTRY_DATA.filter((product) =>
    selectedProducts.includes(product.id),
  );
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
          {PRODUCT_IMAGES.map((image, index) => (
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
            <ProductCard
              key={industry.id}
              industry={industry}
              setSelectedProducts={setSelectedProducts}
              selectedProducts={selectedProducts}
            />
          ))}
        </Grid>
        {selectedProducts.length > 0 && (
          <ComparisonTable products={filteredProducts} />
        )}
      </Container>
    </Box>
  );
};

export default OurProducts;

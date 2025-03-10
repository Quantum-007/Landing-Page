'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import HomeLoader from './molecules/HomeLoader';
import CoreAdvantages from '../home/molecules/CoreAdvantages';
import VisionAndMission from '../home/molecules/VisionAndMission';
import IndustrialAutomation from '../home/molecules/IndustrialAutomation';

import { Box } from '@mui/material';

// Dynamic imports with individual fallbacks
const OurProducts = dynamic(() => import('../home/molecules/OurProducts'), {
  ssr: false,
  loading: HomeLoader,
});

const QortexOS = dynamic(() => import('../home/molecules/QortexOs'), {
  ssr: false,
  loading: HomeLoader,
});

const UseCases = dynamic(() => import('../home/molecules/UseCases'), {
  ssr: false,
  loading: HomeLoader,
});

const LatestInsights = dynamic(
  () => import('../home/molecules/LatestInsights'),
  {
    ssr: false,
    loading: HomeLoader,
  },
);

const OurTeam = dynamic(() => import('../home/molecules/OurTeam'), {
  ssr: false,
  loading: HomeLoader,
});

const Contact = dynamic(() => import('../home/molecules/Contact'), {
  ssr: false,
  loading: HomeLoader,
});

const Home = () => {
  return (
    <Box className="flex flex-col bg-[#121212] min-h-screen">
      <IndustrialAutomation />
      <VisionAndMission />
      <CoreAdvantages />

      <OurProducts />
      <QortexOS />
      <UseCases />
      <LatestInsights />
      <OurTeam />
      <Contact />
    </Box>
  );
};

export default Home;

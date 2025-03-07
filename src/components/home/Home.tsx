'use client';

import dynamic from 'next/dynamic';
import VisionAndMission from '../home/molecules/VisionAndMission';
import IndustrialAutomation from '../home/molecules/IndustrialAutomation';

import React, { Suspense } from 'react';

import { Box } from '@mui/material';

const CoreAdvantages = dynamic(
  () => import('../home/molecules/CoreAdvantages'),
  {
    ssr: false,
  },
);

const OurProducts = dynamic(() => import('../home/molecules/OurProducts'), {
  ssr: false,
});

const QortexOS = dynamic(() => import('../home/molecules/QortexOs'), {
  ssr: false,
});

const UseCases = dynamic(() => import('../home/molecules/UseCases'), {
  ssr: false,
});

const LatestInsights = dynamic(
  () => import('../home/molecules/LatestInsights'),
  {
    ssr: false,
  },
);

const OurTeam = dynamic(() => import('../home/molecules/OurTeam'), {
  ssr: false,
});

const Contact = dynamic(() => import('../home/molecules/Contact'), {
  ssr: false,
});

const Home = () => {
  return (
    <Box className="flex flex-col bg-white min-h-screen">
      <IndustrialAutomation />
      <VisionAndMission />

      <Suspense fallback={<div>Loading...</div>}>
        <CoreAdvantages />
        <OurProducts />
        <QortexOS />
        <UseCases />
        <LatestInsights />
        <OurTeam />
        <Contact />
      </Suspense>
    </Box>
  );
};

export default Home;

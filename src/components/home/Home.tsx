'use client';

import dynamic from 'next/dynamic';

import React, { Suspense } from 'react';

import { Box } from '@mui/material';

const IndustrialAutomation = dynamic(
  () => import('../home/molecules/IndustrialAutomation'),
  {
    loading: () => <div>Loading Industrial Automation...</div>,
    ssr: false,
  },
);

const Vision = dynamic(() => import('../home/molecules/VisionAndMission'), {
  loading: () => <div>Loading vision...</div>,
  ssr: false,
});

const CoreAdvantages = dynamic(
  () => import('../home/molecules/CoreAdvantages'),
  {
    loading: () => <div>Loading Core Advantages...</div>,
    ssr: false,
  },
);

const QortexOS = dynamic(() => import('../home/molecules/QortexOs'), {
  loading: () => <div>Loading Core Advantages...</div>,
  ssr: false,
});

const UseCases = dynamic(() => import('../home/molecules/UseCases'), {
  loading: () => <div>Loading Core Advantages...</div>,
  ssr: false,
});

const OurTeam = dynamic(() => import('../home/molecules/OurTeam'), {
  loading: () => <div>Loading Core Advantages...</div>,
  ssr: false,
});

const Contact = dynamic(() => import('../home/molecules/Contact'), {
  loading: () => <div>Loading Core Advantages...</div>,
  ssr: false,
});

const Home = () => {
  return (
    <Box className="flex flex-col bg-white min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <IndustrialAutomation />
        <Vision />
        <CoreAdvantages />
        <QortexOS />
        <UseCases />
        <OurTeam />
        <Contact />
      </Suspense>
    </Box>
  );
};

export default Home;

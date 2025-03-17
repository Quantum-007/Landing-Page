'use client';

import React, { useEffect, useState } from 'react';
import { Admin, Resource, defaultTheme } from 'react-admin';
import { dataProvider } from '../../lib/dataProvider';
import { PilotProgramResource } from './resources/pilotProgram';
import { GeneralInquiryResource } from './resources/generalInquery';
import { CustomerPilotProgramResource } from './resources/customerPilotProgram';
import { createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const quantumColors = {
  primary: '#3c8a2e',
  secondary: '#2c7031',
  tertiary: '#4aad39',
  hover: '#5bc74a',
  background: '#ffffff',
  foreground: '#0a0a0a',
  darkBackground: '#0a0a0a',
  darkForeground: '#ededed',
};

const Loader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      gap: 2,
      backgroundColor: quantumColors.background
    }}
  >
    <CircularProgress size={60} thickness={4} sx={{ color: quantumColors.primary }} />
    <div style={{ color: quantumColors.foreground, fontWeight: 500 }}>
      Loading Quantum Robotics Admin Panel...
    </div>
  </Box>
);

const theme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: quantumColors.primary,
      light: quantumColors.tertiary,
      dark: quantumColors.secondary,
      contrastText: '#ffffff',
    },
    secondary: {
      main: quantumColors.tertiary,
      light: quantumColors.hover,
      dark: quantumColors.secondary,
      contrastText: '#ffffff',
    },
    background: {
      default: quantumColors.darkBackground,
      paper: quantumColors.darkBackground,
    },
    text: {
      primary: quantumColors.darkForeground,
      secondary: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: 'var(--font-manrope), Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: quantumColors.secondary,
          color: '#ffffff',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: quantumColors.darkBackground,
          color: quantumColors.darkForeground,
          borderRight: '1px solid #424242',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          fontWeight: 500,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: quantumColors.hover,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          backgroundColor: '#424242',
          color: '#ffffff',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: `${quantumColors.tertiary}20`,
            '&:hover': {
              backgroundColor: `${quantumColors.tertiary}30`,
            },
          },
        },
      },
    },
  },
});


const AdminPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loader />;
  }

  return (
    <Admin
      dataProvider={dataProvider}
      theme={theme}
      loading={Loader}
      disableTelemetry
    >
      <Resource
        name="generalInquery"
        list={GeneralInquiryResource.List}
        create={GeneralInquiryResource.Create}
        edit={GeneralInquiryResource.Edit}
        options={{ label: 'General Inquiries' }}
      />
      <Resource
        name="businessPilotProgram"
        list={PilotProgramResource.List}
        create={PilotProgramResource.Create}
        edit={PilotProgramResource.Edit}
        show={PilotProgramResource.Show}
        options={{ label: 'Business Pilot Programs' }}
      />
      <Resource
        name="customerPilotProgram"
        list={CustomerPilotProgramResource.List}
        create={CustomerPilotProgramResource.Create}
        edit={CustomerPilotProgramResource.Edit}
        options={{ label: 'Customer Pilot Programs' }}
      />
    </Admin>
  );
};

export default AdminPage;

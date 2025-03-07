'use client';

import MenuIcon from '@mui/icons-material/Menu';

import { useState, useEffect } from 'react';
import {
  Box,
  List,
  Button,
  AppBar,
  Drawer,
  Toolbar,
  ListItem,
  Container,
  Typography,
  IconButton,
  ListItemText,
  ListItemButton,
} from '@mui/material';

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Qortex OS', href: '#qortex' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Blog', href: '#blog' },
  { label: 'Team', href: '#team' },
  { label: 'Vision', href: '#vision-mission' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      className={`transition-all duration-300 bg-opacity-95 backdrop-blur-md ${
        isScrolled ? 'shadow-md' : 'border-b border-[#3a3a3a]'
      }`}
      sx={{
        zIndex: 1000,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(18, 18, 18, 0.95)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar className="flex justify-center items-center p-4 gap-8">
          <Typography
            href="#"
            variant="h5"
            component="a"
            className="flex items-center"
            style={{ fontWeight: 'bold', color: 'white' }}
          >
            Quantum
            <span style={{ color: '#5a7d2f' }}>Robotics</span>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="gap-4">
            {navItems.map((item) => (
              <Button
                color="inherit"
                key={item.label}
                href={item.href}
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  textTransform: 'none',
                  color: 'white',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.3s ease-in-out',
                  },
                  '&:hover::after': {
                    backgroundColor: 'var(--accent-hover)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              href="#contact"
              variant="contained"
              sx={{
                bgcolor: '#3c5a1e',
                fontWeight: 'bold',
                '&:hover': { bgcolor: 'var(--accent-hover)' },
              }}
            >
              Join Pilot Program *
            </Button>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileNavOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      >
        <List className="w-64 bg-gray-900 h-full text-white">
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;

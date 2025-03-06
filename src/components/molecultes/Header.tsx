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
        isScrolled ? 'shadow-md' : 'border-b border-gray-700'
      }`}
      sx={{
        zIndex: 1000,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(18, 18, 18, 0.95)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between p-6">
          <Typography
            href="#"
            variant="h6"
            component="a"
            className="flex items-center font-bold text-xl text-white"
          >
            Quantum
            <span style={{ color: 'var(--accent-primary)' }}>Robotics</span>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="gap-8">
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" href={item.href}>
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="contained"
              href="#contact"
              sx={{
                bgcolor: 'var(--accent-primary)',
                '&:hover': { bgcolor: 'var(--accent-hover)' },
                fontWeight: 'bold',
              }}
              className="py-8 px-16"
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

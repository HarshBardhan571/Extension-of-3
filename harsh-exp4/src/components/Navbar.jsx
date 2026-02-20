// ── Navbar.jsx ── uses useAppContext (Exp 4: useContext) ──────────────────
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Box, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppContext } from '../context/AppContext';

const navLinks = [
  { label: 'Home',      to: '/' },
  { label: 'Projects',  to: '/projects' },
  { label: 'Contact',   to: '/contact' },
  { label: 'Analytics', to: '/analytics' },
];

export default function Navbar() {
  const { darkMode, setDarkMode, userProfile } = useAppContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const bg    = darkMode ? '#0d0a14' : '#faf7ff';
  const text  = darkMode ? '#f0eaff' : '#1a0f2e';
  const muted = darkMode ? '#9e90c0' : '#6b5a8a';

  return (
    <>
      <AppBar position="fixed" elevation={0}
        sx={{ background: bg, borderBottom: `1px solid ${darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`, backdropFilter: 'blur(16px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 } }}>

          {/* Brand */}
          <Typography variant="h6" component={NavLink} to="/"
            sx={{ textDecoration: 'none', fontFamily: "'Playfair Display', serif", fontWeight: 900, color: text, letterSpacing: '-0.01em' }}>
            <Box component="span" sx={{ color: '#f5c842' }}>H</Box>arsh
            <Box component="span" sx={{ color: '#c084fc', fontSize: '1.4rem' }}>.</Box>
          </Typography>

          {/* Desktop nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {navLinks.map(link => (
                <Button key={link.to} component={NavLink} to={link.to}
                  sx={{
                    color: muted, fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', textTransform: 'capitalize', borderRadius: '8px',
                    '&.active': { color: '#f5c842', fontWeight: 600 },
                    '&:hover': { color: text, background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)' }
                  }}>
                  {link.label}
                </Button>
              ))}
              <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ ml: 1, color: muted, border: `1px solid ${darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`, borderRadius: '50%', width: 36, height: 36 }}>
                {darkMode ? <LightModeIcon sx={{ fontSize: 18 }} /> : <DarkModeIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </Box>
          )}

          {/* Mobile menu */}
          {isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ color: muted }}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: muted }}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { background: bg, width: 220, pt: 2 } }}>
        <List>
          {navLinks.map(link => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton component={NavLink} to={link.to} onClick={() => setDrawerOpen(false)}
                sx={{ '&.active .MuiListItemText-primary': { color: '#f5c842', fontWeight: 600 } }}>
                <ListItemText primary={link.label} sx={{ '.MuiListItemText-primary': { color: text, fontFamily: 'Inter, sans-serif' } }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

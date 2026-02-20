import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAppContext } from '../context/AppContext';

export default function Footer() {
  const { darkMode, userProfile } = useAppContext();
  const bg   = darkMode ? '#0a0714' : '#f3eeff';
  const text = darkMode ? '#9e90c0' : '#6b5a8a';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  return (
    <Box component="footer" sx={{ background: bg, borderTop: `1px solid ${border}`, py: 3, px: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
      <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: text, fontSize: '0.95rem' }}>
        <Box component="span" sx={{ color: '#f5c842' }}>H</Box>arsh Bardhan Singh
      </Typography>
      <Typography sx={{ color: text, fontSize: '0.78rem' }}>
        B.Tech AI & ML · Telangana, India
      </Typography>
      <Typography sx={{ color: text, fontSize: '0.78rem' }}>
        © {new Date().getFullYear()} · Built with React + MUI
      </Typography>
    </Box>
  );
}

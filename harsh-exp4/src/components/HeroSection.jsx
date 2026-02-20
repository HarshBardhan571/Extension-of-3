import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Chip, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const roles = ['AI/ML Developer', 'Data Scientist', 'React Developer', 'Problem Solver'];

export default function HeroSection() {
  const { darkMode, userProfile } = useAppContext();
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const text  = darkMode ? '#f0eaff' : '#1a0f2e';
  const muted = darkMode ? '#9e90c0' : '#6b5a8a';
  const surf  = darkMode ? '#1e1830' : '#ffffff';
  const bord  = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <Box sx={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', px: { xs: 3, md: 10 }, gap: 4, pt: '64px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid bg */}
      <Box sx={{
        position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none',
        backgroundImage: `linear-gradient(${bord} 1px, transparent 1px), linear-gradient(90deg, ${bord} 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      {/* Orbs */}
      <Box sx={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: '#8b5cf6', filter: 'blur(120px)', opacity: 0.12, top: -100, right: -80, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: '#f5c842', filter: 'blur(100px)', opacity: 0.1, bottom: -50, left: 200, pointerEvents: 'none' }} />

      {/* Left content */}
      <Box sx={{ flex: 1, maxWidth: 600, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-30px)', transition: 'all 0.9s ease', position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'inline-block', background: surf, border: `1px solid ${bord}`, color: muted, px: 2, py: 0.6, borderRadius: '50px', fontSize: '0.8rem', mb: 3 }}>
          👋 Welcome to my portfolio
        </Box>

        <Typography variant="h1" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: { xs: '2.8rem', md: '4.2rem' }, lineHeight: 1.05, color: text, letterSpacing: '-0.02em', mb: 2 }}>
          Harsh <br />
          <Box component="span" sx={{ color: '#f5c842' }}>Bardhan</Box> Singh
        </Typography>

        <Box sx={{ fontSize: '1.05rem', color: muted, mb: 2, height: 28 }}>
          I'm a{' '}
          <Box component="span" key={roleIdx} sx={{ color: '#c084fc', fontWeight: 600, display: 'inline-block',
            animation: 'fadeUp 0.4s ease',
            '@keyframes fadeUp': { from: { opacity: 0, transform: 'translateY(6px)' }, to: { opacity: 1, transform: 'none' } }
          }}>
            {roles[roleIdx]}
          </Box>
        </Box>

        <Typography sx={{ color: muted, lineHeight: 1.75, mb: 3, maxWidth: 480, fontSize: '0.97rem' }}>
          Passionate about building intelligent systems and intuitive web experiences.
          I turn complex problems into elegant, data-driven solutions.
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 4, gap: 1 }}>
          {['B.Tech AI & ML', 'React', 'Python', 'Machine Learning'].map(tag => (
            <Chip key={tag} label={tag} size="small"
              sx={{ background: surf, border: `1px solid ${bord}`, color: muted, fontFamily: 'Inter', fontSize: '0.78rem' }} />
          ))}
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => navigate('/projects')}
            sx={{ background: '#f5c842', color: '#0d0a14', fontWeight: 700, borderRadius: '8px', px: 3, textTransform: 'none', fontFamily: 'Inter', '&:hover': { background: '#e6b800', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(245,200,66,0.35)' }, transition: 'all 0.2s' }}>
            View Projects →
          </Button>
          <Button variant="outlined" onClick={() => navigate('/contact')}
            sx={{ borderColor: bord, color: text, borderRadius: '8px', px: 3, textTransform: 'none', fontFamily: 'Inter', '&:hover': { borderColor: '#c084fc', color: '#c084fc', background: 'transparent' } }}>
            Contact Me
          </Button>
        </Stack>
      </Box>

      {/* Floating stat cards */}
      <Box sx={{ position: 'relative', width: 260, height: 300, flexShrink: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)', transition: 'all 0.9s ease 0.3s', display: { xs: 'none', md: 'block' } }}>
        {[
          { num: '5+', lbl: 'Projects', top: 0, left: 0, delay: '0s' },
          { num: '90%', lbl: 'Python', top: 70, right: 0, delay: '0.5s' },
          { num: '3+', lbl: 'Certifications', bottom: 10, left: 30, delay: '1s' },
        ].map((c, i) => (
          <Box key={i} sx={{
            position: 'absolute', background: surf, border: `1px solid ${bord}`, borderRadius: '14px',
            px: 3, py: 2.5, textAlign: 'center', minWidth: 120,
            top: c.top, left: c.left, right: c.right, bottom: c.bottom,
            animation: `float${i} 4s ease-in-out infinite`,
            [`@keyframes float${i}`]: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: `translateY(${-8 - i * 2}px)` } },
          }}>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 900, color: '#f5c842' }}>{c.num}</Typography>
            <Typography sx={{ fontSize: '0.78rem', color: muted }}>{c.lbl}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

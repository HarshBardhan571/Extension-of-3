import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Stack } from '@mui/material';
import { useAppContext } from '../context/AppContext';

export default function CardComponent({ icon, title, description, tags = [], accentColor = '#f5c842' }) {
  const { darkMode } = useAppContext();
  const surf = darkMode ? '#1e1830' : '#ffffff';
  const bord = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const text = darkMode ? '#f0eaff' : '#1a0f2e';
  const muted = darkMode ? '#9e90c0' : '#6b5a8a';

  return (
    <Card sx={{
      background: surf, border: `1px solid ${bord}`, borderRadius: '16px', boxShadow: 'none',
      transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
      '&:hover': { transform: 'translateY(-4px)', borderColor: accentColor, boxShadow: `0 12px 40px rgba(0,0,0,0.2)` },
      height: '100%', display: 'flex', flexDirection: 'column',
    }}>
      <Box sx={{ height: 4, background: accentColor, borderRadius: '16px 16px 0 0' }} />
      <CardContent sx={{ p: 3, flex: 1 }}>
        <Typography sx={{ fontSize: '2rem', mb: 1.5 }}>{icon}</Typography>
        <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: text, mb: 1, fontSize: '1.1rem' }}>
          {title}
        </Typography>
        <Typography sx={{ color: muted, fontSize: '0.88rem', lineHeight: 1.7, mb: 2 }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 0.8 }}>
          {tags.map(tag => (
            <Chip key={tag} label={tag} size="small"
              sx={{ background: darkMode ? '#130f1e' : '#f3eeff', color: muted, fontSize: '0.72rem', fontFamily: 'Inter', border: `1px solid ${bord}` }} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

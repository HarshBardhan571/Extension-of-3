// ── pages/Home.jsx ────────────────────────────────────────────────────────
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';
import { useAppContext } from '../context/AppContext';

const services = [
  { icon: '🧠', title: 'Machine Learning Models', description: 'Design and train predictive models, classification systems, and recommendation engines tailored to your data.', tags: ['Scikit-learn', 'TensorFlow', 'Python'], accent: '#c084fc' },
  { icon: '📈', title: 'Data Analysis & Dashboards', description: 'Transform messy datasets into clear insights with exploratory analysis, visualizations, and interactive dashboards.', tags: ['Pandas', 'Matplotlib', 'Seaborn'], accent: '#f5c842' },
  { icon: '⚛️', title: 'React Web Applications', description: 'Build modern, responsive web apps with clean architecture, smooth UI, and seamless API integrations.', tags: ['React', 'MUI', 'REST API'], accent: '#60a5fa' },
  { icon: '🔗', title: 'AI + Web Integration', description: 'Deploy ML models into production web systems — making your AI accessible, fast, and user-friendly.', tags: ['Flask', 'FastAPI', 'React'], accent: '#34d399' },
];

export default function Home() {
  const { darkMode } = useAppContext();
  const text  = darkMode ? '#f0eaff' : '#1a0f2e';
  const muted = darkMode ? '#9e90c0' : '#6b5a8a';

  return (
    <Box>
      <HeroSection />

      {/* Services section */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 10 }}>
        <Typography sx={{ fontFamily: 'Inter, monospace', fontSize: '0.82rem', color: '#f5c842', letterSpacing: '0.06em', mb: 1.5, fontWeight: 500 }}>
          // what I do
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: text, mb: 1.5, fontSize: { xs: '2rem', md: '2.8rem' }, letterSpacing: '-0.02em' }}>
          My Services
        </Typography>
        <Typography sx={{ color: muted, mb: 5, maxWidth: 560, fontSize: '0.97rem', lineHeight: 1.7 }}>
          I provide data-driven and intelligent solutions — from raw analysis to fully deployed AI web apps.
        </Typography>
        <Grid container spacing={3}>
          {services.map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <CardComponent {...s} accentColor={s.accent} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

// ── pages/Projects.jsx ── (Experiment 3: second page with React Router) ──
import React from 'react';
import { Box, Typography, Grid, Chip, Stack, Button } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const projects = [
  {
    title: 'Sentiment Analysis Engine',
    desc: 'Built an NLP model to classify sentiment in tweets with 87% accuracy using LSTM and BERT fine-tuning.',
    tech: ['Python', 'BERT', 'TensorFlow', 'Flask'],
    status: 'Completed',
    year: '2023',
    color: '#c084fc',
  },
  {
    title: 'Sales Forecasting Dashboard',
    desc: 'Predictive analytics dashboard using time-series models to forecast monthly sales for retail businesses.',
    tech: ['Prophet', 'Pandas', 'Plotly', 'Streamlit'],
    status: 'Completed',
    year: '2024',
    color: '#f5c842',
  },
  {
    title: 'AI Portfolio Website',
    desc: 'Personal portfolio with React + MUI, useContext & useReducer for global state, deployed on Vercel.',
    tech: ['React', 'MUI', 'Vite', 'Vercel'],
    status: 'Live',
    year: '2025',
    color: '#34d399',
  },
  {
    title: 'Image Classifier App',
    desc: 'CNN-based image classifier integrated into a React web app for real-time prediction via REST API.',
    tech: ['CNN', 'FastAPI', 'React', 'OpenCV'],
    status: 'In Progress',
    year: '2025',
    color: '#60a5fa',
  },
  {
    title: 'Movie Recommendation System',
    desc: 'Collaborative filtering model recommending movies based on user ratings and behavior patterns.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Cosine Similarity'],
    status: 'Completed',
    year: '2024',
    color: '#fb923c',
  },
  {
    title: 'Student Performance Predictor',
    desc: 'Regression model to predict student GPA using attendance, assignments, and historical data.',
    tech: ['Linear Regression', 'Pandas', 'Matplotlib'],
    status: 'Completed',
    year: '2023',
    color: '#f472b6',
  },
];

const statusColors = { Completed: '#34d399', Live: '#f5c842', 'In Progress': '#60a5fa' };

export default function Projects() {
  const { darkMode } = useAppContext();
  const text  = darkMode ? '#f0eaff' : '#1a0f2e';
  const muted = darkMode ? '#9e90c0' : '#6b5a8a';
  const surf  = darkMode ? '#1e1830' : '#ffffff';
  const bord  = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  return (
    <Box sx={{ pt: '64px', minHeight: '100vh', px: { xs: 3, md: 10 }, py: 8 }}>
      <Typography sx={{ fontFamily: 'Inter, monospace', fontSize: '0.82rem', color: '#f5c842', letterSpacing: '0.06em', mb: 1.5, fontWeight: 500 }}>
        // my work
      </Typography>
      <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: text, mb: 1.5, fontSize: { xs: '2rem', md: '2.8rem' }, letterSpacing: '-0.02em' }}>
        Projects
      </Typography>
      <Typography sx={{ color: muted, mb: 6, maxWidth: 560, fontSize: '0.97rem', lineHeight: 1.7 }}>
        A selection of projects built across AI/ML, data science, and full-stack web development.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((p, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{
              background: surf, border: `1px solid ${bord}`, borderRadius: '16px',
              p: 3, height: '100%', display: 'flex', flexDirection: 'column',
              transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
              '&:hover': { transform: 'translateY(-4px)', borderColor: p.color, boxShadow: `0 12px 40px rgba(0,0,0,0.2)` },
            }}>
              <Box sx={{ height: 3, background: p.color, borderRadius: '4px', mb: 2.5 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: text, fontSize: '1.05rem', flex: 1, mr: 1 }}>
                  {p.title}
                </Typography>
                <Box>
                  <Chip label={p.status} size="small"
                    sx={{ background: `${statusColors[p.status]}22`, color: statusColors[p.status], fontSize: '0.7rem', fontWeight: 600, border: `1px solid ${statusColors[p.status]}44` }} />
                </Box>
              </Box>
              <Typography sx={{ color: muted, fontSize: '0.85rem', lineHeight: 1.7, mb: 2.5, flex: 1 }}>
                {p.desc}
              </Typography>
              <Stack direction="row" spacing={0.8} flexWrap="wrap" sx={{ gap: 0.8, mb: 2 }}>
                {p.tech.map(t => (
                  <Chip key={t} label={t} size="small"
                    sx={{ background: darkMode ? '#130f1e' : '#f3eeff', color: muted, fontSize: '0.7rem', border: `1px solid ${bord}` }} />
                ))}
              </Stack>
              <Typography sx={{ color: muted, fontSize: '0.75rem' }}>📅 {p.year}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

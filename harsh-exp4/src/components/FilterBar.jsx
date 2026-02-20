import React from 'react';
import { Box, Button } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const CATEGORIES = ['All', 'Programming', 'AI/ML', 'Web', 'Data'];

export default function FilterBar() {
  const { state, dispatch, darkMode } = useAppContext();
  const muted = darkMode ? '#9e90c0' : '#6b5a8a';
  const bord  = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const surf  = darkMode ? '#1e1830' : '#ffffff';

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
      {CATEGORIES.map(cat => (
        <Button key={cat} size="small"
          onClick={() => dispatch({ type: 'SET_FILTER', payload: cat })}
          sx={{
            borderRadius: '50px', textTransform: 'none', fontFamily: 'Inter',
            fontSize: '0.82rem', px: 2, py: 0.7,
            background: state.filter === cat ? '#f5c842' : surf,
            color: state.filter === cat ? '#0d0a14' : muted,
            border: `1px solid ${state.filter === cat ? '#f5c842' : bord}`,
            fontWeight: state.filter === cat ? 700 : 400,
            '&:hover': { background: state.filter === cat ? '#e6b800' : darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)' }
          }}>
          {cat}
        </Button>
      ))}
    </Box>
  );
}

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppContext } from '../context/AppContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useAppContext();
  return (
    <Tooltip title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <IconButton onClick={() => setDarkMode(!darkMode)}
        sx={{ color: darkMode ? '#9e90c0' : '#6b5a8a', border: '1px solid', borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: '50%' }}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

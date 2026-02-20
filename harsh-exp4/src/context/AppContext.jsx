// ── Experiment 4: useContext ──────────────────────────────────────────────
// Global state: theme, skills (via reducer), user profile

import React, { createContext, useContext, useReducer, useState } from 'react';
import { appReducer, initialState } from '../reducer/appReducer';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Theme state (used by Navbar + all pages)
  const [darkMode, setDarkMode] = useState(true);

  // Mock user profile (global, used in Navbar + Home)
  const [userProfile] = useState({
    name: 'Harsh Bardhan Singh',
    role: 'Aspiring Data Scientist',
    email: 'harshbardhan@example.com',
    location: 'Telangana, India',
    github: 'github.com/harshbardhan',
    linkedin: 'linkedin.com/in/harshbardhan',
  });

  // useReducer for skills management
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Apply theme class to body
  React.useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, userProfile, state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for easy consumption
export function useAppContext() {
  return useContext(AppContext);
}

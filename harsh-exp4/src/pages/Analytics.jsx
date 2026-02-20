// ── pages/Analytics.jsx ── (Experiment 4: useReducer + useMemo + useContext)
import React, { useMemo, useState } from 'react';
import {
  Box, Typography, Grid, TextField, MenuItem, Select,
  FormControl, InputLabel, LinearProgress, IconButton,
  Chip, Button, Tooltip
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useAppContext } from '../context/AppContext';
import FilterBar from '../components/FilterBar';

const categoryColors = {
  Programming: '#f5c842',
  'AI/ML':     '#c084fc',
  Web:         '#60a5fa',
  Data:        '#34d399',
};

export default function Analytics() {
  const { darkMode, state, dispatch } = useAppContext();
  const [newName,  setNewName]  = useState('');
  const [newLevel, setNewLevel] = useState(60);
  const [newCat,   setNewCat]   = useState('Programming');
  const [search,   setSearch]   = useState('');

  const text  = darkMode ? '#f0eaff' : '#1a0f2e';
  const muted = darkMode ? '#9e90c0' : '#6b5a8a';
  const surf  = darkMode ? '#1e1830' : '#ffffff';
  const bord  = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const inputBg = darkMode ? '#130f1e' : '#f3eeff';

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      background: inputBg, borderRadius: '10px', color: text, fontFamily: 'Inter',
      '& fieldset': { borderColor: bord },
      '&:hover fieldset': { borderColor: '#f5c842' },
      '&.Mui-focused fieldset': { borderColor: '#f5c842' },
    },
    '& .MuiInputLabel-root': { color: muted, fontFamily: 'Inter' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#f5c842' },
    '& .MuiSelect-icon': { color: muted },
  };

  // ── useMemo: derive all stats + filtered list ─────────────────────────
  const { filtered, totalSkills, strongSkills, avgLevel, favoriteCount, topSkill } = useMemo(() => {
    const { skills, filter } = state;

    // Filter by category
    const catFiltered = filter === 'All' ? skills : skills.filter(s => s.category === filter);
    // Filter by search
    const filtered = catFiltered.filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalSkills    = skills.length;
    const strongSkills   = skills.filter(s => s.level >= 80).length;
    const favoriteCount  = skills.filter(s => s.favorite).length;
    const avgLevel       = totalSkills > 0
      ? Math.round(skills.reduce((acc, s) => acc + s.level, 0) / totalSkills)
      : 0;
    const topSkill       = skills.reduce((a, b) => (a.level > b.level ? a : b), skills[0] || { name: '—', level: 0 });

    return { filtered, totalSkills, strongSkills, avgLevel, favoriteCount, topSkill };
  }, [state.skills, state.filter, search]);
  // ─────────────────────────────────────────────────────────────────────

  const addSkill = () => {
    if (!newName.trim()) return;
    dispatch({ type: 'ADD_SKILL', payload: { name: newName.trim(), level: Number(newLevel), category: newCat } });
    setNewName(''); setNewLevel(60);
  };

  const statBoxes = [
    { label: 'Total Skills',    val: totalSkills,   color: '#f5c842' },
    { label: 'Strong (80%+)',   val: strongSkills,  color: '#34d399' },
    { label: 'Avg Level',       val: `${avgLevel}%`, color: '#c084fc' },
    { label: 'Favourites ⭐',   val: favoriteCount,  color: '#fb923c' },
  ];

  return (
    <Box sx={{ pt: '64px', minHeight: '100vh', px: { xs: 3, md: 10 }, py: 8 }}>
      <Typography sx={{ fontFamily: 'Inter, monospace', fontSize: '0.82rem', color: '#f5c842', letterSpacing: '0.06em', mb: 1.5, fontWeight: 500 }}>
        // analytics — exp 4
      </Typography>
      <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: text, mb: 1, fontSize: { xs: '2rem', md: '2.8rem' }, letterSpacing: '-0.02em' }}>
        Skill Analytics
      </Typography>
      <Typography sx={{ color: muted, mb: 5, fontSize: '0.9rem' }}>
        Uses <Chip label="useContext" size="small" sx={{ background: '#c084fc22', color: '#c084fc', fontSize: '0.7rem', mx: 0.3 }} />
        <Chip label="useReducer" size="small" sx={{ background: '#f5c84222', color: '#f5c842', fontSize: '0.7rem', mx: 0.3 }} />
        <Chip label="useMemo" size="small" sx={{ background: '#34d39922', color: '#34d399', fontSize: '0.7rem', mx: 0.3 }} />
      </Typography>

      {/* Stat boxes */}
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {statBoxes.map((s, i) => (
          <Grid item xs={6} md={3} key={i}>
            <Box sx={{ background: surf, border: `1px solid ${bord}`, borderRadius: '14px', p: 3, textAlign: 'center' }}>
              <Typography sx={{ fontSize: '0.75rem', color: muted, mb: 1, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</Typography>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 900, color: s.color }}>{s.val}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Top skill highlight */}
      <Box sx={{ background: surf, border: `1px solid ${bord}`, borderRadius: '14px', p: 3, mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography sx={{ fontSize: '1.5rem' }}>🏆</Typography>
        <Box>
          <Typography sx={{ fontSize: '0.75rem', color: muted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top Skill</Typography>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", color: text, fontWeight: 700, fontSize: '1.2rem' }}>{topSkill.name} — {topSkill.level}%</Typography>
        </Box>
      </Box>

      {/* Filter + Search row */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, flexWrap: 'wrap' }}>
        <FilterBar />
        <TextField size="small" placeholder="Search skills..." value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ ...inputSx, minWidth: 200, mb: 3 }} />
        {state.skills.some(s => s.favorite) && (
          <Button size="small" onClick={() => dispatch({ type: 'CLEAR_FAVORITES' })}
            sx={{ color: '#fb923c', border: '1px solid #fb923c44', borderRadius: '50px', textTransform: 'none', fontFamily: 'Inter', mb: 3, fontSize: '0.78rem', px: 2 }}>
            Clear Favourites
          </Button>
        )}
      </Box>

      {/* Skills list */}
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {filtered.map((skill) => {
          const color = categoryColors[skill.category] || '#f5c842';
          return (
            <Grid item xs={12} sm={6} md={4} key={skill.id}>
              <Box sx={{
                background: surf, border: `1px solid ${skill.favorite ? '#fb923c' : bord}`,
                borderRadius: '14px', p: 3,
                transition: 'border-color 0.2s, transform 0.2s',
                '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 10px 30px rgba(0,0,0,0.2)` }
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: text, fontSize: '0.95rem' }}>{skill.name}</Typography>
                    <Typography sx={{ fontSize: '0.72rem', color, fontWeight: 600, mt: 0.3 }}>{skill.category}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Tooltip title={skill.favorite ? 'Remove favourite' : 'Add favourite'}>
                      <IconButton size="small" onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: skill.id })}
                        sx={{ color: skill.favorite ? '#fb923c' : muted, p: 0.5 }}>
                        {skill.favorite ? <StarIcon sx={{ fontSize: 18 }} /> : <StarBorderIcon sx={{ fontSize: 18 }} />}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Remove skill">
                      <IconButton size="small" onClick={() => dispatch({ type: 'REMOVE_SKILL', payload: skill.id })}
                        sx={{ color: '#f87171', p: 0.5 }}>
                        <DeleteIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.8 }}>
                  <Typography sx={{ fontSize: '0.78rem', color: muted }}>Proficiency</Typography>
                  <Typography sx={{ fontSize: '0.78rem', color, fontWeight: 700 }}>{skill.level}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={skill.level}
                  sx={{ height: 8, borderRadius: 99, background: darkMode ? '#1a1428' : '#e8e0ff', '& .MuiLinearProgress-bar': { background: color, borderRadius: 99 } }} />
              </Box>
            </Grid>
          );
        })}
        {filtered.length === 0 && (
          <Grid item xs={12}>
            <Typography sx={{ color: muted, textAlign: 'center', py: 6, fontSize: '0.9rem' }}>No skills found. Try a different filter or search.</Typography>
          </Grid>
        )}
      </Grid>

      {/* Add skill panel */}
      <Box sx={{ background: surf, border: `1px solid ${bord}`, borderRadius: '16px', p: 4 }}>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: text, fontSize: '1.15rem', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
          <AddCircleIcon sx={{ color: '#f5c842' }} /> Add New Skill
        </Typography>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Skill Name" value={newName} onChange={e => setNewName(e.target.value)} sx={inputSx} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth sx={inputSx}>
              <InputLabel>Category</InputLabel>
              <Select value={newCat} label="Category" onChange={e => setNewCat(e.target.value)}
                MenuProps={{ PaperProps: { sx: { background: surf, color: text } } }}>
                {['Programming', 'AI/ML', 'Web', 'Data'].map(c => (
                  <MenuItem key={c} value={c} sx={{ fontFamily: 'Inter', '&:hover': { background: darkMode ? '#251e3a' : '#f3eeff' } }}>{c}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography sx={{ fontSize: '0.8rem', color: muted, mb: 0.8 }}>Level: <strong style={{ color: '#f5c842' }}>{newLevel}%</strong></Typography>
            <input type="range" min={10} max={100} value={newLevel}
              onChange={e => setNewLevel(e.target.value)}
              style={{ width: '100%', accentColor: '#f5c842', cursor: 'pointer' }} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button fullWidth variant="contained" onClick={addSkill}
              sx={{ background: '#f5c842', color: '#0d0a14', fontWeight: 700, borderRadius: '10px', py: 1.7, textTransform: 'none', fontFamily: 'Inter', '&:hover': { background: '#e6b800' } }}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// ── pages/Contact.jsx ── (Experiment 3: third page with React Router) ─────
import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Alert } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const contactLinks = [
  { icon: '📧', label: 'Email',    val: 'harshbardhan@example.com' },
  { icon: '📱', label: 'Phone',    val: '+91 9876543210' },
  { icon: '📍', label: 'Location', val: 'Telangana, India' },
  { icon: '🐙', label: 'GitHub',   val: 'github.com/harshbardhan' },
  { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/harshbardhan' },
];

export default function Contact() {
  const { darkMode, userProfile } = useAppContext();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

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
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box sx={{ pt: '64px', minHeight: '100vh', px: { xs: 3, md: 10 }, py: 8 }}>
      <Typography sx={{ fontFamily: 'Inter, monospace', fontSize: '0.82rem', color: '#f5c842', letterSpacing: '0.06em', mb: 1.5, fontWeight: 500 }}>
        // let's talk
      </Typography>
      <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: text, mb: 1.5, fontSize: { xs: '2rem', md: '2.8rem' }, letterSpacing: '-0.02em' }}>
        Get In Touch
      </Typography>
      <Typography sx={{ color: muted, mb: 6, maxWidth: 500, fontSize: '0.97rem', lineHeight: 1.7 }}>
        Have a project in mind or just want to say hi? I'd love to hear from you.
      </Typography>

      <Grid container spacing={3}>
        {/* Info panel */}
        <Grid item xs={12} md={4}>
          <Box sx={{ background: surf, border: `1px solid ${bord}`, borderRadius: '18px', p: 4, height: '100%' }}>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: text, fontSize: '1.3rem', mb: 0.5 }}>
              {userProfile.name}
            </Typography>
            <Typography sx={{ color: muted, fontSize: '0.85rem', mb: 3 }}>{userProfile.role}</Typography>
            <Box sx={{ borderTop: `1px solid ${bord}`, pt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactLinks.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <Box sx={{ fontSize: '1rem', mt: 0.2 }}>{item.icon}</Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', color: muted, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', mb: 0.3 }}>{item.label}</Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: text }}>{item.val}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Form */}
        <Grid item xs={12} md={8}>
          <Box sx={{ background: surf, border: `1px solid ${bord}`, borderRadius: '18px', p: 4 }}>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: text, fontSize: '1.3rem', mb: 3 }}>
              Send a Message
            </Typography>
            {sent && <Alert severity="success" sx={{ mb: 3, borderRadius: '10px', fontFamily: 'Inter' }}>Message sent! I'll get back to you soon. ✅</Alert>}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required sx={inputSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required sx={inputSx} />
                </Grid>
              </Grid>
              <TextField fullWidth label="Subject" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required sx={inputSx} />
              <TextField fullWidth label="Message" multiline rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required sx={inputSx} />
              <Button type="submit" variant="contained"
                sx={{ background: '#f5c842', color: '#0d0a14', fontWeight: 700, borderRadius: '10px', px: 4, py: 1.4, textTransform: 'none', fontFamily: 'Inter', alignSelf: 'flex-start', '&:hover': { background: '#e6b800', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(245,200,66,0.3)' }, transition: 'all 0.2s' }}>
                Send Message →
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

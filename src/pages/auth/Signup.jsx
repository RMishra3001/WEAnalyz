import React from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup logic
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#55D6C2', // teal background
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, backgroundColor: '#B3F4EC' }}>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 'bold', fontStyle: 'italic', mb: 1 }}
          >
            Helpdesk System
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Sign up here
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              label="Username"
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#2979ff',
                '&:hover': { backgroundColor: '#1565c0' }
              }}
            >
              Sign Up
            </Button>

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: 1, px: 1 }}
            >
              <Grid item>
                <Link href="/forgot-password" variant="body2" sx={{ color: 'red' }}>
                  Forgot password
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2" sx={{ color: 'black' }}>
                  Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

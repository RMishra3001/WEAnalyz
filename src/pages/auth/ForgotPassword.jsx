import React from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending reset email
    navigate('/login');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#55D6C2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#B4F1EB', // lighter turquoise box
          padding: 4,
          borderRadius: 2,
          width: '100%',
          maxWidth: 400,
          boxShadow: 3,
        }}
      >
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Don’t worry, Enter your email below and we will send you a link to change password.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            variant="outlined"
            required
            sx={{
              mb: 3,
              backgroundColor: '#fff',
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              backgroundColor: '#07C203', // green
              '&:hover': {
                backgroundColor: '#05a002',
              },
            }}
          >
            Submit
          </Button>

          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate('/login')}
            sx={{
              backgroundColor: '#0D6EFD', // blue
              '&:hover': {
                backgroundColor: '#0b5ed7',
              },
            }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
}

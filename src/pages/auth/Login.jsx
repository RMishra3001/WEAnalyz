import React from 'react';
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  Container,
  Paper
} from '@mui/material';

const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#55D6C2', 
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
            sx={{ fontWeight: 'bold', fontStyle: 'italic', mb: 3 }}
          >
            Helpdesk System
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, backgroundColor: 'green', '&:hover': { backgroundColor: '#0d8b29' } }}
          >
            Sign In
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
              <Link href="/signup" variant="body2" sx={{ color: 'black' }}>
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;

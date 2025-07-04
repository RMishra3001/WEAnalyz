import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  IconButton,
  Paper
} from '@mui/material';
import { AttachFile } from '@mui/icons-material';

export default function NewTicket() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        py: 6
      }}
    >
      <Paper elevation={3} sx={{ px: 5, py: 4, width: '100%', maxWidth: 1200 }}>
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          sx={{ fontFamily: 'sans-serif' }}
        >
          Create New Ticket
        </Typography>

        <Grid container spacing={3} mt={2}>
          {/* Ticket No. and Date */}
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Ticket No."
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: '#C4C4C4',
                  borderRadius: '10px',
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="date"
              placeholder="Date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                sx: {
                  backgroundColor: '#C4C4C4',
                  borderRadius: '10px',
                }
              }}
            />
          </Grid>

          {/* Name and Department */}
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Name"
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: '#C4C4C4',
                  borderRadius: '10px',
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Department"
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: '#C4C4C4',
                  borderRadius: '10px',
                }
              }}
            />
          </Grid>

          {/* Subject */}
          <Grid item xs={12}>
            <TextField
              placeholder="Subject"
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: '#C4C4C4',
                  borderRadius: '10px',
                }
              }}
            />
          </Grid>

          {/* Category and Description */}
          <Grid item xs={12} sm={4}>
            <TextField
              placeholder="Category"
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: '#C4C4C4',
                  borderRadius: '10px',
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              sx={{
                width: '560px',
                height: '252px',
                backgroundColor: '#C4C4C4',
                borderRadius: '10px',
                border: '1px solid #000',
                p: 1,
                position: 'relative'
              }}
            >
              <TextField
                placeholder="Description"
                multiline
                rows={10}
                fullWidth
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    backgroundColor: 'transparent',
                    height: '100%',
                  }
                }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  boxShadow: 1
                }}
              >
                <AttachFile />
              </IconButton>
            </Box>
          </Grid>

          {/* Type and Priority */}
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Type"
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: '#C4C4C4',
                  borderRadius: '10px',
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Priority"
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: '#C4C4C4',
                  borderRadius: '10px',
                }
              }}
            />
          </Grid>

          {/* CAPTCHA */}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="I'm not a robot"
              sx={{ ml: 1 }}
            />
            <Typography variant="caption" sx={{ ml: 4 }} color="text.secondary">
              reCAPTCHA – Privacy • Terms
            </Typography>
          </Grid>

          {/* Submit */}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#55D6C2',
                color: '#000',
                fontWeight: 600,
                borderRadius: '6px',
                fontSize: '1.1rem',
                py: 1.5,
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

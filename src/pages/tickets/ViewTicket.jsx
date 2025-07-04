import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Chip,
  TextField,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

export default function ViewTicket() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const { id } = useParams();

  const ticket = {
    id,
    subject: 'Login Issue',
    status: 'In Progress',
    description: 'Unable to login using corporate credentials.',
    supportBy: 'Tech Support',
    priority: 'High',
    createdDate: '2023-08-14',
  };

  return (
    <Box sx={{ p: isMobile ? 2 : 3, mt: isMobile ? 8 : 0 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Back
      </Button>

      <Typography variant="h4" gutterBottom>
        Ticket #{ticket.id}
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">{ticket.subject}</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Created on: {ticket.createdDate}
        </Typography>
        <Chip label={ticket.status} color="primary" sx={{ mb: 2 }} />
        <Typography sx={{ mt: 2 }}>{ticket.description}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography><strong>Priority:</strong> {ticket.priority}</Typography>
        <Typography><strong>Assigned to:</strong> {ticket.supportBy}</Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Post a Comment</Typography>
        <TextField
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          placeholder="Type your message here..."
          sx={{ mb: 2 }}
        />
        <Button variant="contained">Submit</Button>
      </Paper>
    </Box>
  );
}

import React from 'react';
import { 
  Box, 
  Typography, 
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Add } from '@mui/icons-material';
import TicketTable from '../../components/ui/TicketTable';
import { useNavigate } from 'react-router-dom';

const tickets = [
  { id: 1234, subject: 'Login issue', status: 'In Progress', supportBy: 'Tech Support', date: '13/08/21', rating: 3 },
  { id: 1124, subject: 'New ticket issue', status: 'On Hold', supportBy: 'Operation Team', date: '14/08/21', rating: 4 },
  { id: 1224, subject: 'New request', status: 'Closed', supportBy: 'Tech Support', date: '13/08/21', rating: 5 },
  { id: 1244, subject: 'Ticket submission', status: 'In Progress', supportBy: 'Operation Team', date: '14/08/21', rating: 2 },
  { id: 1114, subject: 'Login issue', status: 'In Progress', supportBy: 'Tech Support', date: '03/08/21', rating: 4 }
];

export default function MyTickets() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      p: isMobile ? 2 : 3,
      mt: isMobile ? 8 : 0
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'flex-start' : 'center',
        mb: 3,
        gap: isMobile ? 2 : 0
      }}>
        <Typography variant="h4">My Tickets</Typography>
        <Button 
          variant="contained" 
          startIcon={<Add />}
          onClick={() => navigate('/tickets/new')}
          size={isMobile ? 'small' : 'medium'}
        >
          New Ticket
        </Button>
      </Box>
      <TicketTable tickets={tickets} />
    </Box>
  );
}
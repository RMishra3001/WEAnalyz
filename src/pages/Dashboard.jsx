import React from 'react';
import { 
  Grid, 
  Typography, 
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import StatCard from '../components/ui/StatCard';

const stats = [
  { title: 'Total Tickets', value: 12, color: '#2F82FF' },
  { title: 'Total Solved', value: 8, color: '#0BFF68' },
  { title: 'Total Awaiting Approval', value: 2, color: '#FE594E' },
  { title: 'Total In Progress', value: 4, color: '#FCFF6C' }
];

export default function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      p: isMobile ? 2 : 3,
      mt: isMobile ? 10 : 8 // pushes content below TopBar
    }}>
      {/* THIS is the heading you want */}
      
      <Typography 
  variant="h5" 
  sx={{ 
    mb: 3, 
    fontWeight: 300, 
    pl: '500px' // applies 500px padding on all sides
  }}
>
  Dashboard
</Typography>


      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

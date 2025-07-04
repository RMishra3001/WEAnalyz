import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Divider, Box, Typography } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Assignment as TicketsIcon,
  AddCircle as NewTicketIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

export default function Sidebar() {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'My Tickets', icon: <TicketsIcon />, path: '/tickets' },
    { text: 'New Ticket', icon: <NewTicketIcon />, path: '/tickets/new' },

  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'primary.main',
          color: 'white'
        },
      }}
    >
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6">Helpdesk</Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component="a" href={item.path}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

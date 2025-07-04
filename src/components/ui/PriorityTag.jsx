import React from 'react';
import { Chip } from '@mui/material';

export default function PriorityTag({ status }) {
  const getColor = () => {
    switch(status.toLowerCase()) {
      case 'in progress': return 'primary';
      case 'on hold': return 'warning';
      case 'closed': return 'success';
      default: return 'default';
    }
  };

  return (
    <Chip 
      label={status} 
      color={getColor()}
      size="small"
      sx={{ 
        fontWeight: 'bold',
        minWidth: 100
      }}
    />
  );
}
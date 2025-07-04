import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function StatCard({ title, value, color }) {
  return (
    <Card 
      sx={{ 
        backgroundColor: color,
        color: '#000',
        width: '160px',
        height: '180px',
         boxShadow: '5px 0 15px rgba(0, 0, 0, 0.3)',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '15px', fontWeight: 500 }} gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '50px', fontWeight: 'bold', mt: 2 }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

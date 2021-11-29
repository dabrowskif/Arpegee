import React from 'react';
import { Grid, LinearProgress, Typography } from '@mui/material';

const ValueBar = ({ primaryColor, secondaryColor, currentValue, minValue, maxValue }) => {
  const normalise = (value) => {
    const percentValue = ((value - minValue) * 100) / (maxValue - minValue);
    if (percentValue > 100) return 100;
    return percentValue;
  };

  return (
    <Grid item xs={12} style={{ position: 'relative' }}>
      <LinearProgress
        variant="determinate"
        sx={{
          borderRadius: '10px',
          height: '25px',
          backgroundColor: secondaryColor,
          '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: primaryColor,
          },
        }}
        value={normalise(currentValue)}
      />
      <Typography
        sx={{
          position: 'absolute',
          color: 'white',
          top: '2px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {currentValue}
        {' '}
        /
        {maxValue}
      </Typography>
    </Grid>
  );
};

export default ValueBar;

import React from 'react';
import { Grid, Typography } from '@mui/material';

import useStyles from './styles.js';

const LogRow = ({ roundNumber, roundInfo }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.logRow}>
      <Grid item xs={2} backgroundColor={setBackgroundColor(roundNumber)}>
        <Typography>
          Round
          {' '}
          {roundNumber}
        </Typography>
      </Grid>
      <Grid item xs={10} backgroundColor={setBackgroundColor(roundNumber)}>
        <Typography textAlign="center">{logOutput(roundInfo)}</Typography>
      </Grid>
    </Grid>
  );
};

export default LogRow;

const logOutput = (roundInfo) => (
  roundInfo.isCharacterAttacking
    ? `Player hit monster for ${roundInfo.hitReciever.hitDamage} damage! Now monster has ${roundInfo.hitReciever.healthpointsAfterHit} life.`
    : `Monster hit player for ${roundInfo.hitReciever.hitDamage} damage! Now player has ${roundInfo.hitReciever.healthpointsAfterHit} life.`
);

const setBackgroundColor = (roundNumber) => {
  // TODO make nice colors for display
  if (roundNumber % 2) {
    return '#F2F2F2';
    // return '#ebf6f9'
  }
  return '#FFFFFF';
  // return '#E8E8E8';
};

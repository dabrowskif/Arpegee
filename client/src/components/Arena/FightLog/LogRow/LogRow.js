import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Divider, Grid, Typography } from '@mui/material';

import useStyles from './styles.js';

const LogRow = ({ roundInfo }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.logRow}>
      <Grid container>
        <Grid item xs={2} backgroundColor={setBackgroundColor(roundInfo.roundNumber)}>
          <Typography textAlign="center">{roundInfo.roundNumber}</Typography>
        </Grid>
        <Grid item xs={10} backgroundColor={setBackgroundColor(roundInfo.roundNumber)}>
          <Typography textAlign="justify">{logOutput(roundInfo)}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.divider}>
          <Divider sx={{ width: '100%', height: '5px', borderColor: '#531516' }} />
        </Grid>
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
    return '#1A1A1D';
    // return '#ebf6f9'
  }
  return '#1A1A1D';
  // return '#E8E8E8';
};

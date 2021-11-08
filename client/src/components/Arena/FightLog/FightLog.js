import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import useStyles from './styles.js';
import LogRow from './LogRow/LogRow.js';

const FightLog = () => {
  const classes = useStyles();
  const fightLog = useSelector((state) => state?.arena?.lastFightLog);

  // TODO FINISH THIS
  return (
    <Grid container className={classes.mainGrid}>
      <Grid item xs={12} className={classes.resultItem}><Typography variant="h4" gutterBottom>FIGHT LOGS</Typography></Grid>
      <Grid item xs={2} className={classes.resultItem}><Typography>Round</Typography></Grid>
      <Grid item xs={10} className={classes.resultItem}><Typography>Log</Typography></Grid>
      <Divider sx={{ width: '100%', height: '5px', borderColor: '#531516' }} />
      { fightLog?.roundLogs?.map((roundInfo, roundNumber) => <LogRow key={roundNumber} roundNumber={roundNumber} roundInfo={roundInfo} />)}
    </Grid>
  );
};

export default FightLog;

import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import LogRow from './LogRow/LogRow.js';
import useStyles from './styles.js';

const FightLog = () => {
  const classes = useStyles();
  const fightLog = useSelector((state) => state?.arena?.lastFightLog);

  const wasFightWon = () => {
    const result = fightLog?.didWin;
    if (result === true) {
      return 'Fight won!';
    } if (fightLog?.didWin === false) {
      return 'Fight lost.';
    }
    return null;
  };

  return (
    <Grid container className={classes.mainGrid}>
      <Grid item xs={12} className={classes.resultItem}><Typography variant="h4" gutterBottom>FIGHT LOGS</Typography></Grid>
      <Grid item xs={12} className={classes.resultItem}><Typography variant="h6" gutterBottom>{wasFightWon()}</Typography></Grid>
      <Grid item xs={2} className={classes.resultItem}><Typography>Round</Typography></Grid>
      <Grid item xs={10} className={classes.resultItem}><Typography>Log</Typography></Grid>
      <Divider sx={{ width: '100%', height: '5px', borderColor: '#531516' }} />
      { fightLog?.roundLogs?.map((roundInfo) => <LogRow key={roundInfo.roundNumber} roundInfo={roundInfo} />)}
    </Grid>
  );
};

export default FightLog;

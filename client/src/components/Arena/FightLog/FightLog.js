import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import useStyles from './styles.js';
import LogRow from './LogRow/LogRow.js';

const FightLog = () => {
  const classes = useStyles();
  const fightLog = useSelector((state) => state?.arena?.lastFightLog);

  // TODO FINISH THIS
  return (
    <Grid container className={classes.mainGrid}>
      <Grid item xs={12} className={classes.resultItem}><Typography variant="h4">{fightLog?.didWin ? <div>Fight Won!</div> : <div>Fight Lost!</div>}</Typography></Grid>
      <Grid item xs={2} className={classes.resultItem}><Typography>Round Number</Typography></Grid>
      <Grid item xs={10} className={classes.resultItem}><Typography>Log</Typography></Grid>
      { fightLog?.roundLogs?.map((roundInfo, roundNumber) => <LogRow key={roundNumber} roundNumber={roundNumber} roundInfo={roundInfo} />)}
    </Grid>
  );
};

export default FightLog;

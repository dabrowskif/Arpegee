import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, Grid, Typography } from '@mui/material';
import useStyles from './styles.js';
import { fightMonster } from '../../../../actions/arena.js';
import InfoRow from '../../../Character/Summary/InfoRow.js';

const Opponent = ({ index, monster }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleFightButton = () => {
    dispatch(fightMonster(monster._id, index));
  };

  return (
    <Grid item xs={12} sm={4}>
      <Grid container className={classes.opponent}>
        <Grid item xs={12}><Typography variant="h5">{`${monster?.type} ${monster?.subtype}`}</Typography></Grid>
        <InfoRow xs={6} name="level" justifyContent currentValue={monster?.level} shouldDisplayName={false} />
        <InfoRow xs={6} name="experience" justifyContent currentValue={monster?.experienceOnKill} shouldDisplayBar={false} shouldDisplayName={false} />
        <InfoRow xs={6} name="damage" justifyContent currentValue={monster?.damage} shouldDisplayName={false} />
        <InfoRow xs={6} name="defense" justifyContent currentValue={monster?.defense} shouldDisplayName={false} />
        <InfoRow xs={12} name="healthpoints" justifyContent currentValue={monster?.healthpoints} shouldDisplayBar={false} shouldDisplayName={false} />
        <Button className={classes.fightButton} variant="contained" onClick={handleFightButton}>Fight!</Button>
      </Grid>
    </Grid>
  );
};

export default Opponent;

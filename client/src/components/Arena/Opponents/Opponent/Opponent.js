import React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import useStyles from './styles.js';
import InfoRow from '../../../Character/Summary/InfoRow.js';
import { setAvatar } from '../../../../img/imgFunctions';

const Opponent = ({ monsterId, monsterIndex, monster, handleFightButton }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Grid container className={classes.opponent}>
        <Grid item xs={6}><Typography variant="h5">{`${monster?.type} ${monster?.subtype}`}</Typography></Grid>
        <Grid item xs={6} className={classes.monsterAvatarGrid}><img src={setAvatar(monster?.type)} className={classes.monsterAvatar} alt="avatar" /></Grid>
        <InfoRow xs={6} name="level" justifyContent currentValue={monster?.level} shouldDisplayName={false} />
        <InfoRow xs={6} name="experience" justifyContent currentValue={monster?.experienceOnKill} shouldDisplayBar={false} shouldDisplayName={false} />
        <InfoRow xs={6} name="damage" justifyContent currentValue={monster?.damage} shouldDisplayName={false} />
        <InfoRow xs={6} name="defense" justifyContent currentValue={monster?.defense} shouldDisplayName={false} />
        <InfoRow xs={12} name="healthpoints" justifyContent currentValue={monster?.healthpoints} shouldDisplayBar={false} shouldDisplayName={false} />
        <Button className={classes.fightButton} variant="contained" onClick={() => handleFightButton(monsterId, monsterIndex)}>Fight!</Button>
      </Grid>
    </Grid>
  );
};

export default Opponent;

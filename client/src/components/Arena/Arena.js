import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Container, Grid, Grow, IconButton, Paper, Typography } from '@mui/material';

import useStyles from './styles.js';
import Opponents from './Opponents/Opponents.js';
import { resetMonsters } from '../../actions/arena.js';
import FightLog from './FightLog/FightLog.js';
import InfoRow from '../Character/CharacterInfo/InfoRow.js';

const Arena = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const character = useSelector((state) => state?.characters?.userCharacter);

  const handleResetMonstersClick = () => {
    dispatch(resetMonsters(character?._id, character?.level));
  };

  return (
    <Grow in>
      <Container component="main" maxWidth="md">
        <Paper className={classes.paper} elevation={5}>
          <Grid container className={classes.titleGrid}>
            <Grid item xs={12} sm={5} md={4} order={{ xs: 2, md: 1 }}>
              <InfoRow name="healthpoints" shouldDisplayBar shouldDisplayName minValue={0} currentValue={character?.healthpoints} maxValue={character?.maxHealthpoints} />
              <InfoRow name="experience" shouldDisplayBar shouldDisplayName minValue={character?.totalExperienceToLevelUp - character?.experienceToLevelUp} currentValue={character?.experience} maxValue={character?.totalExperienceToLevelUp} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} order={{ xs: 1, md: 2 }}>
              <Typography className={classes.title} variant="h2">Arena</Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={4} order={{ xs: 4, md: 3 }}>
              <InfoRow name="damage" currentValue={character?.damage} shouldDisplayName />
              <InfoRow name="defense" currentValue={character?.defense} shouldDisplayName />
            </Grid>
            <Grid item sm={2} order={{ xs: 3, md: 4 }}>
              {/* filler for a nicer order */}
            </Grid>
          </Grid>
          <Typography className={classes.title} variant="h3">Choose your opponent</Typography>
          <Opponents characterId={character?._id} characterLevel={character?.level} />
          <div className={classes.resetRow}>
            <IconButton variant="contained" color="primary" onClick={handleResetMonstersClick}><RefreshIcon /></IconButton>
            <Typography>Reset Monsters</Typography>
          </div>
          <FightLog />
        </Paper>
      </Container>
    </Grow>
  );
};

export default Arena;

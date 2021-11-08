import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  Container, Grid, Grow, IconButton, Paper, Typography,
} from '@mui/material';

import useStyles from './styles.js';
import Opponents from './Opponents/Opponents.js';
import { resetMonsters } from '../../actions/arena.js';
import FightLog from './FightLog/FightLog.js';
import { getCharacter } from '../../actions/characters';
import CharacterShortInfo from './Character/ShortInfo/CharacterShortInfo';

const Arena = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const character = useSelector((state) => state?.characters?.userCharacter);
  const userId = useSelector((state) => state?.user?.authData?.result?.googleId || state?.user?.authData?.result?._id);

  const handleResetMonstersClick = () => {
    dispatch(resetMonsters(character?._id, character?.level));
  };

  useEffect(() => {
    dispatch(getCharacter(userId));
  }, []);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container className={classes.mainGrid} spacing={2}>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper elevation={5} className={classes.paperPlayer}>
                  <CharacterShortInfo character={character} />
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper elevation={5} className={classes.paperOpponents}>
                  <Opponents characterId={character?._id} characterLevel={character?.level} />
                  <div className={classes.resetButton}>
                    <IconButton variant="contained" color="primary" onClick={handleResetMonstersClick}><RefreshIcon sx={{ color: '#FFFFFF' }} /></IconButton>
                    <Typography>Reset Monsters</Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={5} className={classes.paperMonsterDetails}>
                  Monster details
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper elevation={5} className={classes.paperPlayerActions}>
                  Player actions
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={5} className={classes.paperFightLogs}>
              <FightLog />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Arena;

/*
<Container component="main" maxWidth="xl">
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
        {/!* filler for a nicer order *!/}
      </Grid>
    </Grid>
    <Typography className={classes.title} variant="h3">Choose your opponent</Typography>
    <Opponents characterId={character?._id} characterLevel={character?.level} />
    <div className={classes.resetRow}>
      <IconButton variant="contained" color="primary" onClick={handleResetMonstersClick}><RefreshIcon /></IconButton>
      <Typography>Reset Monsters</Typography>
    </div>
  </Paper>
</Container> */

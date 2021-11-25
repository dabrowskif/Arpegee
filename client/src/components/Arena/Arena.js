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
import LevelModal from '../Modals/FightLog';

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
        <LevelModal />
        <Grid container className={classes.mainGrid} spacing={2}>
          <Grid item lg={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Paper elevation={5} className={classes.paperPlayer}>
                  <CharacterShortInfo character={character} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper elevation={5} className={classes.paperOpponents}>
                  <Opponents characterId={character?._id} characterLevel={character?.level} />
                  <div className={classes.resetButton}>
                    <IconButton variant="contained" color="primary" onClick={handleResetMonstersClick}><RefreshIcon sx={{ color: '#FFFFFF' }} /></IconButton>
                    <Typography>Reset Monsters</Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={5} className={classes.paperMonsterDetails}>
                  Monster details
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper elevation={5} className={classes.paperPlayerActions}>
                  Player actions
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3}>
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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Container, Grid } from '@mui/material';

import useStyles from './styles.js';
import Opponent from './Opponent/Opponent.js';
import { getMonsters } from '../../../actions/arena.js';

const Opponents = ({ characterId, characterLevel }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const arena = useSelector((state) => state?.arena);

  useEffect(() => {
    dispatch(getMonsters(characterId, characterLevel));
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <Grid container className={classes.mainGrid} spacing={3}>
        {arena?.isLoading
          ? <CircularProgress className={classes.circularProgress} size={100} />
          : (arena?.monsters.map((monster, index) => (arena?.isMonsterLoading[index]
            ? <CircularProgress key={monster?._id} className={classes.circularProgress} size={50} />
            : <Opponent key={monster?._id} index={index} monster={monster} />)))}
      </Grid>
    </Container>
  );
};

export default Opponents;

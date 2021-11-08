import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@mui/material';

import useStyles from './styles.js';
import Opponent from './Opponent/Opponent.js';
import { getMonsters } from '../../../actions/arena.js';

const Opponents = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const arena = useSelector((state) => state?.arena);
  const character = useSelector((state) => state?.characters?.userCharacter);

  useEffect(() => {
    dispatch(getMonsters(character?._id, character?.level));
  }, []);

  return (
    <Grid container className={classes.mainGrid} spacing={3}>
      {arena?.isLoading
        ? <CircularProgress className={classes.circularProgress} size={100} />
        : (arena?.monsters.map((monster, index) => (arena?.isMonsterLoading[index]
          ? <CircularProgress key={monster?._id} className={classes.circularProgress} size={50} />
          : <Opponent key={monster?._id} index={index} monster={monster} />)))}
    </Grid>
  );
};

export default Opponents;

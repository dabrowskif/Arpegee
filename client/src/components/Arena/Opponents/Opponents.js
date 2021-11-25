import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@mui/material';

import useStyles from './styles.js';
import Opponent from './Opponent/Opponent.js';
import { fightMonster, getMonsters } from '../../../actions/arena.js';
import FightLogModal from '../../Modals/FightLog';

const Opponents = () => {
  const [openFightLogModal, setOpenFightLogModal] = useState(false);
  const fightLog = useSelector((state) => state?.arena?.lastFightLog);
  const handleOpenFightLogModal = () => setOpenFightLogModal(true);
  const handleCloseFightLogModal = () => setOpenFightLogModal(false);

  const classes = useStyles();
  const dispatch = useDispatch();

  const arena = useSelector((state) => state?.arena);
  const character = useSelector((state) => state?.characters?.userCharacter);

  const handleFightButton = async (id, index) => {
    await dispatch(fightMonster(id, index));
    handleOpenFightLogModal();
  };

  useEffect(() => {
    dispatch(getMonsters(character?._id, character?.level));
  }, []);

  return (
    <>
      <FightLogModal fightLog={fightLog} open={openFightLogModal} handleClose={handleCloseFightLogModal} />
      <Grid container className={classes.mainGrid} spacing={3}>
        {arena?.isLoading
          ? <CircularProgress className={classes.circularProgress} size={100} />
          : (arena?.monsters.map((monster, index) => (arena?.isMonsterLoading[index]
            ? <CircularProgress key={monster?._id} className={classes.circularProgress} size={50} />
            : <Opponent key={monster?._id} monsterId={monster?._id} monsterIndex={index} handleFightButton={handleFightButton} monster={monster} />)))}
      </Grid>
    </>
  );
};

export default Opponents;

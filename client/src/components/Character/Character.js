import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';
import CharacterSummary from './Summary/CharacterSummary.js';
import { getCharacter } from '../../actions/characters.js';
import CharacterCreation from './Creation/CharacterCreation.js';

import useStyles from './styles.js';

const Character = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state?.user?.authData?.result?.googleId || state?.user?.authData?.result?._id);
  const { userCharacter, isLoading } = useSelector((state) => state?.characters);

  useEffect(() => {
    dispatch(getCharacter(userId));
  }, []);

  return (
  // eslint-disable-next-line no-nested-ternary
    isLoading
      ? <CircularProgress className={classes.circularProgress} size={100} />
      : userCharacter.userId
        ? <CharacterSummary />
        : <CharacterCreation userId={userId} />
  );
};

export default Character;

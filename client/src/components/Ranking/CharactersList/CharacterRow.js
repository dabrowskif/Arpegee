import React from 'react';
import { Grid, ListItemButton, ListItemText } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRankingCharacter } from '../../../actions/ranking.js';

const CharacterRow = ({ character }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openCharacterPanel = () => {
    dispatch(getRankingCharacter(character._id, history));
  };

  return (
    <ListItemButton divider onClick={openCharacterPanel}>
      <Grid item xs={12} sm={4}>
        <ListItemText>{character?.nickname}</ListItemText>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ListItemText>{character?.level}</ListItemText>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ListItemText>{character?.vocation}</ListItemText>
      </Grid>
    </ListItemButton>
  );
};

export default CharacterRow;

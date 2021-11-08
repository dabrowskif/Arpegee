import React from 'react';
import {
  Grid, List, ListItem, ListItemButton, ListItemText, Paper,
} from '@mui/material';
import { useSelector } from 'react-redux';

import CharacterRow from './CharacterRow.js';
import useStyles from './styles';

const CharactersList = () => {
  const { list } = useSelector((state) => state?.ranking) || [];
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.paper}>
      <List>
        <Grid container>
          <ListItem>
            <ListItemButton disabled>
              <Grid item xs={12} sm={4}>
                <ListItemText>Nickname</ListItemText>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ListItemText>Level</ListItemText>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ListItemText>Vocation</ListItemText>
              </Grid>
            </ListItemButton>
          </ListItem>
          {
            list?.map((character) => (
              <ListItem key={character._id}>
                <CharacterRow character={character} />
              </ListItem>
            ))
          }
        </Grid>
      </List>
    </Paper>
  );
};

export default CharactersList;

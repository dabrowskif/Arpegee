import React from 'react';
import {
  Button, Divider, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography,
} from '@mui/material';
import useStyles from './styles.js';

const CharactersFilter = ({ handleFilterChange, handleFilterSubmit, handleFilterReset }) => {
  const classes = useStyles();

  // TODO when resetting the Filter, make radio button to check "all"
  return (
    <Paper elevation={5}>
      <Grid container className={classes.mainGrid}>
        <Typography gutterBottom variant="h4">Filtering options</Typography>
        <form onSubmit={handleFilterSubmit} onReset={handleFilterReset}>
          <FormControl>
            <Divider textAlign="left">Nickname</Divider>
            <Grid item className={classes.nicknameTextField}>
              <TextField fullWidth name="nickname" label="Nickname" onChange={handleFilterChange} />
            </Grid>
            <Divider textAlign="left">Vocation</Divider>
            <RadioGroup className={classes.radioGroup} aria-label="Vocation" name="vocation" defaultValue="all" onChange={handleFilterChange}>
              <Grid container>
                <Grid item xs={6} sm={12} md={6}>
                  <FormControlLabel value="all" control={<Radio />} label="All" />
                </Grid>
                <Grid item xs={6} sm={12} md={6}>
                  <FormControlLabel value="warrior" control={<Radio />} label="Warrior" />
                </Grid>
                <Grid item xs={6} sm={12} md={6}>
                  <FormControlLabel value="mage" control={<Radio />} label="Mage" />
                </Grid>
                <Grid item xs={6} sm={12} md={6}>
                  <FormControlLabel value="berserker" control={<Radio />} label="Berserker" />
                </Grid>
              </Grid>
            </RadioGroup>
            <Divider textAlign="left">Level range</Divider>
            <Grid container className={classes.levelRangeGrid}>
              <Grid item xs={5}>
                <TextField name="minLevel" label="1" onChange={handleFilterChange} />
              </Grid>
              <Grid item xs={2}>
                <Typography align="center">to</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField name="maxLevel" variant="outlined" label="999" onChange={handleFilterChange} />
              </Grid>
            </Grid>
            <Button type="submit" className={classes.filterButton} variant="contained" color="primary">Filter</Button>
            <Button type="reset" variant="contained" color="primary">Reset</Button>
          </FormControl>
        </form>
      </Grid>
    </Paper>
  );
};

export default CharactersFilter;

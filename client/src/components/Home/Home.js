import React from 'react';

import { Grow, Paper, Typography } from '@mui/material';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <div className={classes.root}>
        <main className={classes.content}>
          <Paper elevation={5} className={classes.mainPaper}>
            <Typography variant="h2" textAlign="center">Welcome to Arpegee!</Typography>
            <div className={classes.toolbar} />
            <Typography variant="h5" textAlign="center">You won`&apos;`t find game description here. Code is the describer. :)</Typography>
          </Paper>
        </main>
      </div>
    </Grow>
  );
};

export default Home;

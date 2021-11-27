import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Toolbar } from '@mui/material';

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import Ranking from './components/Ranking/Ranking.js';
import Character from './components/Character/Character.js';
import CharacterSummary from './components/Character/Summary/CharacterSummary.js';
import Arena from './components/Arena/Arena.js';

const App = () => {
  // const user = JSON.parse(localStorage.getItem('profile'));
  const user = useSelector((state) => state?.user?.authData?.result);
  const character = useSelector((state) => state?.characters?.userCharacter);

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/home" />} />
        <Route path="/home" exact component={Home} />
        <Route path="/auth" exact component={user ? () => <Redirect to="/home" /> : Auth} />
        <Route path="/ranking" exact component={Ranking} />
        <Route path="/ranking/search" exact component={Ranking} />
        <Route
          path="/arena"
          exact
          component={user
            ? character?.userId
              ? Arena
              : () => <Redirect to="/character" />
            : () => <Redirect to="/auth" />}
        />
        <Route path="/character" exact component={user ? Character : () => <Redirect to="/auth" />} />
        <Route path="/character/:id" exact component={CharacterSummary} />
      </Switch>
    </Container>
  );
};

export default App;

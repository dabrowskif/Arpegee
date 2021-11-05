import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Toolbar } from '@mui/material';

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import Ranking from './components/Ranking/Ranking.js';
import Character from './components/Character/Character.js';
import CharacterInfo from './components/Character/CharacterInfo/CharacterInfo.js';
import Arena from './components/Arena/Arena.js';

const App = () => {
  const user = useSelector((state) => state?.user?.authData?.result);

  /* testing purposes
    const dispatch = useDispatch();
    dispatch({type: 'LOGOUT' });
    dispatch({type: 'LOGOUT_CHARACTER' }); */

  return (
    <Container>
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/home" />} />
        <Route path="/home" exact component={Home} />
        <Route path="/auth" exact component={user ? () => <Redirect to="/home" /> : Auth} />
        <Route path="/ranking" exact component={Ranking} />
        <Route path="/ranking/search" exact component={Ranking} />
        <Route path="/arena" exact component={user ? Arena : () => <Redirect to="/auth" />} />
        <Route path="/character" exact component={user ? Character : () => <Redirect to="/auth" />} />
        <Route path="/character/:id" exact component={CharacterInfo} />
      </Switch>
    </Container>
  );
};

export default App;

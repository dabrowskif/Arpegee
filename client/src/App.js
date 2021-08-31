import React, { useEffect } from 'react';
import {Container, Toolbar} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Navbar/>
                <Toolbar/>
                <Toolbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    )
};

export default App;

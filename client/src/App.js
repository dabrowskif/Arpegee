import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Ranking from "./components/Ranking/Ranking";
import {useSelector} from "react-redux";
import Character from "./components/Character/Character";
import {Container, Toolbar} from "@mui/material";

const App = () => {
    const user = useSelector(state => state?.user?.authData?.result);

    return (
            <Container>
                <Navbar/>
                <Toolbar/>
                <Toolbar/>
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/home" />} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/auth" exact component={user ? () => <Redirect to="/home" /> : Auth} />
                    <Route path="/ranking" exact component={Ranking} />
                    <Route path="/character" exact component={user ? Character : () => <Redirect to="/auth" />} />
                </Switch>
            </Container>
    )
};

export default App;
/*

<Route path="/character" exact component={user ? Character : () => <Redirect to="/auth" />} />*/

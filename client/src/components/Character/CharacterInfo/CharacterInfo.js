import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {increaseStat} from "../../../actions/characters";
import {Button, Container, Grow, Paper, Typography} from "@mui/material";

const CharacterInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const character = useSelector(state => state?.characters?.userCharacter?.result);


    const handleButtonClick = e => {
        const {name, value} = e.target;
        dispatch(increaseStat(name, value, character._id));
    };

    useEffect(() => {
        console.log(character)
    },[dispatch])

    return (
        <Grow in>
            <Container component="main" maxWidth="md">
                <Paper className={classes.paper} elevation={5}>
                    <Typography variant="h3">{character?.nickname}</Typography>
                    <Typography variant="h4">Level {character?.level} {character?.vocation}</Typography>
                    <Typography variant="h4">Statistics:</Typography>
                    <Typography variant="h5">
                        Strength: {character?.statistics?.strength} Dexterity:  {character?.statistics?.dexterity} Intelligence: {character?.statistics?.intelligence}
                    </Typography>
                    <Button name="strength" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+str</Button>
                    <Button name="dexterity" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+dex</Button>
                    <Button name="intelligence" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+int</Button>
                    <Button name="level" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+level</Button>
                </Paper>
            </Container>
        </Grow>
    );
};

export default CharacterInfo;



import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {getCharacter, updateCharacter} from "../../../actions/character";
import {Button, Container, Grow, Paper, Typography} from "@mui/material";

const CharacterInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [character, setCharacter] = useState(useSelector(state => state?.character?.characterData?.result));

    const handleCharacterChange = async e => {
        const {name, value} = e.target;

        // TODO make span with text inside button to properly give e.target as button, not as span. Currently button doesn't work when clicking on the text
        // TODO make it properly asnychronous, as it currently dispatches before setCharacter ends.
        if (name && value) {
            const oldValue = character.statistics[name];
            await setCharacter({
                ...character, statistics: {
                    ...character.statistics,
                    [name]: oldValue + Number(value),
                },
            });
            await dispatch(updateCharacter(character));
        }
    };


    useEffect(() => {
    }, []);




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
                    <Button name="strength" value={1} variant="contained" color="primary" onClick={handleCharacterChange}>+str</Button>
                    <Button name="dexterity" value={1} variant="contained" color="primary" onClick={handleCharacterChange}>+dex</Button>
                    <Button name="intelligence" value={1} variant="contained" color="primary" onClick={handleCharacterChange}>+int</Button>
                </Paper>
            </Container>
        </Grow>
    );
};

export default CharacterInfo;



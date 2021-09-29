import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {getCharacter, increaseStat} from "../../../actions/characters";
import {Button, CircularProgress, Container, Grow, Paper, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {getRankingCharacter} from "../../../actions/ranking";

const CharacterInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id } = useParams();

    const userCharacter = useSelector(state => state?.characters?.userCharacter?.result);
    const rankingCharacter = useSelector(state => state?.ranking?.rankingCharacter?.result)

    const [character, setCharacter] = useState(null);
    const [isOwner, setIsOwner] = useState(false);

    const checkCharacter = () => {
        // TODO when typing raw-url, make a nice CircularProgress and fetch data correctly
        if (id === userCharacter?._id || id === undefined) {
            setIsOwner(true);
            setCharacter(userCharacter);
        } else {
            setIsOwner(false);
            setCharacter(rankingCharacter);
        }
    }

    const handleButtonClick = e => {
        const { name, value } = e.target;
        dispatch(increaseStat(name, value, userCharacter._id));
    };

    useEffect(() => {
        checkCharacter();
    }, [userCharacter, rankingCharacter, character])

    return (
        /*isLoading
            ? <CircularProgress className={classes.circularProgress} size={100}/>
            : */<Grow in>
                <Container component="main" maxWidth="md">
                    <Paper className={classes.paper} elevation={5}> {
                        !character
                            ? <Typography variant="h3">No character found!</Typography>
                            : (  <>
                                <Typography variant="h3">{character?.nickname}</Typography>
                                <Typography variant="h4">Level {character?.level} {character?.vocation}</Typography>
                                <Typography variant="h4">Statistics:</Typography>
                                <Typography variant="h5">Strength: {character?.statistics?.strength} Dexterity:  {character?.statistics?.dexterity} Intelligence: {character?.statistics?.intelligence}</Typography>
                                {
                                    isOwner
                                    ? ( <>
                                        <Button name="strength" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+str</Button>
                                        <Button name="dexterity" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+dex</Button>
                                        <Button name="intelligence" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+int</Button>
                                        <Button name="level" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+level</Button> </> )
                                    : null
                                } </>)
                    }
                    </Paper>
                </Container>
            </Grow>
    );
};

export default CharacterInfo;



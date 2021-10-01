import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";


import useStyles from "./styles"
import {Button, Grid, Typography} from "@mui/material";
import {killMonster} from "../../../../actions/arena";

const Opponent = ({ monster }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleKillButton = () => {
        dispatch(killMonster(monster._id));
    };

    const handleFightButton = () => {

    };

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <Grid item xs={4} className={classes.opponent}>
            <Typography>{monster?.type + monster?.subtype}</Typography>
            <Typography>{monster?.level} level</Typography>
            <Typography>{monster?.healthpoints} HP</Typography>
            <Typography>{monster?.damage} DMG</Typography>
            <Typography>{monster?.experienceOnKill} EXP</Typography>
            <Button variant="contained" onClick={handleFightButton}>Fight!</Button>
            <Button variant="contained" onClick={handleKillButton}>Kill!</Button>
        </Grid>
    );
};

export default Opponent;



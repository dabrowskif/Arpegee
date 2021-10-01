import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import useStyles from "./styles"
import { Container, Grid, Grow, LinearProgress, Paper, Typography} from "@mui/material";
import Opponents from "./Opponents/Opponents";


// TODO 1. check if any monsters got already created and exist in db, if yes, fetch them from server and save in storage
//      2. if no monsters in DB, generate them, save in DB, and load to website and storage
//      3. if player fights a monster, either kill player (logic will be handled later), or kill monster: manage level ups,
//          remove monster from DB, generate new monster and save it in the DB, and save new one in storage


const Arena = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const character = useSelector(state => state?.characters?.userCharacter?.result);

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grow in>
            <Container component="main" maxWidth="md">
                <Paper className={classes.paper} elevation={5}>
                    <Grid container className={classes.titleGrid}>
                        <Grid item xs={4}><LinearProgress sx={ {barColorPrimary: 'success.main'} }/></Grid>
                        <Grid item xs={4}><Typography className={classes.title} variant="h2">Arena</Typography></Grid>
                        <Grid item xs={4}><LinearProgress sx={ {barColorPrimary: 'success.main'} }/></Grid>
                    </Grid>
                    <Typography className={classes.title} variant="h3">Choose your opponent</Typography>
                    <Opponents characterId={character?._id} characterLevel={character?.level}/>
                </Paper>
            </Container>
        </Grow>
    );
};

export default Arena;



import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import useStyles from "./styles"
import {Button, Container, Divider, Grow, Paper, Typography} from "@mui/material";

const Arena = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { userCharacter } = useSelector(state => state?.characters);

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grow in>
            <Container component="main" maxWidth="md">
                <Paper className={classes.paper} elevation={5}>
                    <Typography className={classes.title} variant="h2">Arena</Typography>
                    <Divider />
                </Paper>
            </Container>
        </Grow>
    );
};

export default Arena;



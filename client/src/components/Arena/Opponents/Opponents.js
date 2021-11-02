import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import useStyles from "./styles"
import {
    CircularProgress,
    Container,
    Grid,
} from "@mui/material";
import Opponent from "./Opponent/Opponent";
import {getMonsters} from "../../../actions/arena";

const Opponents = ({ characterId, characterLevel}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const arena = useSelector( state => state?.arena);


    useEffect(() => {
        dispatch(getMonsters(characterId, characterLevel));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container component="main" maxWidth="md">
                <Grid container className={classes.mainGrid}>{
                    arena?.isLoading
                        ? <CircularProgress className={classes.circularProgress} size={100}/>
                        :  (arena?.monsters.map( (monster, index) => {
                                return arena?.isMonsterLoading[index]
                                    ? <CircularProgress key={monster?._id} className={classes.circularProgress} size={50}/>
                                    : <Opponent key={monster?._id} index={index} monster={monster} />
                            }))}
                </Grid>
        </Container>
    );
};

export default Opponents;



import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import CharacterInfo from "./CharacterInfo/CharacterInfo";
import {getCharacter} from "../../actions/characters";
import CharacterCreation from "./CharacterCreation/CharacterCreation";

import useStyles from "./styles";
import {CircularProgress} from "@mui/material";



const Character = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const userId = useSelector(state => state?.user?.authData?.result?.googleId || state?.user?.authData?.result?._id );
    const { userCharacter, isLoading } = useSelector(state => state?.characters);

    useEffect(() => {
        dispatch(getCharacter(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);



    return (
        isLoading
            ? <CircularProgress className={classes.circularProgress} size={100}/>
            :  (userCharacter?.result
                ? <CharacterInfo />
                : <CharacterCreation userId={userId}/>)
    );
};

export default Character;



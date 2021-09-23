import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import CharacterInfo from "./CharacterInfo/CharacterInfo";
import {getCharacter} from "../../actions/character";
import CharacterCreation from "./CharacterCreation/CharacterCreation";

import useStyles from "./styles";
import {CircularProgress} from "@mui/material";



const Character = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const userId = useSelector(state => state?.user?.authData?.result?.googleId || state?.user?.authData?.result?._id );
    const {characterData, isLoading} = useSelector(state => state?.character);

    useEffect(() => {
        // TODO fix a bug when after refreshing the page, CharacterInfo doesn't get properly fetched data from db (somehow works after second refresh)
        dispatch(getCharacter(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);



    return (
        isLoading
            ? <CircularProgress className={classes.circularProgress} size={100}/>
            :  (characterData
                ? <CharacterInfo character={characterData?.result}/>
                : <CharacterCreation userId={userId}/>)
    );
};

export default Character;



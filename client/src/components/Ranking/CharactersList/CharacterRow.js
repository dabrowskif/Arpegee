import React from 'react';
import {Grid, ListItemButton, ListItemText} from "@mui/material";

const CharacterRow = ({character}) => {


    return (
        <ListItemButton divider>
            <Grid item xs={12} sm={4}>
                <ListItemText>{character?.nickname}</ListItemText>
            </Grid>
            <Grid item xs={12} sm={4}>
                <ListItemText>{character?.level}</ListItemText>
            </Grid>
            <Grid item xs={12} sm={4}>
                <ListItemText>{character?.vocation}</ListItemText>
            </Grid>
        </ListItemButton>
    );
};

export default CharacterRow;

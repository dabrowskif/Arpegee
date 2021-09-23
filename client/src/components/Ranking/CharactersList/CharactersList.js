import React from 'react';
import useStyles from "./styles";
import CharacterRow from "./CharacterRow";
import {List, Paper, useTheme} from "@mui/material";

const CharacterList = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Paper elevation={5}>
            <List>
                <CharacterRow />
                <CharacterRow />
                <CharacterRow />
            </List>
        </Paper>
    );
};

export default CharacterList;

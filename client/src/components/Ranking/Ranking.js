import React from 'react';
import useStyles from "./styles";
import CharacterSnippet from "./CharactersList/CharactersList";
import CharacterFilter from "./CharactersFilter/CharactersFilter";
import {Container, Grid, Grow, useTheme} from "@mui/material";

const Ranking = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Grow in>
            <Container maxWidth="xl">
                    <Grid className={classes.mainGrid} container>
                        <Grid className={classes.filter} item xs={12} sm={4}>
                            <CharacterFilter />
                        </Grid>
                        <Grid className={classes.characters} item  xs={12} sm={8}>
                            <CharacterSnippet />
                        </Grid>
                    </Grid>
            </Container>
        </Grow>
    );
};

export default Ranking;

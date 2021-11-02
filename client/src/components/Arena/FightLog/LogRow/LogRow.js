import React from 'react';
import { Grid, Typography} from "@mui/material";

const LogRow = ( { roundNumber }) => {

    return (
        <Grid item xs={12} backgroundColor={setBackgroundColor(roundNumber)}>
            <Typography>Round {roundNumber}</Typography>
        </Grid>
    );
};

export default LogRow;


const setBackgroundColor = roundNumber => {
    // TODO make nice colors for display
    if (roundNumber % 2) {
        return 'RED'
        //return '#ebf6f9'
    } else {
        return '#FFFFFF'
        //return '#E8E8E8';
    }
}

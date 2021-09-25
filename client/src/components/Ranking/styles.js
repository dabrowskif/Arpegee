import {makeStyles} from "@mui/styles";

export default makeStyles( (theme) => ({
    mainGrid: {
        [theme.breakpoints.down('xs')]: {
            // flexDirection: "column-reverse",
        }
    },
    characters: {
        padding: theme.spacing(1),
    },
    filter: {
        padding: theme.spacing(1),
    },
    circularProgress: {
        display: "flex",
        margin: "auto",
    },
}));

import {makeStyles} from "@mui/styles";

export default makeStyles( (theme) => ({
    paper: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    mainGrid: {
        display: 'flex',
    },
    circularProgress: {
        display: "flex",
        margin: "auto",
    },
}));

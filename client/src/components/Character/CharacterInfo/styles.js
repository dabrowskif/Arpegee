import {makeStyles} from "@mui/styles";

export default makeStyles( (theme) => ({
    paper: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    form: {
    },
    typo: {
        textAlign: "center",
        paddingTop: theme.spacing(2),
    },
    formControl: {
        display: "flex",
        justifyContent: "center",
    },
    radioGroup: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    circularProgress: {
        display: "flex",
        margin: "auto",
    },
}));

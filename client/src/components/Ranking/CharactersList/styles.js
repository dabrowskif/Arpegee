import {makeStyles} from "@mui/styles";

export default makeStyles( (theme) => ({
    mainGrid: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column-reverse",
        }
    },
}));

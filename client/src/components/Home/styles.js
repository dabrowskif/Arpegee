import {makeStyles} from "@mui/styles";


const drawerWidth = 240;

export default makeStyles( (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
        /*if(getUserId(history)) {
            dispatch(getCharacter(userId, history));
        }*/
        // eslint-disable-next-line react-hooks/exhaustive-deps
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    mainPaper: {
        padding: theme.spacing(5),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

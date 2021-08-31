import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( (theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(1.5),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    signTitle: {
        marginBottom: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    googleSignIn: {
        marginTop: theme.spacing(2),
    },
    customSignIn: {
        margin: theme.spacing(2, 0, 1),
    }
}));

import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1.5),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
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
  },
  circularProgress: {
    display: 'flex',
    margin: 'auto',
  },
}));

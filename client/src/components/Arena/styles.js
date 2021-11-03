import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  titleGrid: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  resetRow: {
    marginTop: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  healthBar: {
    color: 'secondary.main',
  },
  title: {
    textAlign: 'center',
  },
}));

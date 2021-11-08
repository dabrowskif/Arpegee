import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  opponent: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
    border: 'solid 1px',
    borderColor: '#FFFFFF',
    borderRadius: '30px',
    backgroundColor: '#000000',
  },
  fightButton: {
    marginTop: theme.spacing(2),
  },
}));

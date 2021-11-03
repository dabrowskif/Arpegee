import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  nicknameTextField: {
    padding: theme.spacing(2),
  },
  mainGrid: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  typo: {
    textAlign: 'center',
    paddingTop: theme.spacing(2),
  },
  formControl: {
    display: 'flex',
    justifyContent: 'center',
  },
  radioGroup: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  levelRangeGrid: {
    padding: theme.spacing(2),
    justifyContent: 'center',
  },
  filterButton: {

    margin: theme.spacing(2, 0, 1.5),
  },
}));

import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  form: {
  },
  statisticsContainer: {
    marginTop: theme.spacing(1),
  },
  equipmentContainer: {
    marginTop: theme.spacing(1),
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonsMenu: {
    marginTop: theme.spacing(1),
  },
  circularProgress: {
    display: 'flex',
    margin: 'auto',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBot: theme.spacing(2),
  },
  infoIcon: {
  },
  row: {
    alignItems: 'center',
    display: 'flex',
  },
  rowJustify: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  infoDisplay: {
    marginLeft: theme.spacing(0.5),
  },
  hpBar: {
  },
}));

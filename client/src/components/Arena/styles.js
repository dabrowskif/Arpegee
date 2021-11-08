import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainGrid: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  paperPlayer: {
    height: '373px',
    padding: theme.spacing(2),
  },
  paperOpponents: {
    height: '100%',
  },
  paperMonsterDetails: {
    height: '186px',
  },
  paperPlayerActions: {
    height: '100%',
  },
  paperFightLogs: {
    marginTop: '16px',
    height: '608px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      backgroundColor: '#1A1A1D',
      width: '12px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'black',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#531516',
      borderRadius: '10px',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)',
    },
  },
  resetButton: {
    marginTop: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
}));

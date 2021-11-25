import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  opponent: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    border: 'solid 1px',
    borderColor: '#FFFFFF',
    borderRadius: '30px 0 30px 30px',
    backgroundColor: '#000000',
  },
  monsterAvatar: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  monsterAvatarGrid: {
    border: '1px solid #FFFFFF',
  },
  fightButton: {
    marginTop: theme.spacing(2),
  },
}));

import { makeStyles } from '@mui/styles';
// eslint-disable-next-line
import { getItemBorderColor } from '../../../../img/imgFunctions';

export default makeStyles((theme) => ({

  paperFightLogs: {
  },
  backpack: {
    padding: `0 ${theme.spacing(2)}`,
    [theme.breakpoints.up('md')]: {
      height: '205px',
    },
    [theme.breakpoints.down('md')]: {
      height: '205px',
    },
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
  backpackItem: {

  },
  // eslint-disable-next-line no-unused-vars
  backpackItemAvatar: (customStyleProps) => ({
    maxWidth: '100%',
    maxHeight: '100%',
    outline: `4px solid ${customStyleProps.outlineColor}`,
    outlineOffset: '-4px',
  }),
}));

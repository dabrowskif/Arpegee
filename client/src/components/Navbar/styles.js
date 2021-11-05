import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.secondary.dark,
    padding: '0px',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandContainer: {
    paddingLeft: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer__icon: {
    margin: '5px 0 0 5px',
    color: 'inherit',
  },
  brandContainer__title: {
    padding: '3px 0 0 20px',
  },
  brandContainer__profile: {
    display: 'flex',
    marginLeft: '40px',
  },
  brandContainer__profile__avatar: {
  },
  brandContainer__profile__name: {
    padding: '5px 0 0 10px',
  },
  navbar: {
    paddingRight: '20px',
    justifyContent: 'space-between',
  },
  navbar__menu: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  navbar__menu__item: {
  },
  navbar__menu__icon: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sidebar: {
  },
  sidebar__menu: {
  },
  sidebar__menu__item: {
  },
  menu__item_icon: {
    color: 'inherit',
  },
  menu__item_text: {
  },
}));

import React, { useEffect, useState } from 'react';
import decode from 'jwt-decode';
import MenuIcon from '@mui/icons-material/Menu';

import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  AppBar, Avatar, IconButton, SwipeableDrawer, Toolbar, Typography,
} from '@mui/material';
import GamepadIcon from '@mui/icons-material/Gamepad';
import Menu from './Menu.js';
import { LOGOUT, LOGOUT_CHARACTER } from '../../constants/actionTypes.js';
import useStyles from './styles.js';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsSidebarOpened(isOpen);
  };

  const logout = () => {
    setUser(null);
    setIsSidebarOpened(false);
    dispatch({ type: LOGOUT });
    dispatch({ type: LOGOUT_CHARACTER });
    history.push('/auth');
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar}>
      <div className={classes.brandContainer}>
        <IconButton className={classes.brandContainer__icon} component={Link} to="/">
          {' '}
          <GamepadIcon />
          {' '}
        </IconButton>
        <Typography variant="h6" className={classes.brandContainer__title}> Arpegee </Typography>
        {
                    user?.result
                      ? (
                        <div className={classes.brandContainer__profile}>
                          <Avatar className={classes.brandContainer__profile__avatar} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                          <Typography className={classes.brandContainer__profile__name} variant="h6">{user?.result.name}</Typography>
                        </div>
                      )
                      : null
                }
      </div>
      <Toolbar className={classes.navbar}>
        <Menu
          className={classes.navbar__menu}
          itemClassName={classes.navbar__menu__item}
          user={user}
          logout={logout}
          toggleDrawer={toggleDrawer(false)}
        />
        <IconButton className={classes.navbar__menu__icon} onClick={toggleDrawer(true)}>
          {' '}
          <MenuIcon />
          {' '}
        </IconButton>
      </Toolbar>
      <SwipeableDrawer
        className={classes.sidebar}
        anchor="right"
        open={isSidebarOpened}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Menu
          className={classes.sidebar__menu}
          itemClassName={classes.sidebar__menu__item}
          user={user}
          logout={logout}
          toggleDrawer={toggleDrawer(false)}
        />
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;

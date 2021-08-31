import React, {useEffect, useState} from 'react';
import {AppBar, Avatar, Icon, IconButton, SwipeableDrawer, Toolbar, Typography, useTheme
} from "@material-ui/core";
import decode from 'jwt-decode';
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from './styles';
import {Chat} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import {useHistory, useLocation} from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const theme = useTheme();
    const classes = useStyles(theme);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    const toggleDrawer = (isOpen) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsSidebarOpened(isOpen);
    };

    const logout = () => {
        if(isSidebarOpened) setIsSidebarOpened(false);
        dispatch({ type: LOGOUT });
        history.push('/auth');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    return (
        <AppBar className={classes.appBar}>
            <div className={classes.brandContainer}>
                <Icon className={classes.brandContainer__icon}> <Chat/> </Icon>
                <Typography variant="h6" className={classes.brandContainer__title}> Arpeegee </Typography>
                {
                    user?.result
                    ? (
                        <div className={classes.brandContainer__profile}>
                            <Avatar className={classes.brandContainer__profile__avatar} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.brandContainer__profile__name} variant="h6">{user?.result.name}</Typography>
                        </div> )
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
                <IconButton className={classes.navbar__menu__icon} onClick={toggleDrawer(true)}> <MenuIcon/> </IconButton>
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

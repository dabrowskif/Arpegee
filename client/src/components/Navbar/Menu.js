import React from 'react';


import Item from "./Item";
import {List} from "@mui/material";
import {AccountBalance, ExitToApp, Info, SportsKabaddi, VpnKey} from "@mui/icons-material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FaceIcon from '@mui/icons-material/Face';


const Menu = ( {user, logout, toggleDrawer, className, itemClassName } ) => {
    return (
        <>
            {
                user?.result
                    ? (
                        <List className={className}>
                            <Item className={itemClassName} text="Home" to="/" icon={<Info />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Character" to="/character" icon={<FaceIcon />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Talents" to="/talents" icon={<MenuBookIcon />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Battle" to="/battle" icon={<SportsKabaddi />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Ranking" to="/ranking" icon={<AccountBalance />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Logout" to="/auth" icon={<ExitToApp />} onClick={logout}/>
                        </List> )
                    : (
                        <List className={className}>
                            <Item className={itemClassName} text="Home" to="/" icon={<Info />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Ranking" to="/ranking" icon={<AccountBalance />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Sign In" to="/auth" icon={<VpnKey />} onClick={toggleDrawer}/>
                        </List>)
            }
        </>
    );
};

export default Menu;

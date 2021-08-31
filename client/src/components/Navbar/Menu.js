import React from 'react';
import {List} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import Item from "./Item";


const Menu = ( {user, logout, toggleDrawer, className, itemClassName } ) => {
    return (
        <>
            {
                user?.result
                    ? (
                        <List className={className}>
                            <Item className={itemClassName} text="Info" to="/info" icon={<InfoIcon />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Talents" to="/talents" icon={<MenuBookIcon />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Battle" to="/battle" icon={<SportsKabaddiIcon />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Ranking" to="/ranking" icon={<AccountBalanceIcon />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Logout" to="/auth" icon={<ExitToAppIcon />} onClick={logout}/>
                        </List>
                    )
                    : (
                        <List className={className}>
                            <Item className={itemClassName} text="Ranking" to="/ranking" icon={<AccountBalanceIcon />} onClick={toggleDrawer}/>
                            <Item className={itemClassName} text="Sign In" to="/auth" icon={<VpnKeyIcon />} onClick={toggleDrawer}/>
                        </List>
                    )
            }
        </>
    );
};

export default Menu;

import React from 'react';
import {Link} from "react-router-dom";
import useStyles from "./styles";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";

const Item = ({ text, to, className, onClick = null, icon}) => {
    const classes = useStyles();

    return (
        <ListItem
            className={className}
            button
            component={Link}
            key={text}
            to={to}
            divider
            onClick={onClick}
        >
            <ListItemIcon className={classes.menu__item_icon}> {icon} </ListItemIcon>
            <ListItemText className={classes.menu__item_text} primary={text} />
        </ListItem>
    );
};

export default Item;

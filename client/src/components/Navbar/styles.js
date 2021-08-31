import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( (theme) => ({
    appBar: {
        padding: "0px",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    brandContainer: {
        paddingLeft: "20px",
        display: "flex",
        alignItems: "center",
    },
    brandContainer__icon: {
        padding: "5px 0 0 20px",
        color: "inherit",
    },
    brandContainer__title: {
        padding: "3px 0 0 20px"
    },
    brandContainer__profile: {
        display: 'flex',
        marginLeft: "40px",
    },
    brandContainer__profile__avatar: {
    },
    brandContainer__profile__name: {
        padding: "5px 0 0 10px",
    },
    navbar: {
        paddingRight: "20px",
        justifyContent: "space-between",
    },
    navbar__menu: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    },
    navbar__menu__item: {
    },
    navbar__menu__icon: {
        color: "inherit",
        display: "flex",
        [theme.breakpoints.up('md')]: {
            display: "none",
        }
    },
    sidebar: {
    },
    sidebar__menu: {
    },
    sidebar__menu__item: {
    },
    menu__item_icon: {
        color: "inherit",
        // background: "red",
    },
    menu__item_text: {
        // background: "blue",
    }
}));

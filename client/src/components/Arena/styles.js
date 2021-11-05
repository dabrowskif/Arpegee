import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    // border: '75px solid transparent',
    // borderImage: `url(${mainBorder}) 150 round`,
    // backgroundColor: '#624121',
    // backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\' viewBox=\'0 0 1200 800\'%3E%3Cdefs%3E%3CradialGradient id=\'a\' cx=\'0\' cy=\'800\' r=\'800\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop offset=\'0\' stop-color=\'%235e3f1f\'/%3E%3Cstop offset=\'1\' stop-color=\'%235e3f1f\' stop-opacity=\'0\'/%3E%3C/radialGradient%3E%3CradialGradient id=\'b\' cx=\'1200\' cy=\'800\' r=\'800\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop offset=\'0\' stop-color=\'%236b4724\'/%3E%3Cstop offset=\'1\' stop-color=\'%236b4724\' stop-opacity=\'0\'/%3E%3C/radialGradient%3E%3CradialGradient id=\'c\' cx=\'600\' cy=\'0\' r=\'600\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop offset=\'0\' stop-color=\'%23674522\'/%3E%3Cstop offset=\'1\' stop-color=\'%23674522\' stop-opacity=\'0\'/%3E%3C/radialGradient%3E%3CradialGradient id=\'d\' cx=\'600\' cy=\'800\' r=\'600\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop offset=\'0\' stop-color=\'%23624121\'/%3E%3Cstop offset=\'1\' stop-color=\'%23624121\' stop-opacity=\'0\'/%3E%3C/radialGradient%3E%3CradialGradient id=\'e\' cx=\'0\' cy=\'0\' r=\'800\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop offset=\'0\' stop-color=\'%235A3C1E\'/%3E%3Cstop offset=\'1\' stop-color=\'%235A3C1E\' stop-opacity=\'0\'/%3E%3C/radialGradient%3E%3CradialGradient id=\'f\' cx=\'1200\' cy=\'0\' r=\'800\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop offset=\'0\' stop-color=\'%23744D27\'/%3E%3Cstop offset=\'1\' stop-color=\'%23744D27\' stop-opacity=\'0\'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill=\'url(%23a)\' width=\'1200\' height=\'800\'/%3E%3Crect fill=\'url(%23b)\' width=\'1200\' height=\'800\'/%3E%3Crect fill=\'url(%23c)\' width=\'1200\' height=\'800\'/%3E%3Crect fill=\'url(%23d)\' width=\'1200\' height=\'800\'/%3E%3Crect fill=\'url(%23e)\' width=\'1200\' height=\'800\'/%3E%3Crect fill=\'url(%23f)\' width=\'1200\' height=\'800\'/%3E%3C/svg%3E")',
    // backgroundAttachment: 'fixed',
    // backgroundSize: 'cover',
  },
  titleGrid: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  resetRow: {
    marginTop: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  healthBar: {
    color: 'secondary.main',
  },
  title: {
    textAlign: 'center',
  },
}));

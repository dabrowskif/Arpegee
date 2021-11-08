import { createTheme } from '@mui/material';

const font = "'Rubik', sans-serif";

const PRIMARY_LIGHT = '#D1D1D1';
const PRIMARY_MAIN = '#1A1A1D';
const PRIMARY_DARK = '#1A1A1D';
const PRIMARY_CONTRAST = '#FFFFFF';

const SECONDARY_LIGHT = '#C3073F';
const SECONDARY_MAIN = '#6F2232';
const SECONDARY_DARK = '#531516';
const SECONDARY_CONTRAST = '#FFFFFF';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      // arena: 1700,
    },
  },
  typography: {
    textColor: PRIMARY_CONTRAST,
    fontFamily: font,
  },
  components: {
    MuiTypography: {
      color: PRIMARY_CONTRAST,
      fontFamily: font,
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: PRIMARY_CONTRAST,
          '&.Mui-checked': {
            color: PRIMARY_CONTRAST,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          '&::before': {
            borderTop: 'thin solid white',
          },
          '&::after': {
            borderTop: 'thin solid white',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        divider: {
          borderColor: SECONDARY_DARK,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: PRIMARY_CONTRAST,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: PRIMARY_MAIN,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marginTop: '0px',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: PRIMARY_CONTRAST,
            backgroundColor: SECONDARY_DARK,
            ':hover': {
              backgroundColor: SECONDARY_MAIN,
            },
          },
        },
        previousNext: {
          backgroundColor: SECONDARY_DARK,
          ':hover': {
            backgroundColor: SECONDARY_MAIN,
          },
        },
        outlined: {
          borderColor: SECONDARY_DARK,
          ':hover': {
            backgroundColor: SECONDARY_DARK,
          },
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            '& label': {
              color: PRIMARY_CONTRAST,
            },
            '& label.Mui-focused': {
              color: PRIMARY_CONTRAST,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: SECONDARY_DARK,
              },
              '&:hover fieldset': {
                borderColor: SECONDARY_MAIN,
              },
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'text', color: 'primary' },
          style: {
            backgroundColor: PRIMARY_MAIN,
            color: PRIMARY_CONTRAST,
            border: 'solid 1px',
            borderColor: PRIMARY_MAIN,
            ':hover': {
              border: 'solid 1px',
              borderRadius: '7px',
              borderColor: PRIMARY_CONTRAST,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: SECONDARY_DARK,
            ':hover': {
              backgroundColor: SECONDARY_MAIN,
            },
          },
        },
      ],

    },
  },
  palette: {
    text: {
      primary: PRIMARY_CONTRAST,
    },
    primary: {
      light: PRIMARY_LIGHT,
      main: PRIMARY_MAIN,
      dark: PRIMARY_DARK,
      contrastText: PRIMARY_CONTRAST,
    },
    secondary: {
      light: SECONDARY_LIGHT,
      main: SECONDARY_MAIN,
      dark: SECONDARY_DARK,
      contrastText: SECONDARY_CONTRAST,
    },
  },
});

export default theme;

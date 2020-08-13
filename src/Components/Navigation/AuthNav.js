import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const AuthNav = () => (
  <>
    <NavLink exact to="/register" className="headerLink verticalBar" activeClassName="activeHeaderLink">
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Sign in
        </Button>
      </ThemeProvider>
    </NavLink>
    <NavLink exact to="/login" className="headerLink" activeClassName="activeHeaderLink">
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Log in
        </Button>
      </ThemeProvider>
    </NavLink>
  </>
);

export default AuthNav;

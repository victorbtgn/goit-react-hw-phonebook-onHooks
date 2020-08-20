import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOps from '../../redux/auth/auth-operations';

import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogout = () => {
    dispatch(authOps.logout());
  };

  return (
    <>
      <span className="verticalBar">Welcome {name}</span>
      <ThemeProvider theme={theme}>
        <Button onClick={onLogout} variant="contained" size="small" color="primary">
          Log out
        </Button>
      </ThemeProvider>
    </>
  );
}

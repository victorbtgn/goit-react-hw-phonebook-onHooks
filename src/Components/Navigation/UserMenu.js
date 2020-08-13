import React from 'react';
import { connect } from 'react-redux';
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

const UserMenu = ({ name, onLogout }) => (
  <>
    <span className="verticalBar">Welcome {name}</span>
    <ThemeProvider theme={theme}>
      <Button onClick={onLogout} variant="contained" size="small" color="primary">
        Log out
      </Button>
    </ThemeProvider>
  </>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOps.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../../Components/Navigation/Navigation';
import ToolbarTheme from '../../Components/ToolbarTheme/ToolbarTheme';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import SimpleMenu from '../../Components/SimpleMenu/SimpleMenu';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import authSelectors from '../../redux/auth/auth-selectors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarView = ({ isLoading }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <SimpleMenu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Phonebook
            </Typography>
            <ToolbarTheme />
            <Navigation />
          </Toolbar>
        </AppBar>
      </div>

      {isLoading && (
        <div className="auth-loader">
          <Loader type="TailSpin" color="#dae1f8" width={100} height={100} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: authSelectors.getIsLoading(state),
});

export default connect(mapStateToProps)(AppBarView);

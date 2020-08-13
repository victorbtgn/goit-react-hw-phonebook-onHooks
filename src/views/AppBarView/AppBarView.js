import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import ToolbarTheme from '../../Components/ToolbarTheme/ToolbarTheme';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import SimpleMenu from '../../Components/SimpleMenu/SimpleMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarView = () => {
  const classes = useStyles();

  return (
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
  );
};

export default AppBarView;

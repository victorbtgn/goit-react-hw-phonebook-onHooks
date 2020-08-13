import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { changeTheme } from '../../redux/auth/auth-actions';
import authSelectors from '../../redux/auth/auth-selectors';

const AntSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#6379f8',
        opacity: 1,
        border: `1px solid #fff`,
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: '#777',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
}))(Switch);

const CustomizedSwitches = ({ checked, onChangeTheme }) => {
  if (checked) {
    handleTheme(checked);
  }

  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = event => {
    onChangeTheme(event.target.checked);
    handleTheme(event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="switchTheme">
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="sun"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="themeSwitchIcon"
            >
              <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
            </svg>
          </Grid>
          <Grid item>
            <AntSwitch checked={checked} onChange={handleChange} name="checked" />
          </Grid>
          <Grid item>
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="moon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="themeSwitchIcon"
            >
              <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
            </svg>
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
};

const handleTheme = checked => {
  const body = document.querySelector('body');
  if (!checked) {
    body.classList.add('bodyLigth');
    body.classList.remove('bodyDark');
  } else {
    body.classList.add('bodyDark');
    body.classList.remove('bodyLigth');
  }
};

const mapStateToProps = state => ({
  checked: authSelectors.getTheme(state),
});

const mapDispatchToProps = {
  onChangeTheme: e => changeTheme(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedSwitches);

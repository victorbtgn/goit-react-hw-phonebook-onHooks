import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <NavLink exact to="/" className="menuLink" activeClassName="activeMenuLink">
            <HomeIcon />
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink exact to="/contacts" className="menuLink" activeClassName="activeMenuLink">
            Contacts
          </NavLink>
        </MenuItem>
      </Menu>
    </>
  );
}

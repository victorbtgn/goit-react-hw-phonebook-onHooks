import React from 'react';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => <nav>{isAuthenticated ? <UserMenu /> : <AuthNav />}</nav>;

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);

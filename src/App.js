import React, { Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBarView from './views/AppBarView/AppBarView';
import Container from './Common/Container';
import routes from './routes';

import ContactsView from './views/ContactsView/ContactsView';
import HomePage from './Components/HomePage/HomePage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import LoginPage from './Components/LoginPage/LoginPage';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

import authOps from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

import { Spring } from 'react-spring/renderprops';
import './App.css';

function App({ isLoading, getCurrentUser }) {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Container>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 2000 }}>
        {props => (
          <div style={props}>
            <AppBarView />

            {!isLoading && (
              <Suspense fallback={null}>
                <Switch>
                  <Route exact path={routes.home} component={HomePage} />
                  <PublicRoute path={routes.register} restricted redirectTo={routes.home} component={RegisterPage} />
                  <PublicRoute path={routes.login} restricted redirectTo={routes.contacts} component={LoginPage} />
                  <PrivateRoute path={routes.contacts} redirectTo={routes.login} component={ContactsView} />
                  <Route component={HomePage} />
                </Switch>
              </Suspense>
            )}
          </div>
        )}
      </Spring>
    </Container>
  );
}

const mapStateToProps = state => ({
  isLoading: authSelectors.getIsLoading(state),
});

const mapDispatchToProps = {
  getCurrentUser: authOps.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

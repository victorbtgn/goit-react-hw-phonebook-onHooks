const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getAuthError = state => state.auth.error;

const getTheme = state => state.auth.bgTheme;

export default { getIsAuthenticated, getUserName, getAuthError, getTheme };

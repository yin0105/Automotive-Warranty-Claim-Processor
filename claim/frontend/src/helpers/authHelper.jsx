import {store} from '../redux/store.jsx';
import ApiHelper from './apiHelper.jsx';

class AuthHelper {
  login = (email, password) => {
    return ApiHelper.post('/api/auth/token/login', {email, password}, {}, false);
  };

  register = (firstName, lastName, email, password) => {
    return ApiHelper.post('/api/auth/register', {firstName, lastName, email, password}, {}, false);
  };

  refreshToken = data => {
    return ApiHelper.post('/api/auth/token/refresh', data, {}, false);
  };

  getUserInfo = () => {
    return ApiHelper.get('/api/accounts/data/');
  };

  getAccessToken = () => {
    let state = store.getState();
    if (state.auth.access) {
      return state.auth.access.token;
    }
    return null;
  };

  getRefreshToken = () => {
    let state = store.getState();
    if (state.auth.refresh) {
      return state.auth.refresh.token;
    }
    return null;
  };

  isAccessTokenExpired = state => {
    if (state.access && state.access.exp) {
      return 1000 * state.access.exp - (new Date()).getTime() < 5000;
    }
    return true;
  };

  isRefreshTokenExpired = state => {
    if (state.refresh && state.refresh.exp) {
      return 1000 * state.refresh.exp - (new Date()).getTime() < 5000;
    }
    return true;
  };

  isAuthenticated = () => {
    let state = store.getState();
    if (state && state.auth && state.auth.user) {
      return true;
    } else {
      return false;
    }
  };

  isSuperAdmin = () => {
    let state = store.getState();
    if (state && state.auth && state.auth.user && state.auth.user.role == "super_admin") {
      return true;
    } else {
      return false;
    }
  };

  updateProfile = profile => {
    return ApiHelper.put('/api/auth/user', profile);
  }

  getClaimTypeList = () => {
    return ApiHelper.get('/api/accounts/data/');
  };

  getSubmissionTypeList = () => {
    return ApiHelper.get('/api/accounts/data/');
  };

  getServiceAdvisorList = () => {
    return ApiHelper.get('/api/accounts/data/');
  };

  getTechnicianList = () => {
    return ApiHelper.get('/api/accounts/data/');
  };
}

export default new AuthHelper();


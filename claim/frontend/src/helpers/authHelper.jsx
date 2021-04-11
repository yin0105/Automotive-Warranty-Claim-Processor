import {store} from '../redux/store.jsx';
import ApiHelper from './apiHelper.jsx';

class AuthHelper {
  login = (email, password) => {
    console.log(email);
    console.log(password);
    var aa = ApiHelper.post('/api/auth/token/login/', {email, password}, {}, false);
    console.log('res in AuthHelper', aa);
    return aa;
    // return ApiHelper.post('/api/auth/token/login', {email, password}, {}, false);
  };

  register = (firstName, lastName, email, password) => {
    console.log("register");
    return ApiHelper.post('/api/auth/register', {firstName, lastName, email, password}, {}, false);
  };

  refreshToken = data => {
    console.log("refreshToken");
    return ApiHelper.post('/api/auth/token/refresh', data, {}, false);
  };

  getUserInfo = () => {
    console.log("getUserInfo");
    return ApiHelper.get('/api/accounts/data/');
  };

  getAccessToken = () => {
    console.log("getAccessToken");
    let state = store.getState();
    if (state.auth.access) {
      return state.auth.access.token;
    }
    return null;
  };

  getRefreshToken = () => {
    console.log("getRefreshToken");
    let state = store.getState();
    if (state.auth.refresh) {
      return state.auth.refresh.token;
    }
    return null;
  };

  isAccessTokenExpired = state => {
    console.log("isAccessTokenExpired");
    if (state.access && state.access.exp) {
      return 1000 * state.access.exp - (new Date()).getTime() < 5000;
    }
    return true;
  };

  isRefreshTokenExpired = state => {
    console.log("isRefreshTokenExpired");
    try{
      if (state.refresh && state.refresh.exp) {
        return 1000 * state.refresh.exp - (new Date()).getTime() < 5000;
      }
      console.log("OK ?");
    } catch {
      console.log("isrefreshtoken Error");
    }
    return true;
  };

  isAuthenticated = () => {
    let state = store.getState();
    console.log("isAuthenticated = state =>");
    console.log("state => ", state);
    // return !this.isRefreshTokenExpired(state);
    if (state && state.auth && state.auth.user) {
      return true;
    } else {
      return false;
    }
  };

  isSuperAdmin = () => {
    let state = store.getState();
    console.log("isSuperAdmin = state =>");
    console.log("state => ", state);
    // return !this.isRefreshTokenExpired(state);
    if (state && state.auth && state.auth.user && state.auth.user.role == "super_admin") {
      return true;
    } else {
      return false;
    }
  };

  updateProfile = profile => {
    console.log("updateProfile");
    return ApiHelper.put('/api/auth/user', profile);
  }

}

export default new AuthHelper();


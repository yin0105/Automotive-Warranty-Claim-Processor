/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/sass/light-bootstrap-dashboard-pro-react.scss?v=1.2.0";
import "assets/css/demo.css";
import "assets/css/pe-icon-7-stroke.css";

import AuthLayout from "layouts/Auth.jsx";
import AdminLayout from "layouts/Admin.jsx";
import DealershipLayout from "layouts/Dealership.jsx";
import UserLayout from "layouts/User.jsx";

import { ConnectedRouter  } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor, history} from './redux/store.jsx';
import ReduxToastr from 'react-redux-toastr'

// import CollectionList from "views/Collections/CollectionList"

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter  history={history}>
        <React.Fragment>
          <Switch>
            <Route path="/frontend/auth" render={props => <AuthLayout {...props} />} />
            <Route path="/frontend/admin" render={props => <AdminLayout {...props} />} />
            <Route path="/frontend/dealership" render={props => <DealershipLayout {...props} />} />
            <Route path="/frontend/user" render={props => <UserLayout {...props} />} />
            <Redirect from="/" to="/frontend/auth/login-page" />
          </Switch>
          <ReduxToastr timeOut={3000} transitionIn="fadeIn" transitionOut="fadeOut"/>
        </React.Fragment>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <Layout>
//         <Switch>
//           <Route path="/auth" render={props => <AuthLayout {...props} />} />
//           <Route path="/admin" render={props => <AdminLayout {...props} />} />
//           <Route path="/user" render={props => <UserLayout {...props} />} />
//           {/* <Route path="/add_collection" render={props => <CollectionList {...props} />} /> */}
//           <Redirect from="/" to="/frontend/admin/dashboard" />
//         </Switch>
//       </Layout>
//     </Router>
//   </Provider>, document.getElementById("root")
//                 {/* <Switch>
//                     <Route exact path='/' component={Home} />
//                     <Route exact path='/login' component={Login} />
//                     <Route exact path='/signup' component={Signup} />
//                     <Route exact path='/facebook' component={Facebook} />
//                     <Route exact path='/google' component={Google} />
//                     <Route exact path='/reset-password' component={ResetPassword} />
//                     <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
//                     <Route exact path='/activate/:uid/:token' component={Activate} />
//                 </Switch> */}
                
    

//   {/* <HashRouter>
//     <Switch>
//       <Route path="/auth" render={props => <AuthLayout {...props} />} />
//       <Route path="/admin" render={props => <AdminLayout {...props} />} />
//       <Route path="/user" render={props => <UserLayout {...props} />} />
//       <Redirect from="/" to="/frontend/admin/dashboard" />
//     </Switch>
//   </HashRouter>, */}
  
// );

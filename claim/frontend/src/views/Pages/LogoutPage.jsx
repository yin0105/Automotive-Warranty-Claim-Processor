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
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Form,
} from "react-bootstrap";
import { FormFeedback } from "reactstrap";
import { Link, Redirect } from 'react-router-dom';

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";
import { logout, getUserInfo } from 'redux/actions/auth.jsx';
import {connect} from "react-redux";
import AuthHelper from 'helpers/authHelper.jsx';
import {validateEmail} from 'helpers/commonHelper.jsx';

class LogoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true,
      errors: {
        email: '',
        password: ''
      }
    };
  }
  componentDidMount() {
    this.props.logout();
      // .catch(err => {
      //   console.log("Logout Error:::");
      //   console.log(err.response);
      // });
  };

  
  render() {
    if (this.props.isAuthenticated) {
      return ("");
      // (
      // <Container>
      //   <Row>
      //       <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
      //         <Form onSubmit={this.handleLogin}>
      //           <Card
      //             hidden={this.state.cardHidden}
      //             textCenter
      //             title="Login"
      //             content={
      //               <div>
      //                 <FormGroup>
      //                   <FormLabel>Email address</FormLabel>
      //                   <FormControl placeholder="Enter email" type="email" name="email"  onChange={this.handleChangeInput}/>
      //                 </FormGroup>
      //                 <FormGroup>
      //                   <FormLabel>Password</FormLabel>
      //                   <FormControl placeholder="Password" type="password" name="password" autoComplete="off"/>
      //                 </FormGroup>
      //               </div>
      //             }
      //             legend={
      //               <FormGroup>
      //                 <Button variant="primary" fill wd type="submit">
      //                   Login
      //                 </Button>
      //                 <FormText className="text-dark">Don't you have an account? <Link to="/frontend/auth/register-page"> Register</Link></FormText>
      //               </FormGroup>
      //             }
      //             ftTextCenter
      //           />
      //         </Form>
      //       </Col>
      //     </Row>
      // </Container>
      // );
    } else {
      return (
        <Redirect to='/frontend/auth/login-page'/>
      );
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: AuthHelper.isAuthenticated(),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});




export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);

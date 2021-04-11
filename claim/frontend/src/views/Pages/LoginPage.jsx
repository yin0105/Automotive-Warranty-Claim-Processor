
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
import { login, getUserInfo } from 'redux/actions/auth.jsx';
import {connect} from "react-redux";
import AuthHelper from 'helpers/authHelper.jsx';
import {validateEmail} from 'helpers/commonHelper.jsx';

class LoginPage extends Component {
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
    setTimeout(
      function() {
        this.setState({ cardHidden: false });
      }.bind(this),
      700
    );
  }

  handleLogin = e => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    let errors = this.state.errors;
    const queryString = require('query-string');
    let parsed = queryString.parse(this.props.location.search);

    if (email === '') {
      errors.email = 'Email is required';
      this.setState({errors});
      return;
    }

    if (!validateEmail(email)) {
      errors.email = 'Email is invalid.';
      this.setState({errors});
      return;
    }

    if (password === '') {
      errors.password = 'Password is required';
      this.setState({errors});
      return;
    }


    this.props.login(email, password)
      .then(
        () => {
          this.props.get_userinfo()
            .then(
              () => {
                console.log("######## get_userinfo() :: Success");
              }
            ).catch(
              err => {
                console.log("Get UserInfo Error");
              }

            );
        }
      ).catch(err => {
        console.log("Login Error:::");
        console.log(err.response);
        // if (err.response.data.non_field_errors[0] === 'register') {
        //   toastr.error('Login Failed!', 'Please register');
        //   this.props.history.push('/register')
        // }else if (err.response.data.non_field_errors[0] === 'email') {
        //   toastr.error('Login Failed!', 'Please verify your email address');
        //   // this.props.history.push('/login/email_verification')
        // }else if (err.response.data.non_field_errors[0] === 'password') {
        //   toastr.error('Login Failed!', 'Invalid password');
        //   this.props.history.push('/login')
        // }
      });

    
  };

  handleChangeInput = e => {
    let errors = this.state.errors;
    if (errors[e.target.name] !== '') {
      errors[e.target.name] = '';
      this.setState(errors); 
    }
  };

  
  render() {
    if (this.props.isAuthenticated) {
      if (this.props.isSuperAdmin) {
        return (
          <Redirect to='/frontend/admin/dashboard'/>
        );
      } else {
        return (
          <Redirect to='/frontend/dealership/dashboard'/>
        )
      }
    } else {
      let {errors} = this.state;
      return (
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
              <Form onSubmit={this.handleLogin}>
                <Card
                  hidden={this.state.cardHidden}
                  textCenter
                  title="Login"
                  content={
                    <div>
                      <FormGroup>
                        <FormLabel>Email address</FormLabel>
                        <FormControl placeholder="Enter email" type="email" name="email"  onChange={this.handleChangeInput}/>
                        <FormFeedback className="text-danger">{errors.email}</FormFeedback>
                      </FormGroup>
                      <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl placeholder="Password" type="password" name="password" autoComplete="off"/>
                      </FormGroup>
                    </div>
                  }
                  legend={
                    <FormGroup>
                      <Button variant="primary" fill wd type="submit">
                        Login
                      </Button>
                      <FormText className="text-dark">Don't you have an account? <Link to="/frontend/auth/register-page"> Register</Link></FormText>
                    </FormGroup>
                  }
                  ftTextCenter
                />
              </Form>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: AuthHelper.isAuthenticated(),
  isSuperAdmin: AuthHelper.isSuperAdmin()
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
  get_userinfo: () => dispatch(getUserInfo()),
});



export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

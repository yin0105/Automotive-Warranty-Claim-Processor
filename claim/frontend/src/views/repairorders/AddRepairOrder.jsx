
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormLabel,
  FormControl,
  Form,
} from "react-bootstrap";


import Button from "components/CustomButton/CustomButton.jsx";
import Select from 'react-select'
import { useSelector } from 'react-redux'
import {connect} from "react-redux"

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


// export const SelectClaimType = () => {
//     const old_options = useSelector(state => state.auth.claim_types.claim_types)
//     let new_options = []
//     for (const i in old_options) {
//         let option = {}
//         option["value"] = old_options[i].name
//         option["label"] = old_options[i].name
//         new_options.push(option)
//     };

//     // handleClaimTypeChange = (e) => {
//     //   this.setState({claim_type: e.value})
//     //   console.log("claim_type", this.state.claim_type)
//     // }
//     // onChange={e => {
//     //   console.log("changed", e.target.value);

   
//     return <Select options={new_options} />
// }

// export const SelectSubmissionType = () => {
//     const old_options = useSelector(state => state.auth.submission_types.submission_types)
//     let new_options = []
//     for (const i in old_options) {
//         let option = {}
//         option["value"] = old_options[i].name
//         option["label"] = old_options[i].name
//         new_options.push(option)
//     }
//     return <Select options={new_options} />
// }

// export const SubmissionTypes = () => {
//   const old_options = useSelector(state => state.auth.submission_types.submission_types)
//   const new_options = old_options.map(d => ({
//     "value" : d.name,
//     "label" : d.name
//   }))

//   return <Select options={new_options} onChange={(value) => {
//     console.log("########## ok", value);
//   }} />
// }

// export const SelectServiceAdvisor = () => {
//     const old_options = useSelector(state => state.auth.service_advisors.service_advisor)
//     let new_options = []
//     for (const i in old_options) {
//         let option = {}
//         option["value"] = old_options[i].id
//         option["label"] = old_options[i].name
//         new_options.push(option)
//     }
//     return <Select options={new_options} />
// }

// export const SelectTechnician = () => {
//     const old_options = useSelector(state => state.auth.technicians.technicians)
//     let new_options = []
//     for (const i in old_options) {
//         let option = {}
//         option["value"] = old_options[i].id
//         option["label"] = old_options[i].name
//         new_options.push(option)
//     }
//     return <Select options={new_options} />
// }

class AddRepairOrder extends Component {
  constructor(props){
    super(props)
    this.state = {
      repair_order: -1,
      pdf: '',
      dealership: '',
      claim_type: [],
      submission_type: [],
      service_advisor: [],
      technician: [],
    }
  }

  handleClaimTypeChange = (claim_type) => {
    this.setState({ claim_type });
    console.log(this.state)
    console.log(claim_type)
  }

  handleSubmissionTypeChange = (submission_type) => {
    this.setState({ submission_type });
    console.log(this.state)
    console.log(submission_type)
  }

  handleServiceAdvisorChange = (service_advisor) => {
    this.setState({ service_advisor });
    console.log(this.state)
    console.log(service_advisor)
  }

  handleTechnicianChange = (technician) => {
    this.setState({ technician });
  }

  // componentDidMount() {
  //   this.getOptions()
  // }

  // async getOptions() {
  //   const old_options = await useSelector(state => state.auth.submission_types.submission_types)

  //   const options = old_options.map(d => ({
  //     "value" : d.name,
  //     "label" : d.name
  //   }))
  //   this.setState({claim_type_list: options})
  // }

  // handleClaimTypeChange(e){
  //   this.setState({claim_type: e.value})
  //   console.log("claim_type", this.state.claim_type)
  // }

  // handleSubmissionTypeChange(e){
  //   this.setState({"submission_type": e.value})
  // }

  // handleSubmissionTypeChange(e){
  //   this.setState({"submission_type": e.value})
  // }

  // handleSubmissionTypeChange(e){
  //   this.setState({"submission_type": e.value})
  // }


  
  
  handleUpload = e => {
    e.preventDefault();

    console.log("claim_type: ", this.state.claim_type)
    console.log("submission_type: ", this.state.submission_type)
    console.log("service_advisor: ", this.state.service_advisor)
    console.log("technician: ", this.state.technician)

    // let email = e.target.elements.email.value;
    // let password = e.target.elements.password.value;
    // let errors = this.state.errors;
    // const queryString = require('query-string');
    // let parsed = queryString.parse(this.props.location.search);

    // if (email === '') {
    //   errors.email = 'Email is required';
    //   this.setState({errors});
    //   return;
    // }

    // if (!validateEmail(email)) {
    //   errors.email = 'Email is invalid.';
    //   this.setState({errors});
    //   return;
    // }

    // if (password === '') {
    //   errors.password = 'Password is required';
    //   this.setState({errors});
    //   return;
    // }

    // this.props.login(email, password)
    //   .catch(err => {
    //     // console.log(err.response.data.non_field_errors[0]);
    //     if (err.response.data.non_field_errors[0] === 'register') {
    //       toastr.error('Login Failed!', 'Please register');
    //       this.props.history.push('/register')
    //     }else if (err.response.data.non_field_errors[0] === 'email') {
    //       toastr.error('Login Failed!', 'Please verify your email address');
    //       // this.props.history.push('/login/email_verification')
    //     }else if (err.response.data.non_field_errors[0] === 'password') {
    //       toastr.error('Login Failed!', 'Invalid password');
    //       this.props.history.push('/login')
    //     }
    //   })
  };

  render() {
    const { claim_type, submission_type, service_advisor, technician } = this.state;
    return (
      <div className="main-content">
        <Container fluid className="repair_order">
            <div className="d-flex">
                <FormLabel className="mx-auto h1 "><b>Add Repair Order</b></FormLabel>
            </div>
            <Row>
                <Col md={{ span: 10, offset: 1}} sm={{ span: 12 }} lg={{ span: 8, offset: 2 }}>
                  <Form onSubmit={this.handleUpload}>
                    <Row>
                        <Col md={{ span:5 }} className="text-right">
                            <FormLabel>Repair Order : </FormLabel>
                        </Col>
                        <Col md={{ span:7 }}>
                            <FormControl placeholder="Enter Repair Order" type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span:5 }} className="text-right">
                            <FormLabel>Claim Type : </FormLabel>
                        </Col>
                        <Col md={{ span:7 }}>
                            <Select options={this.props.claim_types} value={claim_type} onChange={this.handleClaimTypeChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span:5 }} className="text-right">
                            <FormLabel>Submission Type : </FormLabel>
                        </Col>
                        <Col md={{ span:7 }}>
                            <Select options={this.props.submission_types} value={submission_type} onChange={this.handleSubmissionTypeChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span:5 }} className="text-right">
                            <FormLabel>Service Advisor : </FormLabel>
                        </Col>
                        <Col md={{ span:7 }}>
                            <Select options={this.props.service_advisors} value={service_advisor} onChange={this.handleServiceAdvisorChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span:5 }} className="text-right">
                            <FormLabel>Technician : </FormLabel>
                        </Col>
                        <Col md={{ span:7 }}>
                            <Select options={this.props.technicians} value={technician} onChange={this.handleTechnicianChange}/>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={{ span: 3, offset: 3}} className="align-items-center d-flex justify-content-center">
                            <Button variant="warning" className="btn-fill" type="reset">Cancel</Button>
                        </Col>
                        <Col md={{ span: 3}} className="align-items-center d-flex justify-content-center">
                            <Button variant="primary" className="btn-fill" type="submit">Upload</Button>
                        </Col>
                    </Row>
                  </Form>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  claim_types: state.auth.claim_types.claim_types.map(d => ({
    "value" : d.name,
    "label" : d.name
  })),
  submission_types: state.auth.submission_types.submission_types.map(d => ({
    "value" : d.name,
    "label" : d.name
  })),
  service_advisors: state.auth.service_advisors.service_advisor.map(d => ({
    "value" : d.id,
    "label" : d.name
  })),
  technicians: state.auth.technicians.technicians.map(d => ({
    "value" : d.id,
    "label" : d.name
  })),
});

// export default AddRepairOrder;
export default connect(mapStateToProps)(AddRepairOrder);


import React, { Component, useState } from "react";
import {
  Container,
  Row,
  Col,
  FormLabel,
  FormControl,
  Form,
} from "react-bootstrap";
import axios from 'axios';
import Button from "components/CustomButton/CustomButton.jsx";
import Select from 'react-select'
import {connect} from "react-redux"
import FileUpload from "views/Components/FileUpload"

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]

class AddRepairOrder extends React.Component {
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
      selectedFile: null,
      newUserInfo: {
        profileImages: []
      }
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

  handleUpload = e => {
    e.preventDefault();

    console.log("claim_type: ", this.state.claim_type)
    console.log("submission_type: ", this.state.submission_type)
    console.log("service_advisor: ", this.state.service_advisor)
    console.log("technician: ", this.state.technician)
    console.log("file upload =", this.state.newUserInfo.profileImages[0].name)
  };

  updateUploadedFiles = (files) => {
    this.setState({
      newUserInfo: {
        ...this.state.newUserInfo,
        profileImages: files
      }
    })
  }
  
  // handleSubmit = (event) => {
  //     event.preventDefault();
  //     //logic to create new user...
  //   };

  

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
                    <Row>
                        <Col md={{ span:5 }} className="text-right">
                            <FormLabel>Claim PDF : </FormLabel>
                        </Col>
                        <Col md={{ span:7 }}>
                          <FileUpload
                            accept=".pdf"
                            // multiple
                            updateFilesCb={this.updateUploadedFiles}
                          />
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

export default connect(mapStateToProps)(AddRepairOrder);

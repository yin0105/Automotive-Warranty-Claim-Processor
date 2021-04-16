
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  OverlayTrigger,
  Tooltip,
  FormLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom"
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {connect} from "react-redux"
import axios from 'axios'
import Moment from 'moment';
import { loadFromLocalStorage } from 'redux/reducers/auth'

class RepairOrderListAdmin extends Component {
  state = {
    claims: []
  }

  componentDidMount() {    
    this.props.claim_types = loadFromLocalStorage("claim_types").map(d => ({
          "value" : d.name,
          "label" : d.name
        }));
    this.props.submission_types= loadFromLocalStorage("submission_types").map(d => ({
          "value" : d.name,
          "label" : d.name
        }));
    this.props.service_advisors = loadFromLocalStorage("service_advisors").map(d => ({
          "value" : d.id,
          "label" : d.name
        }));
    this.props.technicians = loadFromLocalStorage("technicians").map(d => ({
          "value" : d.id,
          "label" : d.name
        }));
    this.props.token = loadFromLocalStorage("token");
    this.props.dealership = loadFromLocalStorage("user").dealership;

    setTimeout(() => {
      console.log("token = ", this.props.token)
      const headers = { 
        'Authorization': 'token ' + this.props.token,
      };
      axios.get('/api/claim/claim/', {headers})
        .then(res => {
          const claims = res.data;
          this.setState({ claims });
        })
    }, 100);
  }

  handleDownloadPDF = (pdf, dealership) => {
    const headers = { 
      'Authorization': 'token ' + this.props.token,
    };
    axios.get('/api/claim/download_pdf?dealership=' + dealership + '&pdf=' + pdf, {headers})
      .then(res => {
        console.log("res = ", res)
        console.log("res.data.url = ", res.data.url)
        window.open(res.data.url, "_blank");
        console.log("download: OK");
      })


  }

  render() {
    const edit = <Tooltip id="edit">Edit Schedule</Tooltip>;
    const remove = <Tooltip id="remove">Remove</Tooltip>;
    const actions = (
      <td className="td-actions">
        <OverlayTrigger placement="top" overlay={edit}>
          <Button simple bsStyle="success" bsSize="xs">
            <i className="fa fa-edit" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={remove}>
          <Button simple bsStyle="danger" bsSize="xs">
            <i className="fa fa-times" />
          </Button>
        </OverlayTrigger>
      </td>
    );
    Moment.locale('en');
    return (
      <div className="main-content">
        <Container fluid>
          <div className="d-flex">
            <FormLabel className="mx-auto h1 "><b>Repair Order List</b></FormLabel>
          </div>
          <Row>
            <Col md={{ span: 10, offset: 1 }} sm={{ span: 12 }}>
              <Card
                tableFullWidth
                textCenter
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Repair Order#</th>                        
                        <th>Claim Type</th> 
                        <th>Submission Type</th>
                        <th>Service Advisor</th>
                        <th>Technician</th>
                        <th>Claim PDF</th>
                        <th>Uploaded Date</th>
                        <th>Dealership</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      { this.state.claims.map(claim => 
                        <tr>
                          <td>{claim.repair_order}</td>
                          <td>{claim.claim_type}</td>
                          <td>{claim.submission_type}</td>
                          <td>{claim.service_advisor}</td>
                          <td>{claim.technician}</td>
                          <td>
                            <Link onClick={() => this.handleDownloadPDF(claim.pdf.substring(claim.pdf.lastIndexOf("/")+1, claim.pdf.length), claim.dealership)}>
                              {claim.pdf.substring(claim.pdf.lastIndexOf("/")+1, claim.pdf.length)}                              
                            </Link>
                          </td>
                          <td>{Moment(claim.upload_date).format('MMMM Do YYYY, hh:mm:ss a')}</td>
                          <td>{claim.dealership}</td>
                          {/* {actions} */}
                        </tr>
                      )}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RepairOrderListAdmin;

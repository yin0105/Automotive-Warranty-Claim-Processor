
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
// react component that creates a switch button that changes from on to off mode
import Switch from "react-bootstrap-switch";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

import img1 from "assets/img/blog-1.jpg";
import img2 from "assets/img/blog-2.jpg";
import img3 from "assets/img/blog-3.jpg";
import img4 from "assets/img/blog-4.jpg";
import img5 from "assets/img/blog-5.jpg";

class RepairOrderList extends Component {
  render() {
    const remove = <Tooltip id="remove">Remove</Tooltip>;
    const actions = (
      <td className="td-actions">
        <OverlayTrigger placement="top" overlay={remove}>
          <Button simple bsStyle="danger" bsSize="xs">
            <i className="fa fa-times" />
          </Button>
        </OverlayTrigger>
      </td>
    );
    return (
      <div className="main-content">
        <Container fluid>
          <div className="d-flex">
            <FormLabel className="mx-auto h1 "><b>Collection List</b></FormLabel>
          </div>
          <Row>
            <Col md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }}>
              <Card
                tableFullWidth
                textCenter
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Collection Name</th>                        
                        <th>Action</th>                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Andrew Mike</td>
                        {actions}
                      </tr>
                      <tr>
                        <td>John Doe</td>
                        {actions}
                      </tr>
                      <tr>
                        <td>Alex Mike</td>
                        {actions}
                      </tr>
                      <tr>
                        <td>Mike Monday</td>
                        {actions}
                      </tr>
                    </tbody>
                  </Table>
                }
                legend={
                  <div class="d-flex">
                    <Link to="/frontend/admin/upload_pdf" className="mx-auto btn btn-primary btn-fill">
                      Add Repair Order
                    </Link>
                  </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RepairOrderList;

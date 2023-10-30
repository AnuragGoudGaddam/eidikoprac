import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  CardBody,
} from "reactstrap";
import { DocumentTable } from "./DocumentTable";
import { Route, useParams } from "react-router";

import axios from "axios";
import DocumentUpload from "./DocumentUpload";
import { properties } from "./properties";
import "./Attachment.css";
import Checkbox from "@material-ui/core/Checkbox";

function AttachmentTemp() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Form className='my-3 ml-5'>
          <FormGroup row>
            <Label sm={3} style={{ marginRight: -80 }}>
              Matrix Ref No
            </Label>
            <Col sm={2}>
              <Input type='text' size='sm' className='input' />
            </Col>

            <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
              Budget Year
            </Label>
            <Col sm={2}>
              <Input type='text' id='budgetYear' size='sm' required />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3} style={{ marginRight: -80 }} className='required'>
              Supplier Name
            </Label>
            <Col sm={2}>
              <Input size='sm' type='select' id='supplierId' size='sm' required>
                <option selected disabled>
                  Please select a supplier
                </option>
              </Input>
            </Col>

            <Label sm={2} style={{ marginLeft: "10rem" }}>
              Invoice Date/Year
            </Label>
            <Col sm={2}>
              <Input type='text' id='invoiceDateYear' size='sm' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3} style={{ marginRight: -80 }} className='required'>
              Management Company Name
            </Label>
            <Col sm={2}>
              <Input size='sm' type='select' id='mgmtCompId' required>
                <option selected disabled>
                  Please select a company
                </option>
              </Input>
            </Col>

            <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
              Invoice Amount
            </Label>
            <Col sm={2}>
              <Input type='text' id='invoiceAmount' size='sm' required />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3} style={{ marginRight: -80 }} className='required'>
              Trade License Expiry Date
            </Label>
            <Col sm={2}>
              <Input type='date' id='tradeLicenseExpDate' size='sm' required />
              <Input type='text' id='hiddenTrade' hidden />
            </Col>

            <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
              Issuance Authority
            </Label>
            <Col sm={2}>
              <Input type='text' id='issuanceAuthority' size='sm' required />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3} style={{ marginRight: -80 }}>
              {" "}
              Agreement Expiry Date
            </Label>
            <Col sm={2}>
              <Input type='date' id='agreementExpDate' size='sm' />
              <Input type='text' id='hiddenAgree' hidden />
            </Col>

            <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
              Service Code
            </Label>
            <Col sm={2}>
              <Input type='text' id='serviceCode' size='sm' required />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={4}>
              <Label style={{ marginLeft: "16rem" }} check>
                <Checkbox color='primary' />
                Auto Renewal
              </Label>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3} style={{ marginRight: -80 }} className='required'>
              {" "}
              Building Name
            </Label>
            <Col sm={2}>
              <Input size='sm' type='select' id='buildingId' required>
                <option selected hidden>
                  Please select building
                </option>
              </Input>
            </Col>

            <Col sm={2}>
              <Button
                style={{
                  background: "#254a9e",
                  color: "white",
                  position: "relative",
                  marginLeft: "80vh",
                }}>
                Save
              </Button>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={7}>
              <Label style={{ marginLeft: "1.5rem" }} check>
                <Checkbox color='primary' />
                Government
              </Label>
            </Col>

            <Col sm={7}>
              <Label style={{ marginLeft: "1.5rem" }} check>
                <Checkbox color='primary' />
                Insurance Company
              </Label>
            </Col>

            <Col sm={7}>
              <Label style={{ marginLeft: "1.5rem" }} check>
                <Checkbox color='primary' />
                No Proper Documents
              </Label>
            </Col>
          </FormGroup>
        </Form>

        <div className='App'></div>
      </div>
    </>
  );
}

export default AttachmentTemp;

import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Container,
} from "reactstrap";
import Checkbox from "@material-ui/core/Checkbox";
import { DocumentTable } from "./DocumentTable";
import { Route, useParams } from "react-router";
import axios from "axios";
import { properties } from "./properties";
import ReactSession from "react-client-session/dist/ReactSession";
<switch>
  <Route path='/attachmentFieldcomplreq/:id' children={<Child />} />
</switch>;

export default function AttachmentFieldsCompletedRequest() {
  let { id } = useParams();
  console.log(id);

  const [formData, setState] = useState({});
  const [isExcpApproval, setIsExcpApproval] = useState(false);
  const [autoRenewal, setAutoRenewal] = useState(false);
  const [governmentCheckBox, setGovernmentCheckBox] = useState(false);
  const [insuranceCheckBox, setInsuranceCheckBox] = useState(false);
  const [noProperDocumentCheckBox, setNoProperDocumentCheckBox] =
    useState(false);
  const loadAttachmentDetails = (ids) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .get(properties.displayAttachmentDetails + `${ids}`, { headers: head })
      .then(
        (response) => {
          console.log(
            "Response Data loaded here" + JSON.stringify(response.data)
          );

          setState({
            formData,
            matrixRefNo: response.data[0].strMatrixRefNo,
            mcNameEn: response.data[0].mcNameEn,
            issuanceAuthority: response.data[0].issuanceAuthority,
            tradeLicenseExpDate: response.data[0].tradeLicenseExpDate,
            agreementExpDate: response.data[0].agreementExpDate,
            budgetYear: response.data[0].budgetYear,
            invoiceDateYear: response.data[0].invoiceDateYear,
            invoiceAmount: response.data[0].invoiceAmount,
            supplierName: response.data[0].supplierName,
            status: response.data[0].status,
            serviceCode: response.data[0].serviceCode,
            buildingName: response.data[0].buildingName,
            autoRenewal: response.data[0].autoRenewal,
            isGovernmentEntity: response.data[0].isGovernmentEntity,
            isInsuranceCompany: response.data[0].isInsuranceCompany,
            noProperDocuments: response.data[0].noProperDocuments,
            bifurcation: response.data[0].bifurcation,
            isExceptionalApproval: response.data[0].isExceptionalApproval,
            remarks: response.data[0].remarks,
          });
          if (!"Y".localeCompare(response.data[0].isExceptionalApproval)) {
            setIsExcpApproval(true);
          }

          if (!"Y".localeCompare(response.data[0].noProperDocuments))
            setNoProperDocumentCheckBox(true);

          if (response.data[0].autoRenewal)
            if (!"Y".localeCompare(response.data[0].autoRenewal))
              setAutoRenewal(true);

          if (response.data[0].isGovernmentEntity)
            if (!"Y".localeCompare(response.data[0].isGovernmentEntity))
              setGovernmentCheckBox(true);
          if (response.data[0].isInsuranceCompany)
            if (!"Y".localeCompare(response.data[0].isInsuranceCompany))
              setInsuranceCheckBox(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    loadAttachmentDetails(`${id}`);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Form className='my-3 ml-5'>
        <FormGroup row>
          <Label sm={3}>Matrix Ref No</Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.matrixRefNo} />
          </Col>

          <Label sm={3} className='ml-5'>
            Budget Year
          </Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.budgetYear} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3}>Management Company Name</Label>
          <Col sm={2}>
            <Input size='sm' type='text' value={formData.mcNameEn}></Input>
          </Col>

          <Label sm={3} className='ml-5'>
            Invoice Date/Year
          </Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.invoiceDateYear} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3}>Issuance Authority</Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.issuanceAuthority} />
          </Col>

          <Label sm={3} className='ml-5'>
            Invoice Amount
          </Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.invoiceAmount} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3}>Trade License Expiry Date</Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.tradeLicenseExpDate} />
          </Col>

          <Label sm={3} className='ml-5'>
            Supplier Name
          </Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.supplierName} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3}> Agreement Expiry Date</Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.agreementExpDate} />
          </Col>

          <Label sm={3} className='ml-5'>
            {" "}
            Status
          </Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.status} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3}> Building Name</Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.buildingName} />
          </Col>

          <Col md={4}>
            <Label style={{ marginLeft: "2rem" }} check>
              <Checkbox
                color='primary'
                checked={governmentCheckBox}
                // onChange={handleGovernmentBox}
              />
              Government
            </Label>
          </Col>
          <Col md={2}>
            <Label style={{ marginLeft: "-3rem" }} check>
              <Checkbox color='primary' checked={autoRenewal} />
              Auto Renewal
            </Label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3} className=''>
            Service Code
          </Label>
          <Col sm={2}>
            <Input type='text' size='sm' value={formData.serviceCode} />
          </Col>

          <Col md={4}>
            <Label style={{ marginLeft: "2rem" }} check>
              <Checkbox color='primary' checked={insuranceCheckBox} />
              Insurance Company
            </Label>
          </Col>

          <Col md={2.5}>
            <Label style={{ marginLeft: "-2rem" }} check>
              <Checkbox color='primary' checked={noProperDocumentCheckBox} />
              No proper Data/Documents
            </Label>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3}>Bifurcation</Label>
          <Col sm={2}>
            <Input type='text' value={formData.bifurcation} size='sm' />
          </Col>

          <Col md={4}>
            <Label style={{ marginLeft: "2rem" }} check>
              <Checkbox color='primary' checked={isExcpApproval} />
              Is Exceptional Approval
            </Label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3} style={{ marginLeft: "" }}>
            Reason
          </Label>
          <Col sm={2}>
            <Input
              type='textarea'
              id='remarks'
              name='remarks'
              value={formData.remarks}
              size='sm'
              style={{ marginLeft: "", width: "305px", height: "60px" }}
            />
          </Col>
          <Col sm={2}>
            <Button
              style={{
                background: "#254a9e",
                color: "white",
                position: "relative",
                marginLeft: "32rem",
              }}
              onClick={() => window.close()}>
              Close
            </Button>
          </Col>
        </FormGroup>
      </Form>

      <div className='App'>
        <DocumentTable pymtReqId={id} />
      </div>
    </div>
  );
}
function Child() {
  let { id } = useParams();
  return <div></div>;
}

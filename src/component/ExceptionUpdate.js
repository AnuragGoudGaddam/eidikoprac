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
import { DocumentTable } from "./DocumentTable";
import DocumentUpload from "./DocumentUpload";
import { Route, useParams } from "react-router";
import axios from "axios";
import { properties } from "./properties";
import Checkbox from "@material-ui/core/Checkbox";
import ReactSession from "react-client-session/dist/ReactSession";

<switch>
  <Route path='/ExceptionUpdate/:id/' children={<Child />} />
</switch>;

export default function ExceptionUpdate() {
  let { id } = useParams();

  const [isExcpApproval, setIsExcpApproval] = useState(false);
  const [autoRenewal, setAutoRenewal] = useState(false);
  const [governmentCheckBox, setGovernmentCheckBox] = useState(false);
  const [insuranceCheckBox, setInsuranceCheckBox] = useState(false);
  const [noProperDocumentCheckBox, setNoProperDocumentCheckBox] =
    useState(false);

  console.log(">>>>>>>><<<<<<<<<<<<<<" + id);
  const [formData, setState] = useState({});
  const [data3, setData3] = useState([]);
  const [data2, setData2] = useState([]);
  const [data1, setData1] = useState([]);

  const [data, setData] = useState([]);

  let handleAutoRenewal = (e) => {
    setAutoRenewal(e.target.checked);
  };
  let handleGovernmentBox = (e) => {
    setGovernmentCheckBox(e.target.checked);
  };
  let handleInsuranceBox = (e) => {
    setInsuranceCheckBox(e.target.checked);
  };
  let handleNoProperDocumentBox = (e) => {
    setNoProperDocumentCheckBox(e.target.checked);
  };
  let handleIsExcpApproval = (e) => {
    console.log(e.target.checked);
    setIsExcpApproval(e.target.checked);
  };

  function handle(e) {
    var regex = /[^.=,;\w\s]/gi;
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value.replace(regex, "");
    setData(newdata);
    console.log(newdata);
  }

  const loadAttachmentDetails = (ids) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .get(`${properties.loadAttachmentDetails}/${ids}`, { headers: head })
      .then(
        (response) => {
          console.log(
            "Response Data loaded here" + JSON.stringify(response.data)
          );

          setData({
            data,
            matrixRefNo: response.data[0].strMatrixRefNo,
            mgmtCompId: response.data[0].mgmtCompId,
            issuanceAuthority: response.data[0].issuanceAuthority,
            tradeLicenseExpDate: response.data[0].tradeLicenseExpDate,
            agreementExpDate: response.data[0].agreementExpDate,
            budgetYear: response.data[0].budgetYear,
            invoiceDateYear: response.data[0].invoiceDateYear,
            invoiceAmount: response.data[0].invoiceAmount,
            supplierId: response.data[0].supplierId,
            status: response.data[0].status,
            serviceCode: response.data[0].serviceCode,
            buildingId: response.data[0].buildingId,
            autoRenewal: response.data[0].autoRenewal,
            noProperDocuments: response.data[0].noProperDocuments,
            bifurcation: response.data[0].bifurcation,
            isExceptionalApproval: response.data[0].isExceptionalApproval,
            remarks: response.data[0].remarks,
            isGovernmentEntity: response.data[0].isGovernmentEntity,
            isInsuranceCompany: response.data[0].isInsuranceCompany,
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

  console.log(formData);

  useEffect(() => {
    loadAttachmentDetails(`${id}`);
  }, []);

  var autoRenewalData = "";
  var isGovernmentEntity = "";
  var isInsuranceCompany = "";
  var noDocumentData = "";
  var isExceptionalApproval = "";
  if (autoRenewal) autoRenewalData = "Y";
  else autoRenewalData = "N";

  if (governmentCheckBox) {
    console.log("Government");
    isGovernmentEntity = "Y";
  } else {
    isGovernmentEntity = "N";
  }
  if (insuranceCheckBox) {
    console.log("insurance company");
    isInsuranceCompany = "Y";
  } else {
    isInsuranceCompany = "N";
  }

  if (noProperDocumentCheckBox) {
    noDocumentData = "Y";
  } else {
    noDocumentData = "N";
  }
  if (isExcpApproval) {
    isExceptionalApproval = "Y";
  } else {
    isExceptionalApproval = "N";
  }
  const putData = {
    pymtReqId: id,
    mgmtCompId: data.mgmtCompId,
    issuanceAuthority: data.issuanceAuthority,
    tradeLicenseExpDate: data.tradeLicenseExpDate,
    agreementExpDate: data.agreementExpDate,
    budgetYear: data.budgetYear,
    invoiceDateYear: data.invoiceDateYear,
    invoiceAmount: data.invoiceAmount,
    supplierId: data.supplierId,
    serviceCode: data.serviceCode,
    buildingId: data.buildingId,
    status: data.status,
    bifurcation: data.bifurcation,
    noProperDocuments: noDocumentData,
    autoRenewal: autoRenewalData,
    isGovernmentEntity: isGovernmentEntity,
    isInsuranceCompany: isInsuranceCompany,
    isExceptionalApproval: isExceptionalApproval,
    bifurcation: data.bifurcation,
    remarks: data.remarks,
  };

  const updateData = (putData) => {
    console.log(putData);
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios.post(properties.exceptionUpdate, putData, { headers: head }).then(
      (response) => {
        alert("Data Updated Successfully");
        console.log("Response Data loaded here" + JSON.stringify(response));
      },
      (error) => {
        console.error(error);
        alert("Error: Data not updated. Please try again  after sometime.");
        return false;
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(putData);
    if (isExcpApproval || noProperDocumentCheckBox) {
      if (!data.remarks) {
        alert("Reason is mandatory");
        return false;
      }
    }
    if (!isExcpApproval)
      if (
        data.mgmtCompId == undefined ||
        data.supplierId == undefined ||
        data.serviceCode == undefined ||
        data.buildingId == undefined ||
        data.invoiceAmount == undefined ||
        data.issuanceAuthority == undefined ||
        data.serviceCode == "" ||
        data.issuanceAuthority == "" ||
        data.mgmtCompId == "" ||
        data.supplierId == "" ||
        data.invoiceAmount == "" ||
        data.budgetYear == ""
      ) {
        event.preventDefault();
        alert("Please select all mandatory fields");
        if (insuranceCheckBox) {
          if (
            data.tradeLicenseExpDate == undefined &&
            data.hiddenTrade == undefined
          ) {
            event.preventDefault();
            alert(
              "Trade license expiry date is mandatory for Insurance company"
            );
          }
        }
        return false;
      } else {
        updateData(putData);
      }
    else {
      updateData(putData);
    }
  };

  const fetchData = async () => {
    const company = await axios.get(properties.managementCompanyList);
    console.log("company", company.data);
    setData1(company.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchSupplier = async () => {
    const supplier = await axios.get(properties.supplierList);
    console.log("supplier" + supplier.data);
    setData3(supplier.data);
  };
  useEffect(() => {
    fetchSupplier();
  }, []);

  const fetchBuilding = async () => {
    const building = await axios.get(properties.buildingNames);
    console.log("building", building.data);
    setData2(building.data);
  };

  useEffect(() => {
    fetchBuilding();
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Form className='my-3 ml-5' onSubmit={handleSubmit}>
        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }}>
            Matrix Ref No
          </Label>
          <Col sm={2}>
            <Input
              type='text'
              autoComplete='off'
              size='sm'
              value={data.matrixRefNo}
            />
          </Col>

          <Label
            sm={2}
            style={{ marginLeft: "10rem" }}
            autoComplete='off'
            className='required'>
            Budget Year
          </Label>
          <Col sm={2}>
            <Input
              type='text'
              autoComplete='off'
              size='sm'
              maxLength='4'
              id='budgetYear'
              defaultValue={data.budgetYear}
              onChange={(e) => handle(e)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }} className='required'>
            Supplier Name
          </Label>
          <Col sm={2}>
            <Input
              size='sm'
              type='select'
              autoComplete='off'
              id='supplierId'
              disabled='disabled'
              value={data.supplierId}
              style={{ width: "350px" }}
              onChange={(e) => handle(e)}>
              <option selected hidden>
                Please select a supplier
              </option>
              {data3.map((opt) => (
                <option value={opt.supplierId}>{opt.supplierName}</option>
              ))}
            </Input>
          </Col>

          <Label sm={2} style={{ marginLeft: "10rem" }}>
            Invoice Year
          </Label>
          <Col sm={2}>
            <Input
              type='number'
              autoComplete='off'
              size='sm'
              maxLength={4}
              id='invoiceDateYear'
              defaultValue={data.invoiceDateYear}
              onChange={(e) => handle(e)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }} className='required'>
            {" "}
            Management Company Name
          </Label>
          <Col sm={2}>
            <Input
              size='sm'
              type='select'
              autoComplete='off'
              id='mgmtCompId'
              disabled='disabled'
              style={{ width: "350px" }}
              value={data.mgmtCompId}
              onChange={(e) => handle(e)}>
              <option selected hidden>
                Please select a company
              </option>
              {data1.map((opt) => (
                <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
              ))}
            </Input>
          </Col>

          <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
            Payment Amount
          </Label>
          <Col sm={2}>
            <Input
              type='text'
              autoComplete='off'
              size='sm'
              disabled='disabled'
              id='invoiceAmount'
              defaultValue={data.invoiceAmount}
              onChange={(e) => handle(e)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }}>
            Trade License Expiry Date
          </Label>
          <Col sm={2}>
            <Input
              type='Date'
              size='sm'
              id='tradeLicenseExpDate'
              defaultValue={data.tradeLicenseExpDate}
              onChange={(e) => handle(e)}
            />
          </Col>

          <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
            Issuance Authority
          </Label>
          <Col sm={2}>
            <Input
              type='text'
              autoComplete='off'
              size='sm'
              id='issuanceAuthority'
              defaultValue={data.issuanceAuthority}
              onChange={(e) => handle(e)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }}>
            Agreement Expiry Date
          </Label>
          <Col sm={2}>
            <Input
              type='Date'
              size='sm'
              id='agreementExpDate'
              defaultValue={data.agreementExpDate}
              onChange={(e) => handle(e)}
            />
          </Col>

          <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
            Status
          </Label>
          <Col sm={2}>
            <Input
              type='text'
              autoComplete='off'
              size='sm'
              id='status'
              value={data.status}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }} className='required'>
            Building Name
          </Label>
          <Col sm={2}>
            <Input
              size='sm'
              type='select'
              autoComplete='off'
              id='buildingId'
              disabled='disabled'
              value={data.buildingId}
              onChange={(e) => handle(e)}>
              <option selected hidden>
                Please select building
              </option>
              {data2.map((opt) => (
                <option value={opt.buildingId}>{opt.buildingName}</option>
              ))}
            </Input>
          </Col>

          <Col md={4}>
            <Label style={{ marginLeft: "10rem" }} check>
              <Checkbox
                color='primary'
                checked={governmentCheckBox}
                onChange={handleGovernmentBox}
              />
              Government
            </Label>
          </Col>

          <Col md={2}>
            <Label style={{ marginLeft: "-3rem" }} check>
              <Checkbox
                color='primary'
                checked={autoRenewal}
                onChange={handleAutoRenewal}
              />
              Auto Renewal
            </Label>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }} className='required'>
            Service Code
          </Label>
          <Col sm={2}>
            <Input
              type='text'
              autoComplete='off'
              onChange={(e) => handle(e)}
              id='serviceCode'
              value={data.serviceCode}
              size='sm'
            />
          </Col>

          <Col md={4}>
            <Label style={{ marginLeft: "10rem" }} check>
              <Checkbox
                color='primary'
                checked={insuranceCheckBox}
                onChange={handleInsuranceBox}
              />
              Insurance Company
            </Label>
          </Col>

          <Col md={2.5}>
            <Label style={{ marginLeft: "-2rem" }} check>
              <Checkbox
                color='primary'
                checked={noProperDocumentCheckBox}
                onChange={handleNoProperDocumentBox}
              />
              No proper Data/Documents
            </Label>
          </Col>

          <Label sm={3} className='mt-3'>
            Bifurcation
          </Label>
          <Col sm={2} className='mt-3'>
            <Input
              type='text'
              autoComplete='off'
              onChange={(e) => handle(e)}
              id='bifurcation'
              value={data.bifurcation}
              size='sm'
              style={{ marginLeft: "-5rem" }}
            />
          </Col>

          <Col md={4} className='mt-3'>
            <Label style={{ marginLeft: "5rem" }} check>
              <Checkbox
                color='primary'
                checked={isExcpApproval}
                onChange={handleIsExcpApproval}
              />
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
              autoComplete='off'
              onChange={(e) => handle(e)}
              id='remarks'
              name='remarks'
              value={data.remarks}
              size='sm'
              style={{ marginLeft: "-5rem", width: "305px", height: "60px" }}
            />
          </Col>
          <Col sm={2}>
            <Button
              className='buttonUpdate'
              style={{
                background: "#254a9e",
                color: "white",
                // position: "relative",
                marginLeft: "18rem",
              }}>
              update
            </Button>
          </Col>
          <Col sm={2} style={{ marginLeft: "13rem" }}>
            <Button
              style={{
                background: "#254a9e",
                color: "white",
                position: "relative",
              }}
              onClick={() => window.close()}>
              Close
            </Button>
          </Col>
        </FormGroup>
      </Form>

      <br />
      <hr />

      <div className='App'>
        <DocumentUpload pymtReqId={id} />
        <DocumentTable pymtReqId={id} />
      </div>
    </div>
  );
}
function Child() {
  let { id } = useParams({});
  return <div></div>;
}

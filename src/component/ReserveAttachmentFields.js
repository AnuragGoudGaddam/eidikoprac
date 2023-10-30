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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DocumentTable } from "./DocumentTable";
import { Route, useParams } from "react-router";

import axios from "axios";
import DocumentUpload from "./DocumentUpload";
import { properties } from "./properties";
import "./Attachment.css";
import Checkbox from "@material-ui/core/Checkbox";
import ReactSession from "react-client-session/dist/ReactSession";

{
  /* <switch>
  <Route path='/attachmentField/:id' children={<Child />} />
</switch>; */
}

export default function ReserveAttachmentFields() {

  const [IsActiveCheckBox, isActive] = useState(false);
  const [attachmentFlag, setAttachmentFlag] = useState("false");
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [disableSaveButton, setDisableSaveButton] = useState(false);
  console.log("AttachmentFields started...");
  let { id } = useParams();
  console.log("id >>>>>>>>" + id);

  // const [formData, setState] = useState({});

  // const [loaddates, setDates] = useState({});

  // const [data1, setData1] = useState([]);
  const [data, setData] = useState([]);
  const [building, setBuilding] = useState([]);
  const [company, setCompany] = useState([]);
  const [dropDownData, setDropDownData] = useState({
    accountNumber: "",
    reserveAccountNumber: "",
    mgmtCompId: "",
    buildingId: "",
    cifNumber: "",
    branchCode: "",
    isActive: "",
  });
  let handleInput = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setDropDownData({ ...dropDownData, [name]: value });
    console.log(dropDownData);
  };
  let save = async (e) => {
    e.preventDefault();
    console.log(dropDownData);
    if (!dropDownData.accountNumber) {
      alert("Please select Account Number");
      return false;
    };
    if (!dropDownData.reserveAccountNumber) {
      alert("Please select Reserve Account Number");
      return false;
    };
    // if (!dropDownData.mgmtCompId) {
    //   alert("Please select Management Company Name");
    //   return false;
    // };
    // if (!dropDownData.buildingId) {
    //   alert("Please select Building Name");
    //   return false;
    // };
    // if (!dropDownData.cifNumber) {
    //   alert("Please select CIF Number");
    //   return false;
    // };
    // if (!dropDownData.branchCode) {
    //   alert("Please select Branch Code");
    //   return false;
    // };
    // if (!dropDownData.isActive) {
    //   alert("Please select Is Active");
    //   return false;
    // };
    if (dropDownData.buildingId != null && dropDownData.mgmtCompId != null && dropDownData.accountNumber != null && dropDownData.branchCode != null
      && dropDownData.cifNumber != null && dropDownData.reserveAccountNumber != null && dropDownData.isActive!= null) {
      alert("Data has been updated successfully")

    }
    const requestData = {
      account_Number: dropDownData.accountNumber,
      cif_Number: dropDownData.cifNumber,
      mgmnt_Comp_Id: dropDownData.mgmtCompId,
      building_Id: dropDownData.buildingId,
      reserve_Account_Number: dropDownData.reserveAccountNumber,
      is_Active: 'Y',
      branch_Code: dropDownData.branchCode
    };
    await axios.post(
      `${properties.dataURl}/dataSave`,
      requestData).then(response => setResponseData(response.data));
    console.log(">>>>>>>>>>.", responseData);

    //get API data
    getFundDetails();
    setIsOpen(false);
  }
  let getFundDetails = async () => {
    const requestOptions = {
      // method: 'POST',
      // headers: { 'Content-Type': 'application/json; charset=utf-8' },
      // title: 'mgmtCompId':202  'buildingId':104 ;
      mgmtCompId: dropDownData.mgmtCompId,
      buildingId: dropDownData.buildingId
    };
    await axios.post(
      `${properties.dataURl}/data`,
      requestOptions).then(response => setResponseData(response.data));
    console.log(">>>>>>>>>>.", responseData);

  }
  let getBuildingNames = async (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setDropDownData({ ...dropDownData, [name]: value });
    console.log(dropDownData);
    console.log(`${properties.getBuildingsByMgmtComp}/${e.target.value}`);
    const building = await axios.get(
      `${properties.getBuildingsByMgmtComp}/${e.target.value}`
    );
    console.log("Mapped building names :" + building.data);
    if (building.data) setBuilding(building.data);
    else setBuilding([]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");

    var isActive = "";



    // if (IsActiveCheckBox) {
    //   console.log("Is Active");
    //   isActive = "Y";
    // } else {
    //   isActive = "N";
    // }

    function handle(e) {
      var regex = /[^.=,;\w\s]/gi;
      const newdata = { ...data };
      newdata[e.target.id] = e.target.value.replace(regex, "");
      console.log(e.target.id + ":" + e.target.value);
      setData(newdata);
      console.log("MY DATA :: " + JSON.stringify(newdata));
      console.log(
        "handle newdata.tradeLicenseExpDate:" + newdata.tradeLicenseExpDate
      );
    }
  }
  let handleInsCheckbox = (e) => {
    isActive(e.target.checked);
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <Form className='my-1 ml-5'>
        <FormGroup row className='my-2 ml--3' inline>
          <Label sm={3} style={{ marginRight: -80 }} className='required'>
            Account Number
          </Label>
          <Col sm={2}>
            <Input
              id='accountNumber' name='accountNumber' onChange={(e) => handleInput(e)}
              type='number' />
            {company.map((opt) => (
              <option value={opt.reserveFundId}></option>
            ))}
          </Col>

          <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
            Reserved Account Number
          </Label>
          <Col sm={2}>
            <Input
              type="number" id='reserveAccountNumber' name='reserveAccountNumber' onChange={(e) => handleInput(e)}
            />
          </Col>

        </FormGroup>
        <FormGroup row className='my-2 ml--3' inline>
          <Label className='required' sm={3} style={{ marginRight: -80 }}>Management Company Name</Label>
          <Col>
            <Input className='formInput' type='select'
              id='mgmtCompId'
              name='mgmtCompId'
              // value={company.mgmtCompId}
              onChange={(e) => handleInput(e)}
              onChange1={(e) => {
                getBuildingNames(e);
              }}
              style={{ width: "15rem", marginRight:"-300px"  }}>

              <option selected disabled>
                Please select a company
              </option>
              <option value='201'>RDK OWNERS ASSOCIATION MANAGEMENT LLC</option>
              <option value='202'>KAIZEN OWNER ASSOCIATION MANAGEMENT</option>
              <option value='203'>Better Communities Owner Association</option>
              <option value='204'>STRATUM OWNERS ASSOCIATION MANAGEMENT SERVICES LLC</option>
              <option value='205'>SG Community Management Services LLC</option>
              {company.map((opt) => (
                <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
              ))}
            </Input>
          </Col>

          <Label className="formLable"  style={{ marginLeft: "4rem" }}>Building Name</Label>
          <Col >
            <Input className='formInput'
              type='select'
              id='buildingId'
              name='buildingId'
              // value={dropDownData.mgmtCompId}
              onChange={(e) => handleInput(e)}
              style={{ width: "15rem",marginLeft:"-200px" }}>

              <option selected disabled>
                Please select a building
              </option>
              <option value='101'>TWO TOWERS</option>
              <option value='102'>BINGHATTI GATEWAY</option>
              <option value='103'>MILLENNIUM BINGHATTI RESIDENCES BUSINESS BAY</option>
              <option value='104'>MILANO GIOVANNI BOUTIQUE SUITES</option>
              <option value='105'>GIOVANNI BOUTIQUE SUITES</option>
              <option value='106'>PALM VIEW</option>
              <option value='107'>W Residences - The Palm</option>
              {building.map((opt2) => (
                <option value={opt2.buildingId}>{opt2.buildingName}</option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row className='my-2 ml--3' inline>
          <Label sm={3} style={{ marginRight: -80 }} className='required' >
            CIF Number
          </Label>
          <Col sm={2}>
            <Input
              type='number' id='cifNumber' name='cifNumber' onChange={(e) => handleInput(e)}  />
            {company.map((opt) => (
              <option value={opt.cifNumber}></option>
            ))}
          </Col>

          <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
            Branch Code
          </Label>
          <Col sm={2}>
            <Input
              type="number" id='branchCode' name='branchCode' onChange={(e) => handleInput(e)}
            />
          </Col>

          <Col md={4}>
            <Label style={{ marginLeft: "0rem" }} check>
              <Checkbox
                color='primary'
                checked={IsActiveCheckBox}
                onChange={handleInsCheckbox}
              />
              Is Active
            </Label>
          </Col>
        </FormGroup>

        <FormGroup row className='my-2 ml--3' inline>
          <Button
            type="submit" onClick={save} style={{ background: "#254a9e", color: "white", marginLeft: "430px" }}>
            UPDATE & SAVE{" "}
          </Button>

          <Col sm={2} className='mt-3'>
            <Button
              style={{
                background: "#254a9e",
                color: "white",
                position: "relative",
                marginLeft: "1rem",
              }}
              onClick={() => window.close()}>
              Close
            </Button>
          </Col>
        </FormGroup>


      </Form>



    </div>
  );
}

function Child() {
  let { id } = useParams();
  return <div></div>;
}
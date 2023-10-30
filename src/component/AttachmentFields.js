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

export default function AttachmentFields() {
  const [autoRenewal, setAutoRenewal] = useState(false);
  const [open, setOpen] = useState(false);
  const [attachmentFlag, setAttachmentFlag] = useState("false");
  const [governmentCheckBox, setGovernmentCheckBox] = useState(false);
  const [isExcpApproval, setIsExcpApproval] = useState(false);
  const [insuranceCheckBox, setInsuranceCheckBox] = useState(false);
  const [noProperDocumentCheckBox, setNoProperDocumentCheckBox] =
    useState(false);
  const [disableSaveButton, setDisableSaveButton] = useState(false);
  console.log("AttachmentFields started...");
  let { id } = useParams();
  console.log("id >>>>>>>>" + id);

  const [formData, setState] = useState({});

  const [loaddates, setDates] = useState({});

  const [data1, setData1] = useState([]);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  let handleYes = () => {
    setAttachmentFlag("true");
    setOpen(false);
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
    const postData = {
      pymtReqId: id,
      //matrixRefNo:data.matrixRefNo,
      matrixFileRefNo: data.matrixFileRefNo,
      mgmtCompId: data.mgmtCompId,
      issuanceAuthority: "Dubai Govt",
      tradeLicenseExpDate: data.tradeLicenseExpDate,
      agreementExpDate: data.agreementExpDate,
      budgetYear: data.budgetYear,
      invoiceDateYear: data.invoiceDateYear,
      invoiceAmount: data.invoiceAmount,
      supplierId: data.supplierId,
      serviceCode: data.serviceCode,
      buildingId: data.buildingId,
      hiddenTrade: data.hiddenTrade,
      hiddenAgree: data.hiddenAgree,
      attachmentFlag: "true",
      noProperDocuments: noDocumentData,
      autoRenewal: autoRenewalData,
      isGovernmentEntity: isGovernmentEntity,
      isInsuranceCompany: isInsuranceCompany,
      isExceptionalApproval: isExceptionalApproval,
      remarks: data.remarks,
      bifurcation: data.bifurcation,
    };
    saveData(postData);
  };
  let handleNo = () => {
    setOpen(false);
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
    const postData = {
      pymtReqId: id,
      //matrixRefNo:data.matrixRefNo,
      matrixFileRefNo: data.matrixFileRefNo,
      mgmtCompId: data.mgmtCompId,
      issuanceAuthority: "Dubai Govt",
      tradeLicenseExpDate: data.tradeLicenseExpDate,
      agreementExpDate: data.agreementExpDate,
      budgetYear: data.budgetYear,
      invoiceDateYear: data.invoiceDateYear,
      invoiceAmount: data.invoiceAmount,
      supplierId: data.supplierId,
      serviceCode: data.serviceCode,
      buildingId: data.buildingId,
      hiddenTrade: data.hiddenTrade,
      hiddenAgree: data.hiddenAgree,
      attachmentFlag: "false",
      noProperDocuments: noDocumentData,
      autoRenewal: autoRenewalData,
      isGovernmentEntity: isGovernmentEntity,
      isInsuranceCompany: isInsuranceCompany,
      isExceptionalApproval: isExceptionalApproval,
      remarks: data.remarks,
      bifurcation: data.bifurcation,
    };
    saveData(postData);
  };
  let handleCancel = () => {
    setOpen(false);
    return false;
  };

  const loadAttachmentDetails = (ids) => {
    console.log("calling getMatrixRefNo");
    console.log(properties.getMatrixRefNo + `${ids}`);
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios.get(properties.getMatrixRefNo + `${ids}`, { headers: head }).then(
      (response) => {
        console.log(
          "Attachment Response Data loaded here" + JSON.stringify(response.data)
        );

        setData({
          data,
          matrixRefNo: response.data.strMatrixRefNo,
          invoiceAmount: response.data.invoiceAmount,
          matrixFileRefNo: response.data.matrixFileRefNo,
          subPaymentsCount: response.data.subPaymentsCount,
          tradeLicenseExpDate: response.data.tradeLicenseExpDate,
          agreementExpDate: response.data.agreementExpDate,
          supplierId: response.data.supplierId,
          mgmtCompId: response.data.mgmtCompId,
          buildingId: response.data.buildingId,
          serviceCode: response.data.serviceCode,
          budgetYear: response.data.budgetYear,
          bifurcation: response.data.bifurcation,
          autoRenewal: response.data.autoRenewal,
          isGovernmentEntity: response.data.isGovernmentEntity,
          isInsuranceCompany: response.data.isInsuranceCompany,
          // remarks: response.data.remarks,
        });

        if (response.data.tradeLicenseExpDate)
          if (response.data.tradeLicenseExpDate < curdate) {
            datecolor = "readcolor";
            document.getElementById("tradeLicenseExpDate").className =
              datecolor;
          }

        if (response.data.agreementExpDate)
          if (response.data.agreementExpDate < curdate) {
            datecolor = "readcolor";
            document.getElementById("agreementExpDate").className = datecolor;
          }

        if (response.data.autoRenewal)
          if (!"Y".localeCompare(response.data.autoRenewal))
            setAutoRenewal(true);

        if (response.data.isGovernmentEntity)
          if (!"Y".localeCompare(response.data.isGovernmentEntity))
            setGovernmentCheckBox(true);
        if (response.data.isInsuranceCompany)
          if (!"Y".localeCompare(response.data.isInsuranceCompany))
            setInsuranceCheckBox(true);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log("matrixRefNo completed");
  };
  console.log(
    "matrixfilerefno" + data.matrixFileRefNo + ":::" + data.subPaymentsCount
  );

  useEffect(() => {
    console.log("loading AttachmentDetails calling");
    loadAttachmentDetails(`${id}`);
  }, []);

  const saveData = (postData) => {
    console.log(postData);

    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    console.log(head);
    axios.post(properties.saveAttachmentData, postData, { headers: head }).then(
      (response) => {
        // alert("Data Saved Successfully");
        alert(response.data);
        if (!"Data Saved Successfully".localeCompare(response.data)) {
          setDisableSaveButton(true);
        }
        console.log("Response Data loaded here" + JSON.stringify(response));
        // window.close();
      },
      (error) => {
        console.error(error);
        alert("Error: Data not saved. Please try again  after sometime.");
        return false;
      }
    );
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
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
    const postData = {
      pymtReqId: id,
      mgmtCompId: data.mgmtCompId,
      issuanceAuthority: "Dubai Govt",
      tradeLicenseExpDate: data.tradeLicenseExpDate,
      agreementExpDate: data.agreementExpDate,
      budgetYear: data.budgetYear,
      invoiceDateYear: data.invoiceDateYear,
      invoiceAmount: data.invoiceAmount,
      supplierId: data.supplierId,
      serviceCode: data.serviceCode,
      buildingId: data.buildingId,
      // hiddenTrade: data.hiddenTrade,
      // hiddenAgree: data.hiddenAgree,
      attachmentFlag: "false",
      noProperDocuments: noDocumentData,
      autoRenewal: autoRenewalData,
      isGovernmentEntity: isGovernmentEntity,
      isInsuranceCompany: isInsuranceCompany,
      bifurcation: data.bifurcation,
      isExceptionalApproval: isExceptionalApproval,
      remarks: data.remarks,
    };
    if (isExcpApproval || noProperDocumentCheckBox) {
      if (!data.remarks) {
        alert("Reason is mandatory");
        return false;
      }
    }
    if (!isExcpApproval)
      if (
        data.budgetYear == undefined ||
        data.serviceCode == undefined ||
        data.serviceCode == "" ||
        data.budgetYear == ""
      ) {
        alert("Please select all the mandatory fields");
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
        console.log("count :: " + data.subPaymentsCount);
        console.log("conut type:: " + typeof data.subPaymentsCount);
        if (Number(data.subPaymentsCount) > 0) setOpen(true);
        else saveData(postData);
      }
    else {
      console.log("with count :: " + data.subPaymentsCount);
      console.log("conut type:: " + typeof data.subPaymentsCount);
      if (Number(data.subPaymentsCount) > 0) setOpen(true);
      else saveData(postData);
    }
  };

  let datecolor = "blackcolor";

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  var curdate = yyyy + "-" + mm + "-" + dd;
  console.log("today::" + curdate);

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

    // let splyer_id = null;
    // let mgmt_cpny_id = null;
    // if (newdata.supplierId != undefined) {
    //   splyer_id = newdata.supplierId;
    //   if (newdata.mgmtCompId == undefined) {
    //     mgmt_cpny_id = 0;
    //   } else if (
    //     newdata.mgmtCompId != undefined &&
    //     newdata.supplierId != undefined
    //   ) {
    //     mgmt_cpny_id = newdata.mgmtCompId;
    //   }

    //   console.info("m_c:" + mgmt_cpny_id + "s_n::" + splyer_id);

    // loadExpiryDates(splyer_id, mgmt_cpny_id);
    //  u}
  }

  function handleTrade(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);

    var dat = newdata.tradeLicenseExpDate;
    console.log("vardat" + dat);

    console.log("newdata.tradeLicenseExpDate:" + newdata.tradeLicenseExpDate);
    data.tradeLicenseExpDate = newdata.tradeLicenseExpDate;
    console.log("dates" + data.tradeLicenseExpDate + "::" + today);
    console.log(
      "condition" + (new Date(data.tradeLicenseExpDate) <= new Date())
    );

    if (data.tradeLicenseExpDate < curdate) {
      console.log("tradeLicenseExpDate < current date");
      datecolor = "readcolor";
      document.getElementById("tradeLicenseExpDate").className = datecolor;
    } else {
      document.getElementById("tradeLicenseExpDate").className = "blackcolor";
      // newdata.hiddenTrade = dat;
      // console.log("newdata.hidddenTrade" + newdata.hiddenTrade);
    }
  }

  function handleAgree(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);

    var dat = newdata.agreementExpDate;
    console.log("vardat" + dat);

    data.agreementExpDate = newdata.agreementExpDate;
    if (data.agreementExpDate < curdate) {
      console.log("agreementExpDate < current date");
      datecolor = "readcolor";
      document.getElementById("agreementExpDate").className = datecolor;
    } else {
      document.getElementById("agreementExpDate").className = "blackcolor";
      // newdata.hiddenAgree = dat;
      // console.log("newdata.hiddenAgree" + newdata.hiddenAgree);
    }
  }

  // data.tradeLicenseExpDate = loaddates.tradeLicenseExpDate;
  // data.agreementExpDate = loaddates.agreementExpDate;

  const fetchData = async () => {
    let headers = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    const company = await axios.get(properties.managementCompanyList, {
      headers: headers,
    });
    console.log("company", company.data);
    setData1(company.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchSupplier = async () => {
    const supplier = await axios.get(properties.supplierList);
    console.log("supplier" + supplier.data);
    setData2(supplier.data);
  };
  useEffect(() => {
    fetchSupplier();
  }, []);

  const fetchBuilding = async () => {
    const building = await axios.get(properties.buildingNames);
    console.log("building", building.data);
    setData3(building.data);
  };

  useEffect(() => {
    fetchBuilding();
  }, []);

  let isChecked = "NO";
  function documents(e) {
    isChecked = e.target.checked;
    if (isChecked === true) {
      isChecked = "YES";
    } else {
      isChecked = "NO";
    }
    // alert(isChecked);
  }

  let submitData = (e) => {
    console.log("Submit:: " + autoRenewal);
  };

  let auto_Renewal = "NO";
  let handleAutoRenewal = (e) => {
    setAutoRenewal(e.target.checked);
  };
  let handleInsCheckbox = (e) => {
    setInsuranceCheckBox(e.target.checked);
  };
  let handleGovCheckbox = (e) => {
    console.log(e.target.checked);
    setGovernmentCheckBox(e.target.checked);
  };
  let handleIsExcpApproval = (e) => {
    console.log(e.target.checked);
    setIsExcpApproval(e.target.checked);
  };

  let handleNoProperDocumentCheckBox = (e) => {
    console.log(e.target.checked);
    setNoProperDocumentCheckBox(e.target.checked);
  };

  function renew(e) {
    auto_Renewal = e.target.checked;
    if (auto_Renewal === true) {
      auto_Renewal = "YES";
    } else {
      auto_Renewal = "NO";
    }
    // alert(auto_Renewal);
  }

  let insurance = "NO";
  function insuranceCompany(e) {
    insurance = e.target.checked;
    if (insurance === true) {
      insurance = "YES";
    } else {
      insurance = "NO";
    }
    // alert(insurance);
  }

  let govt = "NO";
  function Government(e) {
    govt = e.target.checked;
    if (govt === true) {
      govt = "YES";
    } else {
      govt = "NO";
    }
    // alert(govt);
  }

  //checking spe char

  let checkSpacialChar = (event) => {
    var regex = /^[!@#\$%\^\&*\)\(+/<>);[]_-]+$/g;
    return event.key.match(regex);
  };

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
              value={data.matrixRefNo}
              size='sm'
              className='input'
              autoComplete='off'
            />
          </Col>

          <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
            Budget Year
          </Label>
          <Col sm={2}>
            <Input
              autoComplete='off'
              type='number'
              maxLength={4}
              onChange={(e) => handle(e)}
              id='budgetYear'
              value={data.budgetYear}
              size='sm'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }} className='required'>
            Supplier Name
          </Label>
          <Col sm={2}>
            <Input
              autoComplete='off'
              size='sm'
              type='select'
              id='supplierId'
              value={data.supplierId}
              size='sm'
              disabled='disabled'
              style={{ width: "350px" }}
              onChange={(e) => handle(e)}>
              <option selected disabled>
                Please select a supplier
              </option>
              {data2.map((opt2) => (
                <option value={opt2.supplierId}>{opt2.supplierName}</option>
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
              maxLength={4}
              onChange={(e) => handle(e)}
              id='invoiceDateYear'
              value={data.invoiceDateYear}
              size='sm'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }} className='required'>
            Management Company Name
          </Label>
          <Col sm={2}>
            <Input
              size='sm'
              type='select'
              autoComplete='off'
              id='mgmtCompId'
              value={data.mgmtCompId}
              disabled='disabled'
              style={{ width: "350px" }}
              onChange={(e) => handle(e)}>
              <option selected disabled>
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
              onChange={(e) => handle(e)}
              id='invoiceAmount'
              defaultValue={data.invoiceAmount}
              size='sm'
              disabled='disabled'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }}>
            Trade License Expiry Date
          </Label>
          <Col sm={2}>
            <Input
              type='date'
              autoComplete='off'
              className={datecolor}
              onChange={(e) => handleTrade(e)}
              id='tradeLicenseExpDate'
              defaultValue={data.tradeLicenseExpDate}
              size='sm'
            />
            <Input type='text' id='hiddenTrade' hidden />
          </Col>

          <Label sm={2} style={{ marginLeft: "10rem" }} className='required'>
            Issuance Authority
          </Label>
          <Col sm={2}>
            <Input
              type='text'
              autoComplete='off'
              onChange={(e) => handle(e)}
              id='issuanceAuthority'
              // value={data.issuanceAuthority}
              value='Dubai Govt'
              size='sm'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }}>
            {" "}
            Agreement Expiry Date
          </Label>
          <Col sm={2}>
            <Input
              type='date'
              autoComplete='off'
              className={datecolor}
              onChange={(e) => handleAgree(e)}
              id='agreementExpDate'
              defaultValue={data.agreementExpDate}
              size='sm'
            />
            <Input type='text' id='hiddenAgree' hidden />
          </Col>

          <Col md={4}>
            <Label style={{ marginLeft: "10rem" }} check>
              <Checkbox
                color='primary'
                checked={governmentCheckBox}
                onChange={handleGovCheckbox}
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
            {" "}
            Building Name
          </Label>
          <Col sm={2}>
            <Input
              size='sm'
              type='select'
              autoComplete='off'
              id='buildingId'
              value={data.buildingId}
              disabled='disabled'
              onChange={(e) => handle(e)}>
              <option selected hidden>
                Please select building
              </option>
              {data3.map((opt) => (
                <option value={opt.buildingId}>{opt.buildingName}</option>
              ))}
            </Input>
          </Col>

          <Col md={4}>
            <Label style={{ marginLeft: "10rem" }} check>
              <Checkbox
                color='primary'
                checked={insuranceCheckBox}
                onChange={handleInsCheckbox}
              />
              Insurance Company
            </Label>
          </Col>

          <Col md={2.5}>
            <Label style={{ marginLeft: "-2rem" }} check>
              <Checkbox
                color='primary'
                onChange={handleNoProperDocumentCheckBox}
              />
              No proper Data/Documents
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
              // onKeyPress={(event) => checkSpacialChar(event)}
              onChange={(e) => handle(e)}
              id='serviceCode'
              value={data.serviceCode}
              size='sm'
            />
          </Col>
          <Col md={4} className=''>
            <Label style={{ marginLeft: "10rem" }} check>
              <Checkbox color='primary' onChange={handleIsExcpApproval} />
              Is Exceptional Approval
            </Label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3} style={{ marginLeft: "" }}>
            Bifurcation
          </Label>
          <Col sm={2}>
            <Input
              type='text'
              autoComplete='off'
              onChange={(e) => handle(e)}
              id='bifurcation'
              name='bifurcation'
              value={data.bifurcation}
              size='sm'
              style={{ marginLeft: "-5rem" }}
            />
          </Col>

          <Label sm={3} style={{ marginLeft: "5rem" }}>
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
              style={{ marginLeft: "-15rem", width: "305px", height: "60px" }}
            />
          </Col>

          <Col sm={2} className='mt-3'>
            <Button
              disabled={disableSaveButton}
              style={{
                background: "#254a9e",
                color: "white",
                position: "relative",
                marginLeft: "55rem",
              }}>
              Save
            </Button>
          </Col>

          <Col sm={2} className='mt-3'>
            <Button
              style={{
                background: "#254a9e",
                color: "white",
                position: "relative",
                marginLeft: "47rem",
              }}
              onClick={() => window.close()}>
              Close
            </Button>
          </Col>
        </FormGroup>

        <Dialog
          open={open}
          //onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>
            Attachment Data Confirmation
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              This Payment Request is belongs to bulk payments, which is having{" "}
              {data.subPaymentsCount} payment requests. Do you want to apply
              same values to other Payment Requests also?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleYes}
              color='primary'
              style={{ width: "5rem" }}>
              Yes
            </Button>
            <Button
              onClick={handleNo}
              color='primary'
              style={{ width: "5rem" }}>
              No
            </Button>
            <Button
              onClick={handleCancel}
              color='primary'
              style={{ width: "5rem" }}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Form>

      <br />
      <hr className='hr' />

      <div className='App'>
        <DocumentUpload pymtReqId={id} />
        <DocumentTable pymtReqId={id} />
      </div>
    </div>
  );
}

function Child() {
  let { id } = useParams();
  return <div></div>;
}

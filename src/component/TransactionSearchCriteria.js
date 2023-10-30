import "./mydiv.css";

import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import SearchResults from "./SearchResults";
import axios from "axios";
import { properties } from "./properties";
import ReactSession from "react-client-session/dist/ReactSession";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MatrixRefNo: "",
      BeneficiaryName: "",
      SupplierList: [],
      CustomerRef: "",
      currency: "",
      DebitAccountNumber: "",
      Product: "",
      subProduct: "",
      InitiationDateFrom: "",
      InitiationDateTo: "",
      AmountFrom: "",
      AmountTo: "",
      Sortby: "DESC",
      SortOrder: "",
      MatrixFileRefNo: "",
      mcNameEn: "",
      BuildingName: "",
      buildingId: "",
      Status: "",
      SearchResult: [],
      dropdowndata: [],
      buildingDropDownData: [],
    };
  }

  handleMatrixRefNo = (event) => {
    this.setState({
      MatrixRefNo: event.target.value,
    });
  };
  handleBeneficiaryName = (event) => {
    this.setState({
      BeneficiaryName: event.target.value,
    });
  };
  handleCustomerRef = (event) => {
    this.setState({
      CustomerRef: event.target.value,
    });
  };
  handlecurrency = (event) => {
    this.setState({
      currency: event.target.value,
    });
  };
  handleProduct = (event) => {
    this.setState({
      Product: event.target.value,
    });
  };
  handlesubProduct = (event) => {
    this.setState({
      subProduct: event.target.value,
    });
  };
  handleInitiationDateFrom = (event) => {
    this.setState({
      InitiationDateFrom: event.target.value,
    });
  };
  handleInitiationDateTo = (event) => {
    this.setState({
      InitiationDateTo: event.target.value,
    });
  };
  handleAmountFrom = (event) => {
    this.setState({
      AmountFrom: event.target.value,
    });
  };
  handleAmountTo = (event) => {
    this.setState({
      AmountTo: event.target.value,
    });
  };
  handleSortby = (event) => {
    this.setState({
      Sortby: event.target.value,
    });
  };
  handleSortOrder = (event) => {
    this.setState({
      SortOrder: event.target.value,
    });
  };
  handleMatrixFileRefNo = (event) => {
    this.setState({
      MatrixFileRefNo: event.target.value,
    });
  };
  handleDebitAccountNumber = (event) => {
    this.setState({
      DebitAccountNumber: event.target.value,
    });
  };
  handleManagementCompanyName = (event) => {
    this.setState({
      mcNameEn: event.target.value,
    });
  };
  handleBuildingName = (event) => {
    console.log(event.target.value);
    this.setState({
      buildingId: event.target.value,
    });
  };

  valueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleStatus = (event) => {
    this.setState({
      Status: event.target.value,
    });
  };
  fetchBuilding = async () => {
    const building = await axios.get(properties.buildingNames);
    this.setState({ buildingDropDownData: [] });
    // this.setState({ buildingDropDownData: building.data });
  };
  fetchSupplier = async () => {
    const supplier = await axios.get(properties.supplierList);
    this.setState({ SupplierList: supplier.data });
  };
  componentDidMount() {
    this.fetchBuilding();
    this.fetchSupplier();
    axios.get(properties.managementCompanyList).then(
      (response) => {
        this.setState({ dropdowndata: response.data });
      },
      (error) => {
        console.log("dropdown : " + error);
      }
    );
  }

  //get building name based on management comp
  getBuildingNames = async (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    this.setState({ [name]: value });
    console.log(`${properties.getBuildingsByMgmtComp}/${e.target.value}`);
    const building = await axios.get(
      `${properties.getBuildingsByMgmtComp}/${e.target.value}`
    );
    console.log("Mapped building names :" + building.data);
    if (building.data) this.setState({ buildingDropDownData: building.data });
    else this.setState({ buildingDropDownData: [] });
  };

  handleSubmit = (Event) => {
    Event.preventDefault();

    if (
      this.state.MatrixRefNo == "" &&
      this.state.BeneficiaryName == "" &&
      this.state.CustomerRef == "" &&
      this.state.currency == "" &&
      this.state.subProduct == "" &&
      this.state.InitiationDateFrom == "" &&
      this.state.InitiationDateTo == "" &&
      this.state.AmountFrom == "" &&
      this.state.AmountTo == "" &&
      this.state.Sortby != "" &&
      this.state.SortOrder == "" &&
      this.state.DebitAccountNumber == "" &&
      this.state.Status == "" &&
      this.state.mcNameEn == "" &&
      this.state.buildingId == ""
    ) {
      alert("Please Enter At least Two Filters!");
      return false;
    }

    if (
      this.state.MatrixRefNo == "" &&
      this.state.BeneficiaryName == "" &&
      this.state.CustomerRef == "" &&
      this.state.currency == "" &&
      this.state.subProduct == "" &&
      this.state.InitiationDateFrom == "" &&
      this.state.InitiationDateTo == "" &&
      this.state.AmountFrom == "" &&
      this.state.AmountTo == "" &&
      this.state.Sortby != "" &&
      this.state.SortOrder != "" &&
      this.state.DebitAccountNumber == "" &&
      this.state.Status == ""
    ) {
      alert("Please Enter More Filters!");
      return false;
    }

    const postbody = {
      matrixRefNo: this.state.MatrixRefNo,
      subProduct: this.state.subProduct,
      debitAccountNumberDesc: this.state.DebitAccountNumber,
      beneficiaryName: this.state.BeneficiaryName,
      customerReference: this.state.CustomerRef,
      status: this.state.Status,
      paymentCurrency: this.state.currency,
      amountFrom: this.state.AmountFrom,
      amountTo: this.state.AmountTo,
      initiatorDateFrom: this.state.InitiationDateFrom,
      initiatorDateTo: this.state.InitiationDateTo,
      sortOrder: this.state.SortOrder,
      sortBy: this.state.Sortby,
      mcNameEn: this.state.mcNameEn,
      buildingName: this.state.buildingName,
    };

    console.log("SUPPLIER!!" + this.state.BeneficiaryName);
    console.log("MGMT!!" + this.state.mcNameEn);
    console.log("this.state.buildingId" + this.state.buildingId);
    console.log("this.state.buildingName" + this.state.buildingName);
    var head = {
      "Content-Type": "application/json",
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios.post(properties.searchResult, postbody, { headers: head }).then(
      (response) => {
        console.log("loading....");
        this.setState({
          SearchResult: response.data.paymentData,
          count: response.data.count,
        });
        if (
          !response.data.paymentData ||
          (response.data.paymentData == 0 && response.data.count == 0)
        ) {
          alert("No Records found!");
        }

        if (response.data.count > 0) {
          alert(
            "There are " +
              response.data.count +
              " records, Please apply more filters!"
          );
        }
      },
      (error) => {
        console.log("Error! : " + error);
      }
    );
  };

  resetForm = () => {
    this.setState({
      ...this.state,
      MatrixRefNo: "",
      BeneficiaryName: "",
      // SupplierList: [],
      CustomerRef: "",
      currency: "",
      DebitAccountNumber: "",
      Product: "",
      subProduct: "",
      InitiationDateFrom: "",
      InitiationDateTo: "",
      AmountFrom: "",
      AmountTo: "",
      Sortby: "",
      SortOrder: "",
      MatrixFileRefNo: "",
      mcNameEn: "",
      BuildingName: "",
      buildingDropDownData: [],
      Status: "",
    });
  };

  render() {
    const {
      MatrixRefNo,
      MatrixFileRefNo,
      BeneficiaryName,
      SupplierList,
      CustomerRef,
      currency,
      Product,
      subProduct,
      InitiationDateFrom,
      InitiationDateTo,
      AmountFrom,
      AmountTo,
      Sortby,
      SortOrder,
      DebitAccountNumber,
      mcNameEn,
      BuildingName,
      Status,
      dropdowndata,
      buildingDropDownData,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div style={{ maxwidth: "100%", marginTop: "5px" }}>
            <hr />
            <Card>
              <CardTitle
                tag='h5'
                id='tit1'
                style={{ background: "#254a9e", color: "white" }}>
                Transaction Search Criteria
              </CardTitle>
              <CardBody>
                <FormGroup row>
                  <Label for='MatrixRefNo' sm={2}>
                    Matrix Ref No:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='text'
                      name='MatrixRefNo'
                      value={MatrixRefNo}
                      onChange={this.valueChange}
                    />
                  </Col>

                  <Label for='CustomerRef' sm={2}>
                    Customer Ref:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='text'
                      name='CustomerRef'
                      value={CustomerRef}
                      onChange={this.valueChange}
                    />
                  </Col>
                  <Label
                    for='ManagementCompanyName'
                    sm={2}
                    style={{ marginTop: "-0.7rem", marginBottom: "-1rem" }}>
                    Management Company Name:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='select'
                      name='mcNameEn'
                      value={mcNameEn}
                      onChange={this.valueChange}
                      onChange={(e) => this.getBuildingNames(e)}>
                      <option selected hidden>
                        Please select a company
                      </option>
                      {dropdowndata.map((opt) => (
                        <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
                      ))}
                    </Input>
                  </Col>
                  {/*<Label for='DebitAccountNumber' sm={2}>
                    Account Number:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='text'
                      name='DebitAccountNumber'
                      value={DebitAccountNumber}
                      onChange={this.valueChange}
                    />
                  </Col> */}
                </FormGroup>

                <FormGroup row>
                  {/* <Label for='BeneficiaryName' sm={2}>
                    Beneficiary Name:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='text'
                      name='BeneficiaryName'
                      value={BeneficiaryName}
                      onChange={this.valueChange}
                    />
                  </Col> */}

                  <Label for='BeneficiaryName' sm={2}>
                    Beneficiary Name:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='select'
                      name='BeneficiaryName'
                      id='BeneficiaryName'
                      // value={BeneficiaryName}
                      onChange={this.valueChange}>
                      <option selected hidden>
                        Select a beneficiary name
                      </option>
                      {SupplierList.map((opt) => (
                        <option value={opt.supplierId}>
                          {opt.supplierName}
                        </option>
                      ))}
                    </Input>
                  </Col>
                  <Label for='subProduct' sm={2}>
                    Sub Product:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='text'
                      name='subProduct'
                      value={subProduct}
                      onChange={this.valueChange}></Input>
                  </Col>
                  {/* <Label for='BuildingName' sm={2}>
                    Building Name:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='text'
                      name='BuildingName'
                      id={BuildingName}
                      onChange={this.valueChange}
                    />
                  </Col> */}

                  <Label for='buildingName' sm={2}>
                    Building Name:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='select'
                      name='buildingName'
                      id='buildingName'
                      // value={BuildingName}
                      onChange={this.valueChange}>
                      <option selected hidden>
                        Select a building name
                      </option>
                      {buildingDropDownData.map((opt) => (
                        <option value={opt.buildingId}>
                          {opt.buildingName}
                        </option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for='InitiationDateFrom' sm={2}>
                    Initiation Date From:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='date'
                      name='InitiationDateFrom'
                      value={InitiationDateFrom}
                      placeholder='date placeholder'
                      onChange={this.valueChange}
                    />
                  </Col>
                  <Label for='InitiationDateTo' sm={2}>
                    Initiation Date To:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='date'
                      name='InitiationDateTo'
                      value={InitiationDateTo}
                      placeholder='date placeholder'
                      onChange={this.valueChange}
                    />
                  </Col>

                  <Label for='Status' sm={2}>
                    Status:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='select'
                      name='Status'
                      value={Status}
                      onChange={this.valueChange}>
                      <option value=''>select</option>
                      <option value='APPROVED'>APPROVED</option>
                      <option value='EXCEPTION'>EXCEPTION</option>
                      <option value='FAILED'>FAILED</option>
                      <option value='IN PROGRESS'>IN PROGRESS</option>
                      <option value='PENDING'>PENDING</option>
                      <option value='REJECTED'>REJECTED</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for='AmountFrom' sm={2}>
                    Amount From:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='text'
                      name='AmountFrom'
                      value={AmountFrom}
                      onChange={this.valueChange}
                    />
                  </Col>

                  <Label for='AmountTo' sm={2}>
                    Amount To:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='text'
                      name='AmountTo'
                      value={AmountTo}
                      onChange={this.valueChange}
                    />
                  </Col>

                  <Label for='currency' sm={2}>
                    Currency:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='select'
                      name='currency'
                      value={currency}
                      onChange={this.valueChange}>
                      <option value=''>select</option>
                      <option value='AED'>AED</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for='DebitAccountNumber' sm={2}>
                    Account Number:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='text'
                      name='DebitAccountNumber'
                      value={DebitAccountNumber}
                      onChange={this.valueChange}
                    />
                  </Col>
                  {/* <Label for='ManagementCompanyName' sm={2}>
                    Management Company Name:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='select'
                      name='mcNameEn'
                      value={mcNameEn}
                      onChange={this.valueChange}>
                      <option selected hidden>
                        Please select a company
                      </option>
                      {dropdowndata.map((opt) => (
                        <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
                      ))}
                    </Input>
                  </Col> */}
                  <Label for='SortOrder' sm={2}>
                    Sort Order:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='select'
                      name='SortOrder'
                      value={SortOrder}
                      onChange={this.valueChange}>
                      <option value=''>select</option>
                      <option value='MGMT_COMP_ID'>Management Company</option>
                      <option value='BENEFICIARY_NAME'>Beneficiary Name</option>
                      <option value='INITIATOR_DATE'>Initiation Date</option>
                    </Input>
                  </Col>

                  <Label for='Sortby' sm={2}>
                    Sort By:
                  </Label>
                  <Col sm={2}>
                    <Input
                      size='sm'
                      type='select'
                      name='Sortby'
                      value={Sortby}
                      onChange={this.valueChange}
                      defaultValue='Ascending'>
                      <option value='DESC'>Descending</option>
                      <option value='ASC'>Ascending</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row></FormGroup>
                <Col sm={{ offset: 9 }}>
                  <Button
                    color='primary'
                    type='submit'
                    id='Button'
                    style={{
                      borderRadius: "5%",
                      margin: "1%",
                      marginLeft: "130px",
                      background: "#254a9e",
                      color: "white",
                    }}>
                    Search
                  </Button>
                  <Button
                    color='primary'
                    type='reset'
                    style={{
                      background: "#254a9e",
                      color: "white",
                      borderRadius: "5%",
                      marginLeft: "55px",
                    }}
                    onClick={this.resetForm}
                    id='Button'>
                    Reset
                  </Button>
                </Col>
              </CardBody>
            </Card>
          </div>
        </div>

        {console.info("from Parent : " + this.state.SearchResult)}
        <SearchResults Data={this.state.SearchResult} />
      </form>
    );
  }
}

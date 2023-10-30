import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Container,
} from "reactstrap";
import { ReportsTable } from "./ReportsTable";
import { properties } from "./properties";
import ReactSession from "react-client-session/dist/ReactSession";
export default function ReportsForm() {
  const [reportData, setReportData] = useState([]);

  const [data, setData] = useState([]);

  const [data1, setData1] = useState([]);

  const [data2, setData2] = useState([]);

  const report = {
    mgmtCompId: data.mgmtCompId,
    supplierId: data.supplierId,
    budgetYear: data.budgetYear,
    invoiceYear: data.invoiceYear,
    //budgetRangeFrom: data.budgetRangeFrom,
    //budgetRangeTo: data.budgetRangeTo,
  };

  const loadReportData = (report) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.generateReports, report, { headers: head })
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          if (data.length) {
            setReportData(data);
            console.info("report response << : " + JSON.stringify(data));
          } else {
            alert("No Record Found");
            setReportData([]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.mgmtCompId) {
      alert("Please select Management Company");
      return false;
    } else {
      loadReportData(report);
      event.preventDefault();
    }
  };

  const downloadPDFData = (report) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.reportsPDF, report, { headers: head })
      .then((response) => response.data)
      .then(
        (data) => {
          console.info("report response << : " + data);

          const downloadLink = document.createElement("a");
          const fileName = "Report.pdf";
          const linkSource = `data:application/pdf;base64,${data}`;
          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const downloadPDF = (event) => {
    downloadPDFData(report);
    event.preventDefault();
  };

  const ExcelData = (report) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.reportsExcel, report, { headers: head })
      .then((response) => response.data)
      .then((data) => {
        console.log("report data response" + data);
        console.table("responseData>>>+++" + JSON.stringify(data));

        const downloadLink = document.createElement("a");
        const fileName = "Report.xlsx";
        const linkSource = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${data}`;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      });
  };

  const ExcelSubmit = (event) => {
    ExcelData(report);
    event.preventDefault();
  };

  const fetchManagementComany = async () => {
    const company = await axios.get(properties.managementCompanyList);
    console.log("company" + company.data);
    setData1(company.data);
  };
  useEffect(() => {
    fetchManagementComany();
  }, []);

  const fetchSupplier = async () => {
    const supplier = await axios.get(properties.supplierList);
    console.log("supplier" + supplier.data);
    setData2(supplier.data);
  };
  useEffect(() => {
    fetchSupplier();
  }, []);

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div>
      <div className='App' style={{ overflowX: "hidden" }}>
        <Form className='my-3 ml-5' onSubmit={handleSubmit}>
          <FormGroup row>
            <Label sm={2} className='required'>
              Management Company
            </Label>
            <Col sm={2}>
              <Input
                size='sm'
                type='select'
                id='mgmtCompId'
                value={data.mgmtCompId}
                onChange={(e) => handle(e)}>
                <option selected disabled>
                  Please select a company
                </option>
                {data1.map((opt) => (
                  <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
                ))}
              </Input>
            </Col>

            <Label sm={2}>Budget Year</Label>
            <Col sm={2} style={{ marginLeft: "-7%" }}>
              <Input
                type='number'
                maxLength={4}
                size='sm'
                id='budgetYear'
                value={data.budgetYear}
                onChange={(e) => handle(e)}
              />
            </Col>

            <Col >
              <button
                size='sm'
                style={{
                  backgroundColor: "#254a9e",
                  borderColor: "#254a9e",
                  fontSize: "11px",
                }}
                type='submit'
                class='btn btn-primary'>
                Generate Report
              </button>
            </Col>

          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Supplier Name</Label>
            <Col sm={2}>
              <Input
                size='sm'
                type='select'
                id='supplierId'
                value={data.supplierId}
                size='sm'
                onChange={(e) => handle(e)}>
                <option selected disabled>
                  Please select a supplier
                </option>
                {data2.map((opt2) => (
                  <option value={opt2.supplierId}>{opt2.supplierName}</option>
                ))}
              </Input>
            </Col>

            <Label sm={2}>Invoice Year</Label>
            <Col sm={2} style={{ marginLeft: "-7%" }}>
              <Input
                type='number'
                maxLength={4}
                size='sm'
                id='invoiceYear'
                value={data.invoiceYear}
                onChange={(e) => handle(e)}
              />
            </Col>

            <div class='col ml-auto' >
              <button
                style={{ backgroundColor: "#254a9e", borderColor: "#254a9e" }}
                type='button'
                class='btn btn-primary btn-sm'
                onClick={downloadPDF}>
                <i class='fa fa-download' aria-hidden='true'></i> PDF
              </button>{" "}
              <button
                style={{ backgroundColor: "#254a9e", borderColor: "#254a9e" }}
                type='button'
                class='btn btn-primary btn-sm'
                onClick={ExcelSubmit}>
                <i class='fa fa-download' aria-hidden='true'></i> EXCEL
              </button>{" "}
            </div>

          </FormGroup>
          {/*<FormGroup>
            <Col sm={2} style={{ marginLeft: "60%" }}>
              <button
                size='sm'
                style={{
                  backgroundColor: "#254a9e",
                  borderColor: "#254a9e",
                  fontSize: "11px",
                  // marginLeft: "10%",
                }}
                type='submit'
                class='btn btn-primary'>
                Generate Report
              </button>
            </Col>
          </FormGroup>

          <div style={{ marginTop: "-3rem" }}>
            <button
              style={{
                backgroundColor: "#254a9e",
                borderColor: "#254a9e",
                marginLeft: "75%",
              }}
              type='button'
              class='btn btn-primary btn-sm'
              onClick={downloadPDF}>
              <i class='fa fa-download' aria-hidden='true'></i> PDF
            </button>{" "}
            <button
              style={{
                backgroundColor: "#254a9e",
                marginLeft: "10px",
                borderColor: "#254a9e",
              }}
              type='button'
              class='btn btn-primary btn-sm'
              onClick={ExcelSubmit}>
              <i class='fa fa-download' aria-hidden='true'></i> EXCEL
            </button>{" "}
          </div>*/}
          {/* </FormGroup>
           <FormGroup>
          <Col sm={11}>
            <button
              style={{
                backgroundColor: "#254a9e",
                borderColor: "#254a9e",
                fontSize: "11px",
                marginLeft: "65%",
              }}
              type='submit'
              class='btn btn-primary'>
              Generate Report
            </button>
          </Col>
           </FormGroup> 
          <div style={{ marginTop: "-2rem" }}>
            <button
              style={{
                backgroundColor: "#254a9e",
                marginLeft: "80%",
                borderColor: "#254a9e",
              }}
              type='button'
              class='btn btn-primary btn-sm'
              onClick={downloadPDF}>
              <i class='fa fa-download' aria-hidden='true'></i> PDF
            </button>{" "}
            <button
              style={{
                backgroundColor: "#254a9e",
                marginLeft: "10px",
                borderColor: "#254a9e",
              }}
              type='button'
              class='btn btn-primary btn-sm'
              onClick={ExcelSubmit}>
              <i class='fa fa-download' aria-hidden='true'></i> EXCEL
            </button>{" "}
          </div> */}
        </Form>

        <ReportsTable dataArray={reportData} />
      </div>
    </div>
  );
}

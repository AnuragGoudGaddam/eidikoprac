import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import axios from "axios";
import { TransactionalReportTable } from "./TransactionalReportTable";
import { properties } from "./properties";
import ReactSession from "react-client-session/dist/ReactSession";
function TransactionalReport() {
  const [data, setData] = useState([]);

  const [reportData, setReportData] = useState([]);

  const report = {
    transactionFrom: data.transactionFrom,
    transactionTo: data.transactionTo,
  };

  const loadReportData = (report) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.generateTransactionalReports, report, { headers: head })
      .then((response) => response.data)
      .then(
        (data) => {
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
    if (!data.transactionFrom || !data.transactionTo) {
      alert("Please select mandatory filed");
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
      .post(properties.transactionalPdf, report, { headers: head })
      .then((response) => response.data)
      .then(
        (data) => {
          console.info("report response << : " + data);

          const downloadLink = document.createElement("a");
          const fileName = "TransactionalReport.pdf";
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
      .post(properties.transactionalExcel, report, { headers: head })
      .then((response) => response.data)
      .then((data) => {
        console.log("report data response" + data);
        console.table("responseData>>>+++" + JSON.stringify(data));

        const downloadLink = document.createElement("a");
        const fileName = "TransactionalExcel.xlsx";
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

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div className='App' style={{ overflowX: "hidden" }}>
      <Form className='my-3 ml-5' onSubmit={handleSubmit}>
        <FormGroup row>
          <Label sm={2} style={{ marginRight: -60 }} className='required'>
            Transaction From
          </Label>
          <Col sm={2}>
            <Input
              type='date'
              size='sm'
              id='transactionFrom'
              value={data.transactionFrom}
              onChange={(e) => handle(e)}
            />
          </Col>

          <Label sm={2} style={{ marginRight: -70 }} className='required'>
            Transaction To
          </Label>
          <Col sm={2}>
            <Input
              type='date'
              size='sm'
              id='transactionTo'
              value={data.transactionTo}
              onChange={(e) => handle(e)}
            />
          </Col>

          <Col sm={2}>
            <button
              size='sm'
              style={{
                backgroundColor: "#254a9e",
                borderColor: "#254a9e",
                fontSize: "11px",
                marginLeft: "10%",
              }}
              type='submit'
              class='btn btn-primary'>
              Generate Report
            </button>
          </Col>
        </FormGroup>

        <div style={{ marginTop: "-3.4rem" }}>
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
        </div>
      </Form>

      <TransactionalReportTable dataArray={reportData} />
    </div>
  );
}

export default TransactionalReport;

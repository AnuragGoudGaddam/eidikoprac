import React, { useState, useEffect } from "react";
import { CompletedRequestTable } from "./CompletedRequestTable";
import { properties } from "./properties";
import axios from "axios";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import ReactSession from "react-client-session/dist/ReactSession";
function CompletedRequest() {
  const [compData, setCompData] = useState([]);

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [building, setBuilding] = useState([]);
  const [company, setCompany] = useState([]);
  const [years, setYears] = useState([]);
  const [status, setStatus] = useState("");
  const [isEditClicked, setIsEditClicked] = useState(false);



  const completedData = {
    mgmtCompId: data.mgmtCompId,
    // supplierId: data.supplierId,
    buildingId: data.buildingId,
    // status: data.status,
    // budgetYear: data.budgetYear
  };
  //'http://localhost:3001/completedrequest/completedRequests'
  const loadCompletedData = (completedData) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.completedDataUrl,completedData)
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          if (data.length) {
            setCompData(data);
            console.info("completed response << : " + JSON.stringify(data));
          } else {
            alert("No Record Found");
            setCompData([]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleSubmit = (event) => {
    console.log(data);
    if (!data.mgmtCompId || !data.buildingId) {
      event.preventDefault();
      alert("Please select Mandatory fields");
      return false;
    }
    loadCompletedData(completedData);
    event.preventDefault();
  };
  //'http://localhost:3001/completedrequest/pdfGenerate'
  const downloadPDFData = (completedData) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.completedPdf, completedData, { headers: head })
      .then((response) => response.data)
      .then(
        (data) => {
          console.info("completed response << : " + data);

          const downloadLink = document.createElement("a");
          const fileName = "CompletedPayments.pdf";
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
    downloadPDFData(completedData);
    event.preventDefault();
  };
  //'http://localhost:3001/completedrequest/excelGenerate'
  const ExcelData = (completedData) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.completedExcel, completedData, { headers: head })
      .then((response) => response.data)
      .then((data) => {
        console.log("completed data response" + data);
        console.table("completed>>>+++" + JSON.stringify(data));

        const downloadLink = document.createElement("a");
        const fileName = "CompletedPayments.xlsx";
        const linkSource = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${data}`;
        downloadLink.href = linkSource;
       downloadLink.download = fileName;
        downloadLink.click();
      });
  };
  const ExcelSubmit = (event) => {
    ExcelData(completedData);
    event.preventDefault();
  };

  const fetchManagementComany = async () => {
    const company = await axios.get(properties.managementCompanyList);
    console.log("company", company.data);
    setData1(company.data);
  };
  useEffect(() => {
    fetchManagementComany();
  }, []);

  const fetchSupplier = async () => {
    const supplier = await axios.get(properties.supplierList);
    console.log("supplier", supplier.data);
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

  const getYears = async () => {
    var date = new Date();
    let year = [];
    for (var i = 2018; i <= date.getFullYear(); i++) {
      year.push(i);
    }
    setYears(year.reverse());
  };
  useEffect(() => {
    getYears();
  }, []);

  // useEffect(() => {
  //   fetchBuilding();
  // }, []);

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handlePaymentReversal = () => {
    console.log("Payment reversal initiated.");
  };
  const handleEditClick = () => {
    if (isEditClicked) {
     
      setIsEditClicked(false);
    } else {
      
      setIsEditClicked(true);
    }
  };
  const handleReserveClick = () => {
    
    console.log("Reserve button clicked.");
  };

 
  let getBuildingNames = async (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
    console.log(`${properties.getBuildingsByMgmtComp}/${e.target.value}`);
    const building = await axios.get(
      `${properties.getBuildingsByMgmtComp}/${e.target.value}`
    );
    console.log("Mapped building names :" + building.data);
    if (building.data) setBuilding(building.data);
    else setBuilding([]);
    // setData({...data,['buildingId']:""})
    //   console.log('new Data '+data)
  };
  return (
    <div>
      <div className='App' style={{ overflowX: "hidden" }}>
        <Form className='my-3 ml-5' onSubmit={handleSubmit}>
          <FormGroup row>
            <Label sm={2} className='required'>
              Management Company
            </Label>
            <Col sm={2} style={{ marginLeft: "-1%" }}>
              <Input
                size='sm'
                type='select'
                id='mgmtCompId'
                name='mgmtCompId'
                value={data.mgmtCompId}
                onChange={(e) => getBuildingNames(e)}>
                <option selected disabled>
                  Please select a company
                </option>

                <option value='332'>Eidiko</option>
                <option value='335'>Eid</option>


                {/* {data1.map((opt) => (
                  <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
                ))} */}
              </Input>
            </Col>

            <Label sm={2}>Supplier Name</Label>
            <Col sm={2} style={{ marginLeft: "-2%" }}>
              <Input
                style={{ marginLeft: -20 }}
                size='sm'
                type='select'
                id='supplierId'
                value={data.supplierId}
                onChange={(e) => handle(e)}>
                <option selected disabled>
                  Please select a supplier
                </option>
                {data2.map((opt2) => (
                  <option value={opt2.supplierId}>{opt2.supplierName}</option>
                ))}
              </Input>
            </Col>

            <Col>
              <button
                size='sm'
                style={{
                  backgroundColor: "#254a9e",
                  borderColor: "#254a9e",
                  fontSize: "11px",
                }}
                type='submit'
                class='btn btn-primary'>
                Search
              </button>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2} className='required'>
              Building Name
            </Label>
            <Col sm={2} style={{ marginLeft: "-1%" }}>
              <Input
                size='sm'
                type='select'
                id='buildingId'
                value={data.buildingId}
                onChange={(e) => handle(e)}>
                <option selected disabled>
                  Please select a building
                </option>

                <option value='731'>building Name</option>
                <option value='816'>Mjr Name</option>

              {/* <option value='730'>BARTON HOUSE2</option>
              <option value='731'>BENNETT HOUSE1</option>  */}

                {/* {building.map((opt) => (
                  <option value={opt.buildingId}>{opt.buildingName}</option>
                ))} */}
              </Input>
            </Col>

            <Label sm={2}>Status</Label>
            <Col sm={2} style={{ marginLeft: "-2%" }}>
              <Input
                style={{ marginLeft: -20 }}
                size='sm'
                type='select'
                value={data.status}
                id='status'
                onChange={(e) => {
                  handle(e);
                  handleStatusChange(e);
                }}
              >
                <option selected disabled>
                  {" "}
                  Please select status
                </option>
                <option value='ALL'>ALL</option>
                <option value='REJECTED'>REJECTED</option>
                <option value='APPROVED'>APPROVED</option>
              </Input>
            </Col>

            <div class='col ml-auto'>
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
          <FormGroup row>
            <Label sm={2}>Budget Year</Label>
            <Col sm={2} style={{ marginLeft: "-1%" }}>
              <Input
                type='select'
                size='sm'
                id='budgetYear'
                name='budgetYear'
                value={data.budgetYear}
                onChange={(e) => handle(e)}>
                <option selected disabled>
                  Select Budget year
                </option>
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </Input>
            </Col>


            <div class='buttonEdit  col'  >
              <button
                style={{ backgroundColor: "#254a9e", borderColor: "#254a9e", marginLeft: 180 }}
                type='button'
                class='btn btn-primary btn-sm'
                onClick={handlePaymentReversal}
                disabled={status !== "APPROVED" || isEditClicked}
              >


                {/* <i class='fa fa-download' aria-hidden='true'></i> PDF */}
                Payment reversal
              </button>{" "}
              <button
                style={{ backgroundColor: "#254a9e", borderColor: "#254a9e" }}
                type='button'
                class='btn btn-primary btn-sm'
                onClick={handleEditClick}
                disabled={isEditClicked}
              >
                Edit
              </button>{" "}
              <button
                style={{ backgroundColor: "#254a9e", borderColor: "#254a9e" }}
                type='button'
                class='btn btn-primary btn-sm'
                onClick={handleReserveClick}
                disabled={!isEditClicked}
              >
                Reserve
              </button>{" "}

            </div>

          </FormGroup>


        </Form>
        <CompletedRequestTable dataArray={compData} />
      </div>
    </div>
  );
}
export default CompletedRequest;

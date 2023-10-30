import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Col, CustomInput } from "reactstrap";
import { PaymentRequestTable } from "./PaymentRequestTable";
import axios, { post } from "axios";
import { Button } from "reactstrap";
import { properties } from "./properties";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CompassCalibrationOutlined } from "@material-ui/icons";
import ReactSession from "react-client-session/dist/ReactSession";

function PaymentRequestFields() {
  // const username = useSelector((state) => state.userStore.username);
  // const username = "checker1";
  const [clearFile, setClearFile] = useState();
  const username = ReactSession.get("username");
  console.log("payment request fields started");
  let history = useHistory();
  const [files, setFile] = useState();
  const [dropDownData, setDropDownData] = useState({
    mgmtCompId: "",
    buildingId: "",
  });
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [building, setBuilding] = useState([]);
  const [company, setCompany] = useState([]);

  const fetchBuilding = async () => {
    const building = await axios.get(properties.buildingNames);
    setBuilding(building.data);
    // setBuilding([]);
  };
  const fetchCompany = async () => {
    const company = await axios.get(properties.managementCompanyList);
    setCompany(company.data);
    console.log(company.data);
  };

  useEffect(() => {
    fetchBuilding();
    fetchCompany();
  }, []);

  let handleInput = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setDropDownData({ ...dropDownData, [name]: value });
    console.log(dropDownData);
  };
  let search = (e) => {
    e.preventDefault();
    console.log(dropDownData);
    if (!dropDownData.mgmtCompId) {
      alert("Please select management company");
      return false;
    }
    //call api to get search result
    console.log(dropDownData);
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.searchPaymentData, dropDownData, { headers: head })
      .then(
        (response) => {
          console.log(response.data);
          if (response.data) setTableData(response.data);
          else {
            setTableData([]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    <div className='App'>
      <PaymentRequestTable data={tableData} />
    </div>;
  };

  //get building name based on management comp
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

  //load table data

  const getListDocumnetsFromServer = () => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios.get(properties.getPaymentData, { headers: head }).then(
      (response) => {
        console.log("loading....");
        setTableData(response.data);
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getListDocumnetsFromServer();
  }, []);

  function fileUpload(e) {
    e.preventDefault();
    // if (!dropDownData.mgmtCompId) {
    //   alert("Please select management company");
    //   return false;
    // }

    if (fileValidation()) {
      const url = properties.excelUpload;
      const formData = new FormData();
      console.log(files);
      formData.append("file", files);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          token: ReactSession.get("token"),
          username: ReactSession.get("username"),
        },
      };
      console.log(formData);
      axios
        .post(
          url + `/${username}/${dropDownData.mgmtCompId}/`,
          formData,
          config
        )
        .then((response) => response.data)
        .then(
          (data) => {
            console.log(data);
            setData(data);
            console.info("report response << : " + JSON.stringify(data));
            alert(data);
            setClearFile("");
            // window.location.reload();
            history.push("/tabs/");
          },
          (error) => {
            alert("Error: Upload failed please try after sometime!");
            history.push("/tabs/");
            // window.location.reload();
          }
        );
    }
  }

  function fileValidation(e) {
    let extensions = /(\.xls|\.xlsx)$/i;
    var fileInput = document.getElementById("file");
    var filePath = fileInput.value;
    if (!filePath || !dropDownData.mgmtCompId) {
      alert("Please select Management company and Payment request file");
      return false;
    }
    if (!extensions.exec(filePath)) {
      console.log("Invalid file extension");
      alert(`Invalid file, system will accept only [.xls, .xlsx,] `);
      fileInput.innerHTML = "";
      return false;
    }
    console.log("Valid file extension found");
    return true;
  }

  const getFile = (e) => {
    const fileRef = e.target.files[0];
    setFile(fileRef);
    fileValidation();
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <Form className='my-3 ml-5' inline>
        <FormGroup row>
          <Label className='required'>Management Company Name</Label>
          <Col>
            <Input
              type='select'
              id='mgmtCompId'
              name='mgmtCompId'
              // value={company.mgmtCompId}
              onChange={(e) => handleInput(e)}
              onChange1={(e) => {
                getBuildingNames(e);
              }}
              style={{ width: "15rem" }}>
              <option selected disabled>
                Please select a company
              </option>
              {company.map((opt) => (
                <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
              ))}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row className='ml-lg-5'>
          <Label>Upload Payment Requests</Label>
          <Col>
            <div class='custom-file'>
              <CustomInput
                type='file'
                accept='.xls, .xlsx'
                onChange={getFile}
                style={{ width: "20rem", textAlign: "left" }}
                id='file'
                name='file'
                key={clearFile}
              />
            </div>
          </Col>

          <Col>
            <Button
              onClick={fileUpload}
              style={{ background: "#254a9e", color: "white" }}>
              Upload{" "}
            </Button>
            <Button
              style={{
                marginLeft: "5vh",
                position: "absolute",
                background: "#254a9e",
                color: "white",
              }}
              onClick={() => window.location.reload()}>
              Refresh
            </Button>
          </Col>
        </FormGroup>

        <FormGroup row className='mt-4'>
          <Label>Building Name</Label>
          <Col style={{ marginLeft: "6.5rem" }}>
            <Input
              type='select'
              id='buildingId'
              name='buildingId'
              // value={dropDownData.mgmtCompId}
              onChange={(e) => handleInput(e)}
              style={{ width: "15rem" }}>
              <option selected disabled>
                Please select a building
              </option>
              {building.map((opt2) => (
                <option value={opt2.buildingId}>{opt2.buildingName}</option>
              ))}
            </Input>
          </Col>
          <Col>
            <Button
              onClick={search}
              style={{ background: "#254a9e", color: "white" }}>
              Search{" "}
            </Button>
          </Col>
        </FormGroup>
      </Form>

      <div className='App'>
        <PaymentRequestTable data={tableData} />
      </div>
    </div>
  );
}
export default PaymentRequestFields;

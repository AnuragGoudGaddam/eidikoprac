import React, { useState, useEffect } from "react";
import BulkPayments from "./BulkPayments";
import { properties } from "./properties";
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
import ReactSession from "react-client-session/dist/ReactSession";

function BulkPaymentField() {
  const [bulkData, setBulkData] = useState([]);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [building, setBuilding] = useState([]);

  const bulkDataImput = {
    mgmtCompId: data.mgmtCompId,
    buildingId: data.buildingId,
  };

  const loadBulkData = (bulkDataImput) => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.bulkDataList, bulkDataImput, { headers: head })
      .then((response) => response.data)
      .then(
        (data) => {
          console.log(data);
          if (data.length) {
            setBulkData(data);
            console.info("Bulk Response << : " + JSON.stringify(data));
          } else {
            alert("No Record Found");
            setBulkData([]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const fetchManagementComany = async () => {
    const company = await axios.get(properties.managementCompanyList);
    console.log("company" + company.data);
    setData1(company.data);
  };
  useEffect(() => {
    fetchManagementComany();
  }, []);

  const fetchBuilding = async () => {
    const building = await axios.get(properties.buildingNames);
    console.log("building", building.data);
    setData3(building.data);
  };

  // useEffect(() => {
  //   fetchBuilding();
  // }, []);

  const handleSubmit = (event) => {
    console.log(data);
    if (!data.mgmtCompId || !data.buildingId) {
      event.preventDefault();
      alert("Please select Mandatory fields");
      return false;
    }

    console.log("MgmtId:::" + data.mgmtCompId);
    console.log("buildingId:::" + data.buildingId);

    loadBulkData(bulkDataImput);
    event.preventDefault();
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
  };

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
                name='mgmtCompId'
                value={data.mgmtCompId}
                onChange={(e) => getBuildingNames(e)}>
                <option selected disabled>
                  Please select a company
                </option>
                {data1.map((opt) => (
                  <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
                ))}
              </Input>
            </Col>

            <Label sm={2} className='required'>
              Building Name
            </Label>
            <Col sm={2}>
              <Input
                style={{ marginLeft: -65 }}
                size='sm'
                type='select'
                id='buildingId'
                // value={data.buildingId}
                onChange={(e) => handle(e)}>
                <option selected disabled>
                  Please select a building
                </option>
                {building.map((opt) => (
                  <option value={opt.buildingId}>{opt.buildingName}</option>
                ))}
              </Input>
            </Col>

            <Col>
              <button
                size='sm'
                style={{
                  backgroundColor: "#254a9e",
                  borderColor: "#254a9e",
                  fontSize: "15px",
                  marginLeft: "-4.3rem",
                }}
                type='submit'
                class='btn btn-primary'>
                Search
              </button>
            </Col>
          </FormGroup>
        </Form>
        <BulkPayments dataArray={bulkData} />
      </div>
    </div>
  );
}

export default BulkPaymentField;

import React, { useState } from 'react'
import { Alert, Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { properties } from "./properties";
import axios from "axios";
import Popup from "./Popup";

export default function PopUpForm() {

    const [building, setBuilding] = useState([]);
    const [company, setCompany] = useState([]);
    const [responseData, setResponseData] = useState([]);
    const [dropDownData, setDropDownData] = useState({
        mgmtCompId: "",
        buildingId: "",
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
        if (!dropDownData.mgmtCompId) {
            alert("Please select management company");
            return false;
        };
        const requestData = {
            // method: 'POST',
            // headers: { 'Content-Type': 'application/json; charset=utf-8' },
            // title: 'mgmtCompId':202  'buildingId':104 ;
            // reserve_Fund_Id:12,
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
        // if(responseData != null && **** = 'success'){
        //     alert("Data updated successfully");
        // }
        //close popup
        //get API data
        getFundDetails();
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
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (

        <div>
        <button style={{ background: "#254a9e", color: "yellow", float: "right" }} onClick={togglePopup}>ADD</button>
            {isOpen &&
                <Popup
                    handleClose={togglePopup}
                    content={
            <div>
            <Form className='my-1 ml-1' >
                <FormGroup row>
                    <Label className="formLable" for="accountNumber" >Account Number</Label>
                    <Col>
                        <Input className='formInput' type="text" id='accountNumber' name='accountNumber' onChange={(e) => handleInput(e)} />
                        {company.map((opt) => (
                            <option value={opt.reserveFundId}></option>
                        ))}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="formLable" for="cifNumber">CIF Number</Label>
                    <Col>
                        <Input className='formInput' type="text" id='cifNumber' name='cifNumber' onChange={(e) => handleInput(e)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="formLable" >Management Company Name</Label>
                    <Col>
                        <Input className='formInput' type='select'
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
                </FormGroup>

                <FormGroup row className='my-3 ml--3' inline>
                    <Label className="formLable">Building Name</Label>
                    <Col >
                        <Input className='formInput'
                            type='select'
                            id='buildingId'
                            name='buildingId'
                            // value={dropDownData.mgmtCompId}
                            onChange={(e) => handleInput(e)}
                            style={{ width: "13rem" }}>

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
                <FormGroup row>
                    <Label className="formLable" for="reserveAccountNumber">Reserve Account Number</Label>
                    <Col>
                        <Input className='formInput' type="text" id='reserveAccountNumber' name='reserveAccountNumber' onChange={(e) => handleInput(e)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="formLable" for="branchCode">Branch Code</Label>
                    <Col>
                        <Input className='formInput' type="text" id='branchCode' name='branchCode' onChange={(e) => handleInput(e)} />
                    </Col>
                    <Col>
                        <Button onClick={save} style={{ background: "#254a9e", color: "yellow" }}>
                            SAVE{" "}
                        </Button>
                        <Button style={{ background: "#254a9e", color: "yellow" }}>
                            CANCEL{" "}
                        </Button>

                    </Col>
                </FormGroup>
            </Form>
            </div>
                    }
        
            />}



        </div>
        


    )
   
}

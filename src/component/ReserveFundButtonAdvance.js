
// import React, { useState } from "react";
import Popup from "./Popup";
import { Alert, Button, Col, Dropdown, Form, FormGroup, Input, Label } from "reactstrap";
import { properties } from "./properties";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const ReserveFundButtonAdvance = (props) => {
    const [building, setBuilding] = useState([]);
    const [company, setCompany] = useState([]);
    const [responseData, setResponseData] = useState([]);
    const [dropDownData, setDropDownData] = useState({
        mgmtCompId: "",
        buildingId: "",
    });
    const fetchBuilding = async (e) => {
    //     e.preventDefault();
    //     var name = e.target.name;
    // var value = e.target.value;
        //const building = await axios.get(properties.buildingNames);
        const building = await axios.get(`${properties.getBuildingsByMgmtComp}/${e.target.value}`);
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
        // if(value != null ){
        // }
        console.log("name and value",name,value);
        setDropDownData({ ...dropDownData, [name]: value });
        console.log(dropDownData);
    };
    let save = async (e) => {
        e.preventDefault();
        console.log(dropDownData);
        
        if(!dropDownData.buildingId && !dropDownData.mgmtCompId && !dropDownData.accountNumber && !dropDownData.branchCode
            && !dropDownData.cifNumber && !dropDownData.reserveAccountNumber)
            {
                alert("Please fill all the mandatory fields");
                return false;
            }
        if(!dropDownData.accountNumber)
        {
            alert("Please enter account number");
            return false;
        }
         if(!dropDownData.cifNumber)
        {
            alert("Please enter cif  number");
            return false;
        }
        
         if(!dropDownData.mgmtCompId)
        {
            alert("Please select managemnet company");
            return false;
        }
        if(!dropDownData.buildingId)
        {
            alert("Please select building name");
            return false;
        }
         if(!dropDownData.reserveAccountNumber)
        {
            alert("Please enter reserve account number");
            return false;
        }
         if(!dropDownData.branchCode)
        {
            alert("Please enter branch code");
            return false;
        }
        if(dropDownData.cifNumber.length!=9)
        {
            alert(" CIF number must be 9 digit");
            return false;
        }
        if((!/^[0-9]+$/.test(dropDownData.cifNumber))){
            alert("CIF number does not accept any characters, Kindly enter only numbers ")
            return false;
        }
        if((!/^0\d{8}$/.test(dropDownData.cifNumber)))
        {
            alert("CIF number must be starts with 0");
            return false;
        }
        if(dropDownData.accountNumber.length!=12  )
        {
            alert(" Account number must be 12 digit");
            return false;
        }
        if((!/^[0-9]+$/.test(dropDownData.accountNumber))){
            alert("Account number does not accept any characters, Kindly enter only numbers ")
            return false;
        }
        if((!/^0\d{11}$/.test(dropDownData.accountNumber)))
        {
            alert("Account number must be starts with 0");
            return false;
        }
        if(dropDownData.reserveAccountNumber.length!=12)
        {
            alert(" Reserve account number must be 12 digit");
            return false;
        }
        if((!/^[0-9]+$/.test(dropDownData.reserveAccountNumber))){
            alert("Reserve account number does not accept any characters, Kindly enter only numbers ")
            return false;
        }
        if((!/^0\d{11}$/.test(dropDownData.reserveAccountNumber)))
        {
            alert("Reserve account number must be starts with 0");
            return false;
        }
        if((!/^[0-9]+$/.test(dropDownData.branchCode))){
            alert("Branch Code does not accept any characters, Kindly enter only numbers ")
            return false;
        }
        if((!/^0\d{2}$/.test(dropDownData.branchCode)))
        {
            alert("Branch code must be starts with 0");
            return false;
        }
         if(dropDownData.buildingId != null && dropDownData.mgmtCompId != null && dropDownData.accountNumber!=null && dropDownData.branchCode != null
            && dropDownData.cifNumber !=null && dropDownData.reserveAccountNumber !=null)
        {   
            alert("Your data had saved successfully");
            setIsOpen(false);
        }
       else{
        alert("Data has not save");
       }
        const requestData = {
            // method: 'POST',
            // headers: { 'Content-Type': 'application/json; charset=utf-8' },
            // title: 'mgmtCompId':202  'buildingId':104 ;
            // reserve_Fund_Id:12, 
            
            cif_Number: dropDownData.cifNumber,
            mgmnt_Comp_Id: dropDownData.mgmtCompId,
            building_Id: dropDownData.buildingId,
            account_Number: dropDownData.accountNumber,
            reserve_Account_Number: dropDownData.reserveAccountNumber,
            is_Active: 'Y',
            branch_Code: dropDownData.branchCode
        };
        //if(dropDownData.accountNumber.length==12 && dropDownData.reserveAccountNumber.length==12){

        await axios.post(
            // `${properties.dataURl}/dataSave`,
            properties.saveReserveFundData,
            requestData).then(response => setResponseData(response.data));
        console.log(">>>>>>>>>>.", responseData);
        // }
        // else{
        //     alert("Account Number and Reserve Account number must be 12 Digit");
        //     return false;
        // }
        //get API data
        getFundDetails();
        setIsOpen(false);
    }   
    let cancel = () => {
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
        if (building.data) 
        setBuilding(building.data);
        else setBuilding([]);
    };

    useEffect(() => {
        //getListDocumnetsFromServer();
        fetchBuilding();
        fetchCompany();
      }, []);

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Button style={{ background: "#254a9e", color: "white", float: "right" }} onClick={togglePopup}>ADD</Button>
            {isOpen &&
                <Popup
                    handleClose={togglePopup}
                    content={
                        <Form className='my-1 ml-1'  >
                            <FormGroup row className='my-2 ml--3' inline>
                                <Label className='required' for="accountNumber" style={{marginLeft:"15px"} } >Account Number</Label>
                                <Col>                               
                                    <Input className='formInputs' type='text' id='accountNumber' name='accountNumber'  onChange={(e) => handleInput(e)}
                                   style={{marginLeft:"20%"}} required > 
                                    {company.map((opt) => (
                                        <option value={opt.reserveFundId}></option>
                                    ))}
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row className='my-2 ml--3' inline>
                                <Label className='required' for="cifNumber" style={{marginLeft:"15px"}}>CIF Number</Label>
                                <Col>
                                    <Input className='formInputs' type='text' id='cifNumber' name='cifNumber' style={{marginLeft:"25%"}} onChange={(e) => handleInput(e)}  />
                                </Col>
                            </FormGroup>
                            <FormGroup row className='my-2 ml--3' inline>
                                <Label className='required' style={{marginLeft:"17px"}}>Management Company Name</Label>
                                <Col>
                                    <Input className='formInput' type='select'
                                        id='mgmtCompId'
                                        name='mgmtCompId'
                                        // value={company.mgmtCompId}
                                       // onChange={(e) => handleInput(e)}
                                      
                                        onChange={(e) => {
                                            getBuildingNames(e);
                                        }}
                                        style={{ width: "20rem",marginLeft:"1%" }} >

                                        <option selected disabled >
                                            Please select a company
                                        </option>
                                        {/* <option value='201'>RDK OWNERS ASSOCIATION MANAGEMENT LLC</option>
                                        <option value='202'>KAIZEN OWNER ASSOCIATION MANAGEMENT</option>
                                        <option value='203'>Better Communities Owner Association</option>
                                        <option value='204'>STRATUM OWNERS ASSOCIATION MANAGEMENT SERVICES LLC</option>
                                         <option value='205'>SG Community Management Services LLC</option> */}
                                        {company.map((opt) => (
                                            <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
                                        ))}
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row className='my-2 ml--3' inline>
                                <Label className='required' style={{marginLeft:"15px"}}>Building Name</Label>
                                <Col >
                                    <Input className='formInput'
                                        type='select'
                                        id='buildingId'
                                        name='buildingId'
                                        // value={dropDownData.mgmtCompId}
                                        onChange={(e) => handleInput(e)}
                                        style={{ width: "20rem",marginLeft:"22.5%" }}>

                                        <option selected disabled>
                                            Please select a building
                                        </option>
                                        {/* <option value='101'>TWO TOWERS</option>
                                        <option value='102'>BINGHATTI GATEWAY</option>
                                        <option value='103'>MILLENNIUM BINGHATTI RESIDENCES BUSINESS BAY</option>
                                        <option value='104'>MILANO GIOVANNI BOUTIQUE SUITES</option>
                                        <option value='105'>GIOVANNI BOUTIQUE SUITES</option>
                                        <option value='106'>PALM VIEW</option>
                                        <option value='107'>W Residences - The Palm</option> */}
                                        {building.map((opt2) => (
                                            <option value={opt2.buildingId}>{opt2.buildingName}</option>
                                        ))}
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row className='my-2 ml--3' inline>
                                <Label className='required' for="reserveAccountNumber" style={{marginLeft:"15px"}}>Reserve Account Number</Label>
                                <Col>
                                    <Input className='formInputs' type='text' id='reserveAccountNumber' name='reserveAccountNumber' style={{marginLeft:"10%"}}onChange={(e) => handleInput(e)} />
                                </Col>
                            </FormGroup>
                            <FormGroup row className='my-2 ml--3' inline>
                                <Label className='required' for="branchCode" style={{marginLeft:"15px"}}>Branch Code</Label>
                                <Col>
                                    <Input className='formInputs' type='text' id='branchCode' name='branchCode' style={{marginLeft:"25%"}} onChange={(e) => handleInput(e)} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col>
                                    <Button
                                        type="submit" onClick={save} style={{ background: "#254a9e", color: "white", marginLeft: "420px" }} >
                                        SAVE{" "}
                                    </Button>
                                    
                                    <Button
                                        onClick={cancel} style={{ background: "#254a9e", color: "white", marginLeft: "10px" }}>
                                        CANCEL{" "}
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    }
                />}
        </>
    )
}
export default ReserveFundButtonAdvance;
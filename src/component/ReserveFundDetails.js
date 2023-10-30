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
import axios from "axios";
import { properties } from "./properties";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import MuiTableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";


// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import ReactSession from "react-client-session/dist/ReactSession";
import ReserveFundButtonAdvance from "./ReserveFundButtonAdvance";
import ReserveFundDetailsTableFooters from "./ReserveFundDetailsTableFooters";
import { TrainRounded } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 130,
    height: 40,
  },
  input: {
    width: 140,
    height: 40,
  },
  saveButton: {
    "&:hover": {
      color: "green",
    },
  },
  cancleButton: {
    "&:hover": {
      color: "red",
    },
  },
  editButton: {
    "&:hover": {
      color: "#1888DD",
    },
  },
}));

const CustomTableCell = ({
  row,
  name,
  disabled = false,
  enabled = false,
  checkbox = false,

  Checkbox = false,

  onChange = false,

  calculateTotalAmount = false,
}) => {
  const classes = useStyles();

  // const { isEditMode } = row;
  const { isEditMode } = false;

  return (
    <TableCell align='left' className={classes.tableCell}>
      {row[name]
      }    </TableCell>
  );
};


function ReserveFundDetails() {
  // const ReserveFundDetailsTable = () =>

  const [data, setData] = useState({
    mgmtCompId: "",
    buildingId: "",
    // budgetYear: "",
  });
  const [building, setBuilding] = useState([]);
  const [IsCustomTableCell, isActive] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [company, setCompany] = useState([]);
  let [tableData, setTableData] = useState([]);
  const [rows, setRows] = useState([]);
  const [years, setYears] = useState([]);
  const [showtable, setShowtable] = useState(false)

  const [previous, setPrevious] = React.useState({});


  const newRowData = [
    { actions: "", cifNumber: "19000055753", mcNameEn: 'ACE OWNERS ASSOCIATION MANAGEMENT', buildingName: 'VICTORIA RESIDENCY', accountNumber: "19000055753", reserveAccountNumber: "29000075366", branchCode: '07', }
  ];


  const fetchBuilding = async () => {
    const building = await axios.get(properties.buildingNames);
    setBuilding([]);

    // const building = await axios.post(`${properties.dataURl}/dataUpdate`);
    setBuilding(building.data);

  };
  // const [dropDownData, setDropDownData] = useState({
  //   mgmtCompId: "",
  //   buildingId: "",
  // });
  const fetchCompany = async () => {
    const company = await axios.get(properties.managementCompanyList);
    //const company = await axios.post(`${properties.dataURl}/dataUpdate`);
    setCompany(company.data);
    console.log(company.data);
  };

  useEffect(() => {
    fetchBuilding();
    fetchCompany();
    // getYears();
  }, []);

  //handle input
  let handleInput = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  // let search = async (e) => {
  //   e.preventDefault();
  //   if (!data.mgmtCompId) {
  //     alert("Please select management company");
  //     return false;
  //   }

  //   //get API data
  //   getFundDetails();
  // }

  let search = async (e) => {
    e.preventDefault();
    console.log(data);
    if (!data.mgmtCompId) {
      alert("Please select management company");
      return false;
    }
    //call api to get search result
    console.log(data);
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios
      .post(properties.fetchReserveFundData, data, { headers: head })
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
  };

  // let getFundDetails = async () => {
  //   const requestOptions = {
  //     // method: 'POST',
  //     // headers: { 'Content-Type': 'application/json; charset=utf-8' },
  //     // title: 'mgmtCompId':202  'buildingId':104 ;
  //     mgmtCompId: data.mgmtCompId,
  //     buildingId: data.buildingId
  //   };

  //   let head = {
  //     token: ReactSession.get("token"),
  //     username: ReactSession.get("username"),
  //   };
  //   tableData = await axios.post(
  //     // `${properties.dataURl}/data`,
  //     properties.fetchReserveFundData,
  //     requestOptions, {
  //     headers: head,
  //   });
  //   if (tableData.data) {
  //     setRows(tableData.data);
  //     console.log(tableData.data);
  //   }
  //   if (tableData.data.length <= 0) {
  //     alert("No Record found");
  //     return false;
  //   }
  // };

  //get building name based on management comp
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

  //table operations
  const classes = useStyles();
  const onToggleEditMode = (reserveFundId, mode, cifNumber, accountNumber, reserveAccountNumber) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.reserveFundId === reserveFundId) {
         
          if (mode == "save") {
            // delete row["isEditMode"];
            console.log("updating reserve fund details details...");

            let head = {
              token: ReactSession.get("token"),
              username: ReactSession.get("username"),

            };
            if (row.accountNumber.length == 11 && row.reserveAccountNumber.length == 11) {
              console.log(row);
              axios
                // .post(`${properties.dataURl}/dataUpdate`, row, { headers: head })
                .post(properties.reserveFundUpdateDetail, row, { headers: head })
                .then((res) => alert("Reserve Fund Details Data Updated Successfully"))
                .catch((err) =>
                  alert(
                    "Failed to update Reserve Fund Details Table, Please try after sometime"
                  )
                );
             }
            else {
              alert("Failed: For update, Account Number and Reserve Account Number must be 11 digit");
            }
            return { ...row, isEditMode: !row.isEditMode };
          }
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.reserveFundId]) {
      setPrevious((state) => ({ ...state, [row.reserveFundId]: row }));
    }

    const value = e.target.value;
    const name = e.target.name;
    const { reserveFundId } = row;
    const newRows = rows.map((row) => {
      if (row.reserveFundId === reserveFundId) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };
  const [checked, setChecked] = React.useState(false);

  const onRevert = (reserveFundId) => {
    const newRows = rows.map((row) => {
      if (row.reserveFundId === reserveFundId) {
        return previous[reserveFundId] ? previous[reserveFundId] : row;
      }
      return row;
    });
    console.log(newRows);
    setRows(newRows);
    setPrevious((state) => {
      delete state[reserveFundId];
      return state;
    });
    onToggleEditMode(reserveFundId, "");
  };

  return (
    <>
      <Form className='my-3 ml-5' inline>
        <FormGroup row>
          <Label for='managementCompany' className='required'>
            Management Company Name
          </Label>
          <Col>
            <Input
              type='select'
              id='mgmtCompId'
              name='mgmtCompId'
              //   value={}
              style={{ width: "15rem" }}
              // onChange={(e) => handleInput(e)}
              // onChange={handleInput}
              onChange={(e) => getBuildingNames(e)}
              
              >
              <option selected disabled>
                Select a Management company
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

        <FormGroup row className='my-3 ml-5' inline>
          <Label for='buildingName'>
            Building Name
          </Label>
          <Col>
            <Input
              type='select'
              id='buildingId'
              name='buildingId'
              //   value={}
              style={{ width: "15rem" }}
              onChange={handleInput}
              
              >
              <option selected disabled>
                Select a building name
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
        <Button
          style={{
            background: "#254a9e",
            color: "white",
            // position: "relative",
            // marginTop: "1rem",
            marginLeft: "0.6rem",
            marginRight: "1rem",
          }}
          // onClick={search}
          onClick={()=>{setShowtable(true)}}
          >
          Search
        </Button>
        <ReserveFundButtonAdvance />
      </Form>

      <p className='mb-lg-5' />

      {/* Table */}
      <Form>
        <Paper className={classes.root} style={{ marginTop: "-13px" }}>
          <Table className={classes.table}>
            <TableHead style={{ backgroundColor: "#254A9E", minWidth: "20%" }}>
              <TableRow>
                <TableCell
                  align='left'
                  style={{
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "500",

                  }}>
                  Action
                </TableCell>
                <TableCell
                  align='left'
                  style={{
                    fontSize: "14px",
                    color: "white",
                    // fontWeight: "500",
                    fontWeight: "bold",

                  }}>
                  CIF Number
                </TableCell>
                <TableCell
                  align='left'
                  style={{
                    fontSize: "14px",
                    color: "white",
                    // fontWeight: "500",
                    fontWeight: "bold",

                  }}>
                  Management Company Name
                </TableCell>
                <TableCell
                  align='left'
                  style={{
                    fontSize: "14px",
                    color: "white",
                    // fontWeight: "500",
                    fontWeight: "bold",
                  }}>
                  Building Name
                </TableCell>
                <TableCell
                  align='left'
                  style={{
                    fontSize: "14px",
                    color: "white",
                    // fontWeight: "500",
                    fontWeight: "bold",
                  }}>
                  Account Number
                </TableCell>
                <TableCell
                  align='left'
                  style={{
                    fontSize: "14px",
                    color: "white",
                    // fontWeight: "500",
                    fontWeight: "bold",
                  }}>
                  Reserved Account Number
                </TableCell>
                <TableCell
                  align='left'
                  style={{
                    fontSize: "14px",
                    color: "white",
                    // fontWeight: "500",
                    fontWeight: "bold",
                  }}>
                  Branch Code
                </TableCell>
                <TableCell
                  align='left'
                  style={{
                    fontSize: "14px",
                    color: "white",
                    // fontWeight: "500",
                    fontWeight: "bold",
                  }}>
                  Reserve Fund %
                </TableCell>
                <TableCell
                  align='left'
                  style={{
                    fontSize: "14px",
                    color: "white",
                    // fontWeight: "500",
                    fontWeight: "bold",
                  }}>
                  Last calculated on
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log("Row__", rows)}
              {showtable && newRowData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className={classes.selectTableCell}><Tooltip title='Edit'>
                    <IconButton
                      aria-label='delete'
                      className={classes.editButton}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip></TableCell>
                  <TableCell >{row.cifNumber}</TableCell>
                  <TableCell >{row.mcNameEn}</TableCell>
                  <TableCell >{row.buildingName}</TableCell>
                  <TableCell >{row.accountNumber}</TableCell>
                  <TableCell >{row.reserveAccountNumber}</TableCell>
                  <TableCell >{row.branchCode}</TableCell>
                

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Form>
      <ReserveFundDetailsTableFooters />
    </>

  );
}

export default ReserveFundDetails;

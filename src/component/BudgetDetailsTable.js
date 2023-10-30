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
  disabled,
  onChange,
  calculateTotalAmount,
}) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align='left' className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          disabled={disabled}
          onChange={(e) => onChange(e, row)}
          onBlur={(e) => calculateTotalAmount(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

function BudgetDetailsTable() {
  const [data, setData] = useState({
    mgmtCompId: "",
    buildingId: "",
    budgetYear: "",
  });
  const [building, setBuilding] = useState([]);
  const [company, setCompany] = useState([]);
  let [tableData, setTableData] = useState([]);
  const [rows, setRows] = useState([]);
  const [years, setYears] = useState([]);

  const [previous, setPrevious] = React.useState({});

  const fetchBuilding = async () => {
    const building = await axios.get(properties.buildingNames);
    setBuilding(building.data);
    // setBuilding([]);
  };
  const fetchCompany = async () => {
    const company = await axios.get(properties.managementCompanyList);
    setCompany(company.data);
  };
  //get building name based on management comp
  let getBuildingNames = async (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setData({ ...data, [name]: value });
    // console.log(data);
    // console.log(`${properties.getBuildingsByMgmtComp}/${e.target.value}`);
    const building = await axios.get(
      `${properties.getBuildingsByMgmtComp}/${e.target.value}`
    );
    console.log("Mapped building names :" + building.data);
    if (building.data) setBuilding(building.data);
    else setBuilding([]);
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
    fetchBuilding();
    fetchCompany();
    getYears();
  }, []);

  //handle input
  let handleInput = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let getDetails = async (e) => {
    e.preventDefault();
    if (!data.mgmtCompId || !data.buildingId || !data.budgetYear) {
      alert("Please select mandatory fields");
      return false;
    }
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    tableData = await axios.post(properties.budgetDetails, data, {
      headers: head,
    });
    if (tableData.data) {
      setRows(tableData.data);
      console.log(tableData.data);
    }
    if (tableData.data.length <= 0) {
      alert("No Record found");
      return false;
    }
  };

  //table operations
  const classes = useStyles();
  const onToggleEditMode = (budgetItemId, mode) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.budgetItemId === budgetItemId) {
          if (mode == "save") {
            // delete row["isEditMode"];
            console.log("updating budget details...");
            let head = {
              token: ReactSession.get("token"),
              username: ReactSession.get("username"),
            };
            axios
              .put(properties.updateBudget, row, { headers: head })
              .then((res) => alert("Budget Details data updated Successfully"))
              .catch((err) =>
                alert(
                  "Failed to update Budget Details Please try after sometime"
                )
              );
          }
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.budgetItemId]) {
      setPrevious((state) => ({ ...state, [row.budgetItemId]: row }));
    }

    const value = e.target.value;
    const name = e.target.name;
    const { budgetItemId } = row;
    const newRows = rows.map((row) => {
      if (row.budgetItemId === budgetItemId) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const calculateTotalAmount = (e, row) => {
    console.log("calculating total Amount....");
    const { budgetItemId } = row;

    const newRows = rows.map((row) => {
      if (row.budgetItemId === budgetItemId) {
        row.balanceAmount = row.totalBudget - row.consumedAmount;
        return row;
      }
      return row;
    });

    setRows(newRows);
  };
  const onRevert = (budgetItemId) => {
    const newRows = rows.map((row) => {
      if (row.budgetItemId === budgetItemId) {
        return previous[budgetItemId] ? previous[budgetItemId] : row;
      }
      return row;
    });
    console.log(newRows);
    setRows(newRows);
    setPrevious((state) => {
      delete state[budgetItemId];
      return state;
    });
    onToggleEditMode(budgetItemId, "");
  };

  return (
    <>
      <Form className='my-3 mt-5 ml-2' inline>
        <FormGroup className='mb-2  mb-sm-0'>
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
              //onChange={handleInput}
              onChange={(e) => getBuildingNames(e)}>
              <option selected disabled>
                Select a Management company
              </option>
              {company.map((opt) => (
                <option value={opt.mgmtCompId}>{opt.mcNameEn}</option>
              ))}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup className='mb-2 mb-sm-0'>
          <Label for='buildingName' className='required'>
            Building Name
          </Label>
          <Col>
            <Input
              type='select'
              id='buildingId'
              name='buildingId'
              //   value={}
              style={{ width: "15rem" }}
              onChange={handleInput}>
              <option selected disabled>
                Select a building name
              </option>
              {building.map((opt2) => (
                <option value={opt2.buildingId}>{opt2.buildingName}</option>
              ))}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup className='mb-5 mb-sm-0'>
          <Label for='budgetYear' className='required'>
            Budget Year
          </Label>
          <Col>
            <Input
              type='select'
              id='budgetYear'
              name='budgetYear'
              onChange={handleInput}
              style={{ width: "11.5rem" }}>
              <option selected disabled>
                Select Budget year
              </option>
              {years.map((year) => (
                <option value={year}>{year}</option>
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
            marginLeft: "0.2rem",
          }}
          onClick={getDetails}>
          Get Details
        </Button>
      </Form>
      <p className='mb-lg-5' />

      {/* Table */}
      <Paper className={classes.root} style={{ marginTop: "-13px" }}>
        <Table className={classes.table}>
          <TableHead
            style={{
              backgroundColor: "#254A9E",
            }}>
            <TableRow>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                Action
              </TableCell>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                Service Code
              </TableCell>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                Service Name
              </TableCell>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                Usage
              </TableCell>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                Period Code
              </TableCell>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                Amount
              </TableCell>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                VAT
              </TableCell>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                Total Amount
              </TableCell>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                Consumed Amount
              </TableCell>
              <TableCell
                align='left'
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "500",
                }}>
                Balance Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.budgetItemId}>
                <TableCell className={classes.selectTableCell}>
                  {row.isEditMode ? (
                    <>
                      <Tooltip title='Save'>
                        <IconButton
                          aria-label='done'
                          className={classes.saveButton}
                          onClick={() =>
                            onToggleEditMode(row.budgetItemId, "save")
                          }>
                          <DoneIcon />
                        </IconButton>
                      </Tooltip>
                      {/* <Tooltip title='Cancel'>
                        <IconButton
                          aria-label='revert'
                          className={classes.cancleButton}
                          onClick={() => onRevert(row.budgetItemId)}>
                          <RevertIcon />
                        </IconButton>
                      </Tooltip> */}
                    </>
                    ) : (
                    <Tooltip title='Edit'>
                      <IconButton
                        aria-label='delete'
                        className={classes.editButton}
                        onClick={() =>
                          onToggleEditMode(row.budgetItemId, "edit")
                        }>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </TableCell>
                <CustomTableCell
                  {...{
                    row,
                    name: "serviceCode",
                    disabled: "disabled",
                    onChange,
                  }}
                />
                <CustomTableCell
                  {...{
                    row,
                    name: "serviceNameEn",
                    disabled: "disabled",
                    onChange,
                  }}
                />
                <CustomTableCell
                  {...{
                    row,
                    name: "usageEn",
                    disabled: "disabled",
                    onChange,
                  }}
                />
                <CustomTableCell
                  {...{
                    row,
                    name: "budgetPeriodCode",
                    disabled: "disabled",
                    onChange,
                  }}
                />
                <CustomTableCell
                  {...{
                    row,
                    name: "totalCost",
                    disabled: "disabled",
                    onChange,
                  }}
                />
                <CustomTableCell
                  {...{
                    row,
                    name: "vatAmount",
                    disabled: "disabled",
                    onChange,
                  }}
                />
                <CustomTableCell
                  {...{
                    row,
                    name: "totalBudget",
                    disabled: "disabled",
                    onChange,
                  }}
                />
                <CustomTableCell
                  {...{
                    row,
                    name: "consumedAmount",
                    disabled: "",
                    onChange,
                    calculateTotalAmount,
                  }}
                />
                <CustomTableCell
                  {...{
                    row,
                    name: "balanceAmount",
                    disabled: "",
                    onChange,
                    calculateTotalAmount,
                  }}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default BudgetDetailsTable;

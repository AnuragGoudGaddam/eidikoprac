import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./mydiv.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import MuiTableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";

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
    width: 40,
  },
  tableCell: {
    width: 130,
    height: 20,
  },
  input: {
    width: 130,
    height: 20,
  },
}));

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align='left' className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

function BulkEdit(props) {
  const [rows, setRows] = useState(
    props.data
    // createData("A1.01", "Deficit", 50000, 50.0, 5050.0, 2356.0, 1284.0),
    // createData("A1.02", "Deficit", 50000, 50.0, 5050.0, 2356.0, 1284.0),
  );

  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }

        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });

    setRows(newRows);
  };

  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  return (
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
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label='done'
                      onClick={() => onToggleEditMode(row.id)}>
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label='revert'
                      onClick={() => onRevert(row.id)}>
                      <RevertIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label='delete'
                    onClick={() => onToggleEditMode(row.id)}>
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "serviceCode", onChange }} />
              <CustomTableCell {...{ row, name: "serviceName", onChange }} />
              <CustomTableCell {...{ row, name: "amount", onChange }} />
              <CustomTableCell {...{ row, name: "vat", onChange }} />
              <CustomTableCell {...{ row, name: "totalAmount", onChange }} />
              <CustomTableCell {...{ row, name: "consumedAmount", onChange }} />
              <CustomTableCell {...{ row, name: "consumedAmount", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default BulkEdit;

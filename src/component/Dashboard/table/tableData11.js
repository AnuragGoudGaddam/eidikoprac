import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiTableCell from "@material-ui/core/TableCell";
import axios from "axios";

const Audit_Table1 = () => {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    const Api = "http://10.0.0.70:5050/budget/fetchAllBudgetIteamDetails";
    try {
      const response = await axios.get(Api, { timeout: 5000 });
      setdata(response.data);
      console.log(response.data, "response");
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const TableCell = withStyles({
    root: {
      border: "1px solid rgb(213 218 222)",
      align: "center",
      padding: "8px 10px",
    },
  })(MuiTableCell);

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          overflowX: "auto",
          marginBottom: "0%",
          display: "flex",
        }}
      >
        <TableContainer sx={{ height: "auto", width: "100%", display: "flex" }} style={{margintop:"20px"}}>
          <Table>
            <TableHead>
              <TableRow>
                {data.length > 0 &&
                  Object.keys(data[0]).map((column, i) => (
                    <TableCell
                      key={i}
                      style={{
                        color: "rgb(26, 65, 152)",
                        fontWeight: "bold",
                        fontSize: "12px",
                        background: "#F5F6F9",
                      }}
                    >
                      {column.toUpperCase()}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.length > 0 &&
                data.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {Object.values(row).map((column, colIndex) => (
                      <TableCell key={colIndex}>{column}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Audit_Table1;

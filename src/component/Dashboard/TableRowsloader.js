import React from "react";
import {
    TableRow,
    TableCell,
    Skeleton,
    Paper,
    TableContainer,
    Table,
    TableBody
} from "@mui/material";

const TableRowsLoader = ({ rows, cells }) => {
    const renderRows = () => {
        return (
            rows?.map((row, index) => {
                return (
                    <TableRow key={index} row={row}>
                        {cells?.map((cell, i) => {
                            return (
                                <TableCell component="th" scope="row" key={i} cell={cell}>
                                    <Skeleton animation="wave" variant="text" />
                                </TableCell>
                            ) 
                        }
                        )}
                    </TableRow>
                )
            })
        )
    }
    return (
        <Paper
            elevation={0}
            sx={{
                marginTop: "2px",
                marginBottom: "0px",
                display: "flex"
            }}
        >
            <TableContainer>
                <Table>
                    <TableBody>
                        {renderRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export { TableRowsLoader };
import React, { useState } from 'react';
import '../../App.css';
import { Button } from '@material-ui/core';

const ExpandableTableRow = ({ row, onEdit, onAddRow,onDelete }) => {
    const handleEdit = (event, column) => {
        onEdit(row.id, event.target.value, column);
    };

    return (
        <tr>
            <td>
                <input
                    type="text"
                    value={row.column1}
                    onChange={(e) => handleEdit(e, 'column1')}

                    className='inputs'
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.column2}
                    onChange={(e) => handleEdit(e, 'column2')}

                    className='inputs'
                />
            </td>
            <td>
                <button className='button_' onClick={() => onDelete(row.id)} >-</button>
            </td>
        </tr>
    );
};

function ExpandTable() {
    const [tableData, setTableData] = useState([
        { id: 1, column1: '', column2: '' },
    ]);

    const handleEdit = (id, value, column) => {
        setTableData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, [column]: value } : row))
        );
    };
    const handleDelete = (id) => {
        setTableData((prevData) => prevData.filter((row) => row.id !== id));
    };
    console.log(tableData);

    const handleAddRow = (id) => {
        const newRow = {
            id: new Date().getTime(),
            column1: '',
            column2: '',
        };
        setTableData((prevData) => [...prevData, newRow]);
        // setTableData((prevData) => {
        //     const index = prevData.findIndex((row) => row.id === id);
        //     const updatedData = [...prevData];
        //     updatedData.splice(index + 1, 0, newRow);
        //     return updatedData;
        // });
    };

    return (
        <div className="App_jss">
            <div>
                <table className="expandable-table">
                    <thead>
                        <tr>
                            <th className="small-cell">service Code</th>
                            <th className="small-cell">Amount</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((rowData) => (
                            <ExpandableTableRow
                                key={rowData.id}
                                row={rowData}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div>

                <Button
                    style={{
                        background: "#254a9e",
                        color: "white",
                        position: "relative",
                        marginLeft: "10px",

                    }} onClick={handleAddRow} >
                    AddRow
                </Button>
            </div>

        </div>
    );
}

export default ExpandTable;

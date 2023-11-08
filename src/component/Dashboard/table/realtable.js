// import React from 'react'
// import { GenericTable } from '../GenericTable'
// import { label } from '../label'
// import { GridContainer } from '../mushqtable'
// import { Cases_column } from './Cases_column'
// import DashboardTabs from './Dashboardtabs'
// function Realtable({jwtToken}) {

//     const openCasesData = [{ "httpCode": 200, "httpMessage": "Valid Token", "caseRefNo": "EEC-014337704-1000026011", "instanceId": "20116", "alertedEntityNumber": "BS_014337704", "createdDateTime": "21-May-2023 03:14:51", "caseStatus": null, "cifId": "014337704", "dataId": "4388", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "TOFIK NURA KEDIR", "ageing": "49", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "19-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "594586", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4388", "value": "594586" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014337704-1000026023", "instanceId": "20120", "alertedEntityNumber": "BS_014337704", "createdDateTime": "21-May-2023 03:16:03", "caseStatus": null, "cifId": "014337704", "dataId": "4388", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "TOFIK NURA KEDIR", "ageing": "49", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "19-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "594596", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4388", "value": "594596" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014323975-1000025798", "instanceId": "19884", "alertedEntityNumber": "BS_014323975", "createdDateTime": "19-May-2023 10:39:35", "caseStatus": null, "cifId": "014323975", "dataId": "4311", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RUKN ALHASIB AL THAHBI TR L L C SOL", "ageing": "51", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "17-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "586039", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4311", "value": "586039" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014323975-1000025810", "instanceId": "19904", "alertedEntityNumber": "BS_014323975", "createdDateTime": "19-May-2023 10:39:47", "caseStatus": null, "cifId": "014323975", "dataId": "4311", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RUKN ALHASIB AL THAHBI TR L L C SOL", "ageing": "51", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "17-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "585990", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4311", "value": "585990" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014317465-1000026268", "instanceId": "20350", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 14:50:18", "caseStatus": null, "cifId": "014317465", "dataId": "4861", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "614509", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4861", "value": "614509" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014317465-1000026264", "instanceId": "20381", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 08:18:12", "caseStatus": null, "cifId": "014317465", "dataId": "4861", "taskAssignedToUser": null, "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "613654", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4861", "value": "613654" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014317465-1000026269", "instanceId": "20396", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 22:44:20", "caseStatus": null, "cifId": "014317465", "dataId": "4861", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "MLRO", "taskSubject": "Step: Review the case MLRO", "taskId": "624882", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4861", "value": "624882" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014309126-1000025664", "instanceId": "19695", "alertedEntityNumber": "BS_014309126", "createdDateTime": "17-May-2023 09:30:16", "caseStatus": null, "cifId": "014309126", "dataId": "3197", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "PHILEMON HOWARD", "ageing": "53", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "15-May-2023", "currentStep": null, "taskSubject": "InvestigatorL1", "taskId": "576730", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "3197", "value": "576730" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014309126-1000025684", "instanceId": "19730", "alertedEntityNumber": "BS_014309126", "createdDateTime": "17-May-2023 09:30:32", "caseStatus": null, "cifId": "014309126", "dataId": "3197", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "PHILEMON HOWARD", "ageing": "53", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "15-May-2023", "currentStep": null, "taskSubject": "InvestigatorL1", "taskId": "576756", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "3197", "value": "576756" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014299408-1000026265", "instanceId": "20382", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 08:28:15", "caseStatus": null, "cifId": "014299408", "dataId": "4862", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "L2", "taskSubject": "Step: Investigator L2", "taskId": "1801884", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4862", "value": "1801884" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }]


//     const renderDashbordTable = () => {
//         return (
//           <GridContainer title={label.cases} viewAll={`/cases/viewall/${jwtToken}`} >
//             {/* {_renderLoading()}
//             {
//               (data.casesData !== null && data.casesData.length > 0) */}
//             <GenericTable col={Cases_column(jwtToken)} apiData={openCasesData} isPagination={false} isExportExcel={false} isGlobalSearch={false} />
//             {/* : <MissingService message={!loading && 'No Cases are assigned to you.Please contact super user'} /> */}
//           </GridContainer>
//         )
//       }

//   return (
//     <div>
//          <DashboardTabs tabsData={renderDashbordTable()} />
//     </div>
//   )
// }

// export default Realtable

// import React from 'react';
// import { useTable } from 'react-table';
// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   TableContainer,
// } from '@material-ui/core';
// import { GenericTable } from '../GenericTable';

// const Realtable = ({ openCasesData }) => {
//   const data = Object.values(openCasesData);

//   const columns = React.useMemo(() => [
//     {
//       Header: 'Case Ref No',
//       accessor: 'caseRefNo',
//     },
//     {
//       Header: 'Created Date Time',
//       accessor: 'createdDateTime',
//     },
//     {
//       Header: 'Task Assigned To User',
//       accessor: 'taskAssignedToUser',
//     },
//     {
//       Header: 'Current Step',
//       accessor: 'currentStep',
//     },
//   ], []);



//   const {
//     getTableProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({
//     columns,
//     data,
//   })

//   return (
//     <TableContainer sx={{ maxHeight: '440 ' }}>
//       <Table {...getTableProps()}>
//         <TableHead>
//           {headerGroups.map((headerGroup, index) => (
//             <TableRow {...headerGroup.getHeaderGroupProps()} key={index}>
//               {headerGroup.headers.map((column) => (
//                 <TableCell
//                   key={column.Header || column.id}
//                   {...column.getHeaderProps()}
//                   style={{
//                     color: "rgb(26, 65, 152)",
//                     fontWeight: "bold",
//                     fontSize: "12px",
//                     background: "#F5F6F9",
//                   }}
//                   align={alignLabel(column.Header)}
//                 >
//                   {column.render("Header").toUpperCase()}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableHead>
//         <TableBody>
//           {rows.map((row, i) => {
//             prepareRow(row);
//             return (
//               <TableRow {...row.getRowProps()}>
//                 {row.cells.map((cell, i) => {
//                   return (
//                     <TableCell
//                       key={cell.column.Header}
//                       {...cell.getCellProps()}
//                       style={
//                         { color: cell.column.Header === pointerColumn && cell.value ? "#F7971C" : "#000" }
//                       }
//                       className={cell.column.Header === pointerColumn && cell.value ? "pointer" : ""}
//                       align={alignLabel(cell.column.Header)}
//                       onClick={() => cell.column.Header === pointerColumn && cell.value ? onClick(cell) : ""}
//                     >
//                       {cell.render('Cell')}
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default Realtable;


import React from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { Margin } from '@mui/icons-material';
import { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

function createData(caseRefNo, note, idno, bsno, name, Apin, date, createdBy, modifiedBy, modifiedDate, modifiedTime, modifiedNote) {
  return {
    caseRefNo,
    note,
    idno,
    bsno,
    name,
    Apin,
    date,
    createdBy,
    modifiedBy,
    modifiedDate,
    modifiedTime,
    modifiedNote,
  };
}

const data = [
  createData(
    'EEC-014337704-1000026011',
    'N/A',
    '014337704',
    'BS_014337704',
    'TOFIK NURA KEDIR',
    '49',
    '19-May-2023',
    'SYSTEM',
    'NaveenCha',
    '21-May-2023',
    '03:14:51',
    'N/A'
  ),
  createData(
    'EEC-014337704-1000026023',
    'N/A',
    '014337704',
    'BS_014337704',
    'TOFIK NURA KEDIR',
    '49',
    '19-May-2023',
    'SYSTEM',
    'NaveenCha',
    '21-May-2023',
    '03:16:03',
    'N/A'
  ),
  createData(
    'EEC-014337704-1000026023',
    'N/A',
    '014337704',
    'BS_0143239754',
    'RUKN ALHASIB AL THAHBI TR L L C SOL',
    '51',
    '20-May-2023',
    'SYSTEM',
    'NaveenCha',
    '21-May-2023',
    '03:16:03',
    'N/A'
  ),
  createData(
    'EEC-014337704-1000026023',
    'N/A',
    '014309126',
    'BS_014309126',
    'RAHIMO HAIDERALI SACO',
    '117',
    '19-May-2023',
    'SYSTEM',
    'NaveenCha',
    '21-May-2023',
    '03:16:03',
    'N/A'
  ),
  createData(
    'EEC-014337704-1000026023',
    'N/A',
    '014309126',
    'BS_014309126',
    'PHILEMON HOWARD',
    '49',
    '19-May-2023',
    'SYSTEM',
    'NaveenCha',
    '21-May-2023',
    '03:16:03',
    'N/A'
  ),
  createData(
    'EEC-014337704-1000026023',
    'N/A',
    '014309126',
    'BS_010597457',
    'PHILEMON HOWARD',
    '49',
    '19-May-2023',
    'SYSTEM',
    'NaveenCha',
    '21-May-2023',
    '03:16:03',
    'N/A'
  ),
];


const tableColumns = [
  { header: 'Case Ref No', accessor: 'caseRefNo' },
  { header: 'Note', accessor: 'note' },
  { header: 'ID Number', accessor: 'idno' },
  { header: 'BS Number', accessor: 'bsno' },
  { header: 'Name', accessor: 'name' },
  { header: 'APIN', accessor: 'Apin' },
  { header: 'Date', accessor: 'date' },
  { header: 'Created By', accessor: 'createdBy' },
  { header: 'Modified By', accessor: 'modifiedBy' },
  { header: 'Modified Date', accessor: 'modifiedDate' },
  { header: 'Modified Time', accessor: 'modifiedTime' },
  { header: 'Modified Note', accessor: 'modifiedNote' },
];

function Realtable(props) {

  const [pinn,setPinn] = useState('')


  const history = useHistory();

  // Inside Realtable component

  

//   const handleCarbsClick = (pin) => {
//     const carbsdetails = data.find((each) => each.Apin === pin)
//     console.log('Carbs clicked:', pin);
//     setPinn(carbsdetails);  
//     const pinnData = setPinn();
//     history.push('/Dash', { data: pinnData });
// };

const handleCarbsClick = (pin) => {
  const carbsdetails = data.find((each) => each.Apin === pin);
  console.log('Carbs clicked:', pin);
  // Use history.push to navigate to the 'Dash' component and pass the data as state
  const newTab = window.open('/Dash', '_blank');

    // Pass data as a prop to the new tab
    newTab.carbsdetails = carbsdetails;

  
};
 




// history.push({
//   pathname: '/Dash',
//   state: { data: setPinn },
// });
// const handleCellClick = (data) => {
//   // Navigate to the Dash component with data as state
//   history.push('/Dash', { data });
// };


  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            {tableColumns.map((column) => (
              <TableCell
                key={column.accessor}
                style={{
                  border: '1px solid rgb(213 218 222)',
                  padding: '8px',
                  fontWeight: 'bold',
                }}
              >
                {column.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {tableColumns.map((column) => (
                <TableCell
                  key={column.accessor}
                  style={{
                    border: '1px solid rgb(213 218 222)',
                    padding: '8px',
                  }}

                  onClick={() => handleCarbsClick(row['Apin'])}
                >
                  {row[column.accessor]}
                  
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Realtable;



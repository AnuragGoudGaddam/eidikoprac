import { Box, Container, Grid, Card } from '@mui/material'
import React from 'react'
import { RiskLevel } from './donutchartfrom'
import { GenericTable } from './GenericTable'
import { Cases_column } from './table/Cases_column'
import { GridContainer } from './mushqtable'
import Realtable from './table/realtable'
import {label} from  './utils/utils/label'
import processTable from './table/processTable'

// import Realtable1 from './reactorginaltable'
// import Data from './reactorginaltable'


function Dashboard2({jwtToken}) {

     const openCasesData = [{"httpCode": 200, "httpMessage": "Valid Token", "caseRefNo": "EEC-014337704-1000026011", "instanceId": "20116", "alertedEntityNumber": "BS_014337704", "createdDateTime": "21-May-2023 03:14:51", "caseStatus": null, "cifId": "014337704", "dataId": "4388", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "TOFIK NURA KEDIR", "ageing": "49", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "19-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "594586", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4388", "value": "594586" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014337704-1000026023", "instanceId": "20120", "alertedEntityNumber": "BS_014337704", "createdDateTime": "21-May-2023 03:16:03", "caseStatus": null, "cifId": "014337704", "dataId": "4388", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "TOFIK NURA KEDIR", "ageing": "49", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "19-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "594596", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4388", "value": "594596" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014323975-1000025798", "instanceId": "19884", "alertedEntityNumber": "BS_014323975", "createdDateTime": "19-May-2023 10:39:35", "caseStatus": null, "cifId": "014323975", "dataId": "4311", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RUKN ALHASIB AL THAHBI TR L L C SOL", "ageing": "51", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "17-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "586039", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4311", "value": "586039" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014323975-1000025810", "instanceId": "19904", "alertedEntityNumber": "BS_014323975", "createdDateTime": "19-May-2023 10:39:47", "caseStatus": null, "cifId": "014323975", "dataId": "4311", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RUKN ALHASIB AL THAHBI TR L L C SOL", "ageing": "51", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "17-May-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "585990", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4311", "value": "585990" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014317465-1000026268", "instanceId": "20350", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 14:50:18", "caseStatus": null, "cifId": "014317465", "dataId": "4861", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "614509", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4861", "value": "614509" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014317465-1000026264", "instanceId": "20381", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 08:18:12", "caseStatus": null, "cifId": "014317465", "dataId": "4861", "taskAssignedToUser": null, "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "L1", "taskSubject": "InvestigatorL1", "taskId": "613654", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4861", "value": "613654" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014317465-1000026269", "instanceId": "20396", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 22:44:20", "caseStatus": null, "cifId": "014317465", "dataId": "4861", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "MLRO", "taskSubject": "Step: Review the case MLRO", "taskId": "624882", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4861", "value": "624882" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014309126-1000025664", "instanceId": "19695", "alertedEntityNumber": "BS_014309126", "createdDateTime": "17-May-2023 09:30:16", "caseStatus": null, "cifId": "014309126", "dataId": "3197", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "PHILEMON HOWARD", "ageing": "53", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "15-May-2023", "currentStep": null, "taskSubject": "InvestigatorL1", "taskId": "576730", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "3197", "value": "576730" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014309126-1000025684", "instanceId": "19730", "alertedEntityNumber": "BS_014309126", "createdDateTime": "17-May-2023 09:30:32", "caseStatus": null, "cifId": "014309126", "dataId": "3197", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "PHILEMON HOWARD", "ageing": "53", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "15-May-2023", "currentStep": null, "taskSubject": "InvestigatorL1", "taskId": "576756", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "3197", "value": "576756" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }, { "httpCode": 200, "httpMessage": "success", "caseRefNo": "EEC-014299408-1000026265", "instanceId": "20382", "alertedEntityNumber": "BS_010597457", "createdDateTime": "24-May-2023 08:28:15", "caseStatus": null, "cifId": "014299408", "dataId": "4862", "taskAssignedToUser": "NaveenCha", "alertId": "", "primaryEntityName": "RAHIMO HAIDERALI SACOOR", "ageing": "117", "sasCaseId": null, "createdUserId": "SYSTEM", "previousStep": null, "alertCreationDate": "12-Mar-2023", "currentStep": "L2", "taskSubject": "Step: Investigator L2", "taskId": "1801884", "dataTaskIdName": null, "dataTaskIdValue": null, "dataTaskDetails": { "name": "4862", "value": "1801884" }, "sasAlertId": null, "count": "10", "getHighCRS": null, "l1User": null, "l2User": null, "mlro": null, "crsLoadDate": null, "isCrsAvailable": null, "crsValue": null }]

     const [data, setData] = React.useState({
        openCasesData
      })

   
    //   const getCases = async () => {
    //     setData({...data,casesData:openCasesData})
    //   }

    //   React.useEffect(() => {
       
    //     getCases()
     
    
    //   }, []);

    

    return (
        <>
            <Container>
                <Box>

                    <Grid item xs={12} sm={6} md={4}  >
                        <div >
                            <Card>
                                <RiskLevel />
                            </Card>
                        </div>
                         
                         

                        {/* <GridContainer title={label.cases}>
                            <GenericTable col={Cases_column} apiData={openCasesData} isPagination={false} isExportExcel={false} isGlobalSearch={false} />
                        </GridContainer> */}
                        {/* <GenericTable col={Cases_column()} apiData={data.openCasesData} 
                        
                        isPagination={false} isExportExcel={false} isGlobalSearch={false} /> */}
                        <processTable/>

                        {
                        
                            <div>
                            {console.log(GenericTable,'cases12')}
                                {

                                    data.openCasesData.map((d, i)=>(
                                        <li>{JSON.stringify(d)}</li>
                                    ))
                                }
                            </div>
                        }
                    </Grid>

                </Box>
            </Container>
        </>
    )
}

export default Dashboard2

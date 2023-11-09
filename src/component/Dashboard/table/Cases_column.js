import { Link } from "react-router-dom";
import PlayArrowRoundedIcom from '@mui/icons-material/PlayArrowRounded';
// import { fetchUserToken } from "utils";
const tableHeaders=null;
const { caseRefernece, sasCaseId, cifId, alteredEntityNumber, primaryEntityName, ageing, alertCreationDate, createrUserId, assignedTo, caseCreatedDate, status } = tableHeaders

export const Cases_column = () => {
    return ([
        {
            Header: '<Field 1>',
            accessor: 'dataTaskDetails',
        },
        {
            Header: caseRefernece,
            accessor: 'caseRefNo',

        },
        { Header: sasCaseId, accessor: 'sasCaseId' },
        { Header: cifId, accessor: 'cifId' },
        { Header: alteredEntityNumber, accessor: 'alertedEntityNumber' },
        // { Header: 'Alerted Entity Name', accessor: 'customerName' },
        // { Header: 'Primary Entity number', accessor: 'primaryEntityNumber' },
        { Header: primaryEntityName, accessor: 'primaryEntityName' },
        { Header: ageing, accessor: 'ageing' },
        { Header: alertCreationDate, accessor: 'alertCreationDate' },
        { Header: createrUserId, accessor: 'createdUserId' },
        { Header: assignedTo, accessor: 'taskAssignedToUser' },
        { Header: caseCreatedDate, accessor: 'createdDateTime' },
        { Header: status, accessor: 'caseStatus' }
    ])
}


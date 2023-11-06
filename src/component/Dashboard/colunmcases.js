import { Link } from "react-router-dom";
import PlayArrowRoundedIcom from '@mui/icons-material/PlayArrowRounded';
import { tableHeaders } from './tableData'

const { caseRefernece, sasCaseId, cifId, alteredEntityNumber, primaryEntityName, ageing, alertCreationDate, createrUserId, assignedTo, caseCreatedDate, status } = tableHeaders

export const Cases_column = () => {
    return ([
        {
            Header: '<Field 1>',
            accessor: 'dataTaskDetails',
            Cell: (e) => (<Link to={`/casedetails/${e.value.value}/${e.value.name}/${e.row?.original?.caseRefNo}`} target='_blank' rel='noopener'> <PlayArrowRoundedIcom fontSize={"medium"} /> </Link>),
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


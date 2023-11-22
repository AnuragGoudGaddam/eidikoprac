// import { Link } from "react-router-dom";
// import PlayArrowRoundedIcom from '@mui/icons-material/PlayArrowRounded';
// import { tableHeaders } from '../label';

// const { dataId, alertId, instanceId, caseRefernece, sasCaseId, cifId, alteredEntityNumber, primaryEntityName, ageing, alertCreationDate, createrUserId, assignedTo, caseCreatedDate, status } = tableHeaders;

// export const Cases_column = () => {
//     return [
//         {
//             Header: '<Field 1>',
//             accessor: 'dataTaskDetails',
//         },
//         {
//             Header: caseRefernece,
//             accessor: 'caseRefNo',
//         },
//         { Header: sasCaseId, accessor: 'sasCaseId' },
//         { Header: cifId, accessor: 'cifId' },
//         { Header: alteredEntityNumber, accessor: 'alertedEntityNumber' },
//         { Header: instanceId, accessor: 'instanceId' },
//         { Header: dataId, accessor: 'dataId' },
//         { Header: alertId, accessor: 'alertId' },
//         { Header: primaryEntityName, accessor: 'primaryEntityName' },
//         { Header: ageing, accessor: 'ageing' },
//         { Header: alertCreationDate, accessor: 'alertCreationDate' },
//         { Header: createrUserId, accessor: 'createdUserId' },
//         { Header: assignedTo, accessor: 'taskAssignedToUser' },
//         { Header: caseCreatedDate, accessor: 'createdDateTime' },
//         { Header: status, accessor: 'caseStatus' }
//     ];
// };

import { Link } from "react-router-dom";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'; // Fix typo here
import { tableHeaders } from '../label';

const { dataId, alertId, instanceId, caseReference, sasCaseId, cifId, alertedEntityNumber, primaryEntityName, ageing, alertCreationDate, createdUserId, taskAssignedToUser, createdDateTime, caseStatus } = tableHeaders;

export const Cases_column = () => {
    return [
        {
            Header: '<Field 1>',
            accessor: ' ',
        },
        {
            Header: caseReference, // Fix variable name here
            accessor: 'caseRefNo',
        },
        { Header: sasCaseId, accessor: 'sasCaseId' },
        { Header: cifId, accessor: 'cifId' },
        { Header: alertedEntityNumber, accessor: 'alertedEntityNumber' },
        { Header: instanceId, accessor: 'instanceId' },
        { Header: dataId, accessor: 'dataId' },
        { Header: alertId, accessor: 'alertId' },
        { Header: primaryEntityName, accessor: 'primaryEntityName' },
        { Header: ageing, accessor: 'ageing' },
        { Header: alertCreationDate, accessor: 'alertCreationDate' },
        { Header: createdUserId, accessor: 'createdUserId' },
        { Header: taskAssignedToUser, accessor: 'taskAssignedToUser' },
        { Header: createdDateTime, accessor: 'createdDateTime' },
        { Header: caseStatus, accessor: 'caseStatus' }
    ];
};

import { Link } from "react-router-dom";
import ColumnFiltering from "./ColumnFiltering";
import { properties } from "./properties";
import EditIcon from "@material-ui/icons/EditOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
const EXCPQ_COLUMNS = [
  {
    id: "matrixreflink",
    Header: " ",
    accessor: "pymtReqId",
    Cell: (e) => (
      <Link to={`/ExceptionUpdate/` + e.value} target='_blank' rel='noopener'>
        <Tooltip title='Edit'>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Link>
    ),
  },
  {
    Header: "Matrix Ref No.",
    accessor: "strMatrixRefNo",
  },

  {
    Header: "Sub Product",
    accessor: "subProduct",
  },

  {
    Header: "Debit Account Number Description",
    accessor: "debitAccountNumberDesc",
  },
  {
    Header: "Beneficiary Name",
    accessor: "beneficiaryName",
  },
  {
    Header: "Initiator Date",
    accessor: "displayInitiatorDate",
  },
  {
    Header: "Payment Currency",
    accessor: "paymentCurrency",
  },
  {
    Header: "Amount",
    accessor: "invoiceAmount",
  },
  {
    Header: "Customer Reference",
    accessor: "customerReference",
  },
  {
    Header: "Initiator Name/Date Time",
    accessor: "initiatorNameDateTime",
  },
  {
    Header: "Remarks",
    accessor: "remarks",
  },
];
export default EXCPQ_COLUMNS;

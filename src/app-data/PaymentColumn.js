import { properties } from "../component/properties";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/EditOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
export const PaymentColumns = [
  {
    id: "matrixreflink",
    Header: " ",
    accessor: "pymtReqId",
    Cell: (e) => (
      <Link to={`/attachmentField/` + e.value} target='_blank' rel='noopener'>
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
    Header: "Initiator Name/Date and Time",
    accessor: "initiatorNameDateTime",
  },
];

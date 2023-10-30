import { properties } from "../component/properties";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/EditOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
export const ReserveFundColumns = [
  {
     id: "editable",
    Header: "",
    accessor: "",
    Cell: (e) => (
      <Link to={`/ReservedAttachmentFields/` + e.value} target='_blank' rel='noopener'>
        <Tooltip title='Edit'>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Link>

     
      
    ),
  },

  
  {
    Header: "CIF Number",
    accessor: "cifNumber",
  },
  {
    Header: "Management Company Name",
    accessor: "mcNameEn",
  },
  {
    Header: "Building Name",
    accessor: "buildingName",
  },
  {
    Header: "Account Number",
    accessor: "accountNumber",
  },
  {
    Header: "Reserved Account Number",
    accessor: "reserveAccountNumber",
  },
  {
    Header: "Is Active",
    accessor: "isActive",
  },
  {
    Header: "Branch Code",
    accessor: "branchCode",
  },
];

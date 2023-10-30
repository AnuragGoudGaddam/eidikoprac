import { properties } from "./properties";
import { Link } from "react-router-dom";
import "./documentColumn.css";
import ReactSession from "react-client-session/dist/ReactSession";
import axios from "axios";
export const DocumentColumns = [
  {
    Header: "Document Id",
    accessor: "documentId",
    Cell: (e) => (
      <a className='link' onClick={(event) => downloadDocument(event, e)}>
        {e.value}
      </a>
    ),
  },
  {
    Header: "Document Name",
    accessor: "documentName",
  },
  {
    Header: "Document Type",
    accessor: "documentType",
  },

  {
    Header: "Expires On",
    accessor: "expiresOn",
  },
];

let downloadDocument = async (event, e) => {
  event.preventDefault();
  let id = e.value;
  console.log("downloading pdf for " + id);
  let head = {
    token: ReactSession.get("token"),
    username: ReactSession.get("username"),
  };

  let response = await axios.get(`${properties.downloadPDF}?documentId=${id}`, {
    headers: head,
  });
  console.log(response);
  if (response) {
    if (response.data) {
      const downloadLink = document.createElement("a");
      const fileName = `${id}.pdf`;
      const linkSource = `data:application/pdf;base64,${response.data}`;
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
  } else {
    console.log("not response found");
    alert("Server is not responding, please try after some time");
  }
};

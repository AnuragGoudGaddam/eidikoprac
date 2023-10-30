import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, CustomInput } from "reactstrap";
//import { PaymentRequestTable } from './PaymentRequestTable';
import axios, { post } from "axios";
import { Button } from "reactstrap";
import { properties } from "./properties";
import ReactSession from "react-client-session/dist/ReactSession";
function DocumentUpload(props) {
  const [clearFile, setClearFile] = useState();
  // Allowing file type
  let allowedExtensions = process.env.REACT_APP_VALID_FILE_EXTENSION_DOCUMENT;
  let pymtId = props.pymtReqId;
  console.log("document class pymt id::" + pymtId);

  const [files, setFile] = useState();
  const [data, setData] = useState([]);
  //validate file extension
  // function ValidateFile() {
  //   var arrInputs = document.getElementsByName("file");

  //   for (var i = 0; i < arrInputs.length; i++) {
  //     var oInput = arrInputs[i];
  //     if (oInput.type == "file") {
  //       var sFileName = oInput.value;

  //       if (sFileName.length > 0) {
  //         var blnValid = false;
  //         for (var j = 0; j < validFileExtensions.length; j++) {
  //           var sCurExtension = validFileExtensions[j];
  //           if (
  //             sFileName
  //               .substr(
  //                 sFileName.length - sCurExtension.length,
  //                 sCurExtension.length
  //               )
  //               .toLowerCase() == sCurExtension.toLowerCase()
  //           ) {
  //             blnValid = true;
  //             break;
  //           }
  //         }

  //         if (!blnValid) {
  //           console.log("Invalid file");
  //           alert(
  //             "Sorry, " +
  //               files[0].name +
  //               ` is invalid, allowed extensions are: ` +
  //               validFileExtensions
  //           );
  //           return false;
  //         }
  //       }
  //     }
  //   }
  //   console.log("valid file");
  //   fileUpload(files[0]);
  //   return true;
  // }

  function fileUpload() {
    console.log("FILE: " + files);
    console.log("checkering file extension on submit");
    if (fileValidation()) {
      const url = properties.fileUpload + `${pymtId}`;
      const formData = new FormData();
      formData.append("file", files);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          token: ReactSession.get("token"),
          username: ReactSession.get("username"),
        },
      };
      console.log(formData);
      axios
        .post(url, formData, config)
        .then((response) => response.data)
        .then(
          (data) => {
            setData(data);
            console.info("report response << : " + JSON.stringify(data));
            alert("Document uploaded successfully");
            setClearFile("");
          },
          (error) => {
            console.log("File upload fail " + error);
            alert(
              "Error: Document upload failed please try again after some time."
            );
          }
        );
    }
  }

  function fileValidation(e) {
    let extensions = /(\.xls|\.xlsx|\.pdf)$/i;
    var fileInput = document.getElementById("file");
    var filePath = fileInput.value;
    if (!extensions.exec(filePath)) {
      console.log("Invalid file extension");
      alert(`Invalid file, system will accept only [.xls, .xlsx, .pdf, .PDF] `);
      fileInput.value = null;
      return false;
    }
    console.log("Valid file extension found");
    return true;
  }

  const getFile = (e) => {
    // const fileRef=(e.target.files[0]);
    const fileRef = e.target.files[0];
    console.log(fileRef);
    setFile(fileRef);
    fileValidation();
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <Form className='my-3 ml-5'>
        <FormGroup row>
          <Label sm={3} style={{ marginRight: -80 }}>
            Upload Document
          </Label>
          <Col sm={3}>
            <div class='custom-file mb-3'>
              {/* <input type="file" onChange={onChange} className="custom-file-input" name={fileName} id="input" /> */}

              <CustomInput
                type='file'
                accept='.xls, .xlsx, .pdf'
                onChange={getFile}
                id='file'
                name='file'
                key={clearFile}
              />
            </div>
          </Col>
          <Col sm={4}>
            <Button
              onClick={fileUpload}
              style={{ background: "#254a9e", color: "white" }}>
              Upload
            </Button>
          </Col>
        </FormGroup>
      </Form>

      <div className='App'></div>
    </div>
  );
}
export default DocumentUpload;

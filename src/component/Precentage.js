import React from 'react'
import { Button } from "reactstrap";
import { Col, CustomInput, FormGroup, Label } from 'reactstrap'

function Precentage() {
    return (
        <div>
            
            <FormGroup row style={{ width: '100%', paddingLeft: '30%' }}>
                <Label>Upload Payment Requests</Label>
                <Col>
                    <div class='custom-file'>
                        <CustomInput
                            type='file'
                            accept='.xls, .xlsx'
                            // onChange={getFile}
                            style={{ width: "20%", textAlign: "left" }}
                            id='file'
                            name='file'
                            //  key={clearFile}
                        />
                    </div>
                </Col>
                <Col>
                    <Button
                        onClick={fileUpload}
                        style={{ background: "#254a9e", color: "white" }}>
                        Upload{" "}
                    </Button>
                    <Button
                        style={{
                            marginLeft: "5vh",
                            position: "absolute",
                            background: "#254a9e",
                            color: "white",
                        }}
                        onClick={() => window.location.reload()}>
                        Refresh
                    </Button>
                </Col>
            </FormGroup>
        </div>
    )
}
function fileUpload(e) {
    e.preventDefault();
}

export default Precentage
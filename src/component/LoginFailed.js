import React, { useMemo, useState, useEffect } from "react";

import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import PaymentRequestFields from "./PaymentRequestFields";
import { useDispatch } from "react-redux";
import { addUser } from "../action";

import { useHistory } from "react-router-dom";
import ReactSession from "react-client-session/dist/ReactSession";
// import { addUser } from "../store/userStore";

function LoginFailed(props) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  ReactSession.set("username", "");
  const dispatch = useDispatch();
  let handleUsername = (event) => {
    setUsername(event.target.value);
  };
  let handlePassword = (event) => {
    setPassword(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    if (
      (userName == process.env.REACT_APP_USERNAME1 &&
        password == process.env.REACT_APP_PASSWORD) ||
      (userName == process.env.REACT_APP_USERNAME2 &&
        password == process.env.REACT_APP_PASSWORD)
    ) {
      dispatch(addUser(userName));
      ReactSession.set("username", userName);
      history.push("/tabs/");
    } else {
      alert("Bad Credentials!");
    }
    event.preventDefault();
  };

  return (
    <div
      style={{
        position: "relative",
        top: "40%",
        left: "40%",
        marginTop: "4em",
        marginLeft: "-15em",
        marginBottom: "4.3em",
        marginRight: "98.2em",
      }}>
      <Card>
        <CardBody
          style={{
            background: "#254a9e",
            width: 800,
            height: 50,
            overflow: "hidden",
          }}>
          <h4 style={{ color: "white" }}>Login</h4>
        </CardBody>

        <Card className='my-3 ml-4' style={{ width: 750 }}>
          <Form
            className='text-center my-3'
            method='POST'
            action='j_security_check'
            // onSubmit={handleSubmit}
          >
            <FormGroup>
              <p className='ml-5' style={{ color: "red" }}>
                Invalid Credentials
              </p>
              <Label style={{ color: "#254a9e" }} for='MashreqUser'>
                User ID
              </Label>
              <input
                className='ml-4'
                type='userid'
                name='j_username'
                onChange={handleUsername}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label style={{ color: "#254a9e" }} for='MashreqPassword'>
                Password
              </Label>
              <input
                className='ml-2'
                type='password'
                name='j_password'
                onChange={handlePassword}
                required
              />
            </FormGroup>

            <Container className='ml-4' style={{ height: 50 }}>
              <Button size='sm' style={{ background: "#254a9e" }}>
                Submit
              </Button>
              <Button
                size='sm'
                style={{ background: "#254a9e" }}
                className='ml-4'>
                Reset
              </Button>
            </Container>
          </Form>
        </Card>
        <CardBody
          style={{
            background: "#254a9e",
            width: 800,
            height: 50,
          }}></CardBody>
      </Card>
    </div>
  );
}
export default LoginFailed;

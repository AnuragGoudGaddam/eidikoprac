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
 

import { Redirect, useHistory } from "react-router-dom";
import ReactSession from "react-client-session/dist/ReactSession";
import { properties } from "./properties";
// import { addUser } from "../store/userStore";
 

function Login(props) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const PROTOCOL = window.location.protocol;
  const DOMAIN = window.location.host;
  const PATH = window.location.pathname;
  const history = useHistory();
  ReactSession.remove("username", "");
  ReactSession.remove("token", "");
  const dispatch = useDispatch();
  let handleUsername = (event) => {
    setUsername(event.target.value.replace(/[^\w\s]/gi, ""));
  };
  let handlePassword = (event) => {
    setPassword(event.target.value);
  };
 

  let handleSubmit = async (event) => {
    // event.preventDefault();
 

    // if (
    //   (userName == process.env.REACT_APP_USERNAME1 &&
    //     password == process.env.REACT_APP_PASSWORD) ||
    //   (userName == process.env.REACT_APP_USERNAME2 &&
    //     password == process.env.REACT_APP_PASSWORD)
    // ) {
    //   dispatch(addUser(userName));
    //   ReactSession.set("username", userName);
    //   history.push("/tabs/");
    // } else {
    //   alert("Bad Credentials!");
    // }
    // event.preventDefault();
 

    event.preventDefault();
    if (userName && password) {
      let user = {
        username: userName,
        password: password,
      };
      ReactSession.set("username", userName);
      try {
        let response = await axios.post(properties.loginURL, user);
        console.log(response);
        if (response) {
          if (!"200".localeCompare(response.data.status)) {
            console.log("valid user");
            ReactSession.set("token", response.data.message);
            ReactSession.set("username", userName);
            console.log("redirecting to tabs");
            // history.push("/tabs");
            var url = `${PROTOCOL}//${DOMAIN}${PATH}tabs`;
            console.log("redirecting to " + url);
            window.location = url;
            return false;
          } else if (!"403".localeCompare(response.data.status)) {
            console.log("Invalid user");
            alert(response.data.message);
          } else if (!"401".localeCompare(response.data.status)) {
            console.log("unauthorized user");
            alert(response.data.message);
          } else {
            alert("Server is not responding, please try after sometime.");
          }
        }
      } catch (e) {
        console.log("Error :: " + e);
        alert("Server is not responding, please try after sometime.");
        return false;
      }
    } else {
      alert("Please enter all mandatory data");
    }
  };
 

  let handleRest = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
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
            // method='POST'
            // action='j_security_check'
            onSubmit={handleSubmit}
            autoComplete='off'>
            <FormGroup>
              <Label
                style={{ color: "#254a9e" }}
                for='MashreqUser'
                className='required'>
                User ID
              </Label>
              <input
                className='ml-4'
                type='userid'
                name='j_username'
                autoComplete='off'
                value={userName}
                onChange={handleUsername}
                required
              />
            </FormGroup>
 

            <FormGroup>
              <Label
                style={{ color: "#254a9e" }}
                for='MashreqPassword'
                className='required'>
                Password
              </Label>
              <input
                className='ml-2'
                type='password'
                name='j_password'
                autoComplete='off'
                value={password}
                onChange={handlePassword}
                required
              />
            </FormGroup>
 

            <Container className='ml-4' style={{ height: 50 }}>
              <Button
                size='sm'
                style={{ background: "#254a9e" }}
                onClick={handleSubmit}>
                Submit
              </Button>
              <Button
                size='sm'
                style={{ background: "#254a9e" }}
                className='ml-4'
                onClick={handleRest}>
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
export default Login;
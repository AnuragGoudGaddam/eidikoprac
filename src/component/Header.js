import "./mydiv.css";

import React, { useState } from "react";
import logo from "./logo.png";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import { Button, CardBody } from "reactstrap";
import { useSelector } from "react-redux";
import ReactSession from "react-client-session/dist/ReactSession";
import { ContactlessTwoTone } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [isLogged, setLogged] = useState(false);
  const userName = useSelector((state) => state.userStore.username);
  let user = ReactSession.get("username");
  const PROTOCOL = window.location.protocol;
  const DOMAIN = window.location.host;
  const PATH = window.location.pathname;
  if (!isLogged)
    if (ReactSession.get("token")) {
      setLogged(true);
    } else {
      console.log("please login first to access this application");
    }

  let logout = (e) => {
    e.preventDefault();
    ReactSession.remove("token", "");
    ReactSession.remove("username", "");
    var url = `${PROTOCOL}//${DOMAIN}${PATH}`;
    console.log(url);
    window.location = url;
    // history.push("/");
  };
  return (
    <div>
      <CardBody style={{ minHeight: "1vh", display: "flex", padding: "0px" }}>
        {isLogged && (
          <text
            style={{
              position: "absolute",
              marginTop: "3.5rem",
              fontSize: "20px",
              marginLeft: "75%",
              color: "#0000EE",
            }}>
            {user}
          </text>
        )}
        <img
          style={{
            position: "relative",
            marginLeft: "2%",
            height: "10vh",
            top: "1vh",
            padding: "none",
          }}
          src={logo}
          alt='img'
        />
        <h3
          style={{
            color: "red",
            marginLeft: "35vh",
            position: "relative",
            top: "5vh",
          }}>
          Owner's Association
        </h3>
        {isLogged && (
          <Button
            size='sm'
            style={{
              background: "#254a9e",
              width: "100px",
              height: "40px",
              fontSize: "20px",
              marginLeft: "27rem",
              marginTop: "3rem",
            }}
            onClick={logout}>
            Logout
          </Button>
        )}
        {/* {login ? (
          ""
        ) : (
          <div
            className=''
            style={{
              paddingLeft: "500px",
              paddingTop: "25px",
            }}>
            <Tooltip title='Logout'>
              <IconButton color='secondary' aria-label='add an alarm'>
                <ExitToAppIcon />
              </IconButton>
            </Tooltip>
          </div>
        )} */}
      </CardBody>
    </div>
  );
};

export default Header;

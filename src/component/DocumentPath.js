import React, { useEffect, useState } from "react";

import axios from "axios";
import { Route, useParams } from "react-router";
import { properties } from "./properties";
import ReactSession from "react-client-session/dist/ReactSession";
const DocumentPath = () => {
  const [formData, setState] = useState({
    documentPath: "",
  });

  console.log(useParams());
  let { id } = useParams();

  const getPath = () => {
    let head = {
      token: ReactSession.get("token"),
      username: ReactSession.get("username"),
    };
    axios.get(`${properties.getPath}/${id}`, { headers: head }).then(
      (response) => {
        console.log("loading....");
        setState({
          ...formData,
          documentPath: response.data.documentPath,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {
    getPath();
  }, []);
  var started = false;

  window.open(formData.documentPath, "_self");

  return (
    <div>
      <switch>
        <Route path='/documentpath/:id' children={<Child />} />
      </switch>
    </div>
  );
};
function Child() {
  let { id } = useParams();
  return <div></div>;
}

export default DocumentPath;

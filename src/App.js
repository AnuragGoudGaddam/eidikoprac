import "./App.css";
import "./component/mydiv.css";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import AppTabs from "./component/AppTabs";
//import BulkPaymentDetails from './component/BulkPaymentDetails';
import DocumentPath from "./component/DocumentPath";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Login from "./component/Login";
import AttachmentFields from "./component/AttachmentFields";
import AttachmentFieldsCompletedRequest from "./component/AttachmentFields_CompletedRequest";
import ExceptionUpdate from "./component/ExceptionUpdate";
import PaymentRequestFields from "./component/PaymentRequestFields";
import { DocumentTable } from "./component/DocumentTable";
import AttachmentTemp from "./component/AttachmentTemp";
import Temp from "./component/Temp";
import ReactSession from "react-client-session/dist/ReactSession";
import BulkEdit from "./component/BulkEdit";
import Test from "./component/Test";
import LoginFailed from "./component/LoginFailed";
import { useState } from "react";
import axios from "axios";
import { properties } from "./component/properties";
import ReserveAttachmentFields from "./component/ReserveAttachmentFields";
import Dashboard from "./component/Dashboard/Dashboard";
import LinechartD from "./component/Dashboard/linechart";
import Dash from "./component/Dashboard/dash";
import { CasePriority } from "./component/Dashboard/apexchartsdonut";
import { RiskLevel } from "./component/Dashboard/donutchartfrom";
import { CaseTypes123 } from "./component/Dashboard/dounautchart2";

function App() {
  const [isUser, setIsUser] = useState(true);
  console.log(`OA React Application started`);
  console.log(process.env.REACT_APP_BASE_URL);
  ReactSession.setStoreType("localStorage");

  
  // let auth = async () => {
  //   setIsUser(true);
  //   console.log(
  //     `${properties.userAuth}?token=${ReactSession.get(
  //       "token"
  //     )}&username=${ReactSession.get("username")}`
  //   );
  //   let response = await axios.get(
  //     `${properties.userAuth}?token=${ReactSession.get(
  //       "token"
  //     )}&username=${ReactSession.get("username")}`
  //   );
  //   console.log(response);
  //   if (response) {
  //     if (response.data) {
  //       console.log("user already logged in");
  //       setIsUser(true);
  //     }
  //   }
  // };
  // // //caling userAuth
  // // if (!isUser) auth();
  // // console.log("PAth: " + window.location.pathname);
  // // if (!"/ownersassociation/".localeCompare(window.location.pathname)) {
  // //   console.log("token cleared");
  // //   ReactSession.set("token", "");
  // // }
  // console.log(isUser);
  // if (!isUser)
  //   if (ReactSession.get("token")) {
  //     console.log("user already logged in");
  //     setIsUser(true);
  //   } else {
  //     console.log("please login first");
  //   }

  return (
    <div className='App'>
      <Header />
      <hr />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/Dash' exact component={Dash} />
        <Route path='/casetypes' exact component={CasePriority} />
        <Route path='/risctypes' exact component={RiskLevel} />
        <Route path='/citytypes2' exact component={CaseTypes123} />




        {isUser && (
          <>
            <Route path='/bulkEdit' exact component={BulkEdit} />
            <Route path='/' exact component={Login} />
            <Route path='/loginFailed' exact component={LoginFailed} />
            <Route path='/tabs/' exact component={AppTabs} />
            {/* <Route path='/bulkPaymentdetails/:id' exact component={BulkPaymentDetails}/> */}
            <Route path='/documentpath/:id' exact component={DocumentPath} />
            <Route
              path='/attachmentField/:id'
              exact
              component={AttachmentFields}
            />
            <Route path='/attachmentTemp/' exact component={AttachmentTemp} />
            <Route path='/temp/:id' exact component={Temp} />
       
            
            <Route
              path='/ReservedAttachmentFields/:id'
              exact
              component={ReserveAttachmentFields}
            />
            

            <Route
              path='/ExceptionUpdate/:id'
              exact
              component={ExceptionUpdate}
            />
            <Route path='/test' exact component={Test} />
          </>
        )}
        <Redirect to='/' />
      </Switch>
      <Footer />
     
    </div>
  );
}
export default App;

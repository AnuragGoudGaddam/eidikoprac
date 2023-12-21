import { useState } from "react";

import { AppBar, Tab, Tabs } from "@material-ui/core";

import PaymentTabs from "./PaymentTabs";
import Search from "./TransactionSearchCriteria";
import PaymentRequestFields from "./PaymentRequestFields";
import CompletedRequest from "./CompletedRequest";
import ReportsTab from "./ReportsTab";
import BudgetDetailsTable from "./BudgetDetailsTable";
import ReserveFundDetails from "./ReserveFundDetails";
import ReserveFundDetailsCopy from "./ReserveFundDetailsCopy";
import ProcessTable from "./Dashboard/table/processTable";
import Audit_Table1 from "./Dashboard/table/tableData11";



const AppTabs = () => {
  console.log("loading AppTabs");
  const [tbVal, setVal] = useState(0);

  const moveTab = (e, val) => {
    setVal(val);
  };
  return (
    <div>
      <AppBar
        // /* color="default" */ 
        variant='elevation'
        //  position='sticky'
         position='static'
        style={{
          marginTop: -10,
            backgroundColor: "#254a9e" /* backgroundImage:'blue' */,
          maxHeight: "35px",
        }}>
        <Tabs
          TabIndicatorProps={{
            style: { background: "#25befa", marginBottom: "12px" },
          }}
          value={tbVal}
          onChange={moveTab}>
          <Tab
            label='Payment Request'
            style={{
              fontWeight: "bold",
              minWidth: "2%",
              fontSize: "13px",
              paddingTop: "0px",
              paddingBottom: "2px",
              paddingLeft: "10px",
              paddingRight: "0px",
              marginTop: "-3px",
            }}
          />
          <Tab
            label='Exception Queue'
            style={{
              fontWeight: "bold",
              minWidth: "2%",
              fontSize: "13px",
              paddingTop: "0px",
              paddingBottom: "2px",
              paddingLeft: "10px",
              paddingRight: "0px",
              marginTop: "-3px",
            }}
          />
          <Tab
            label='Completed Request'
            style={{
              fontWeight: "bold",
              minWidth: "2%",
              fontSize: "13px",
              paddingTop: "0px",
              paddingBottom: "2px",
              paddingLeft: "10px",
              paddingRight: "0px",
              marginTop: "-3px",
            }}
          />
          <Tab
            label='Search'
            style={{
              fontWeight: "bold",
              minWidth: "2%",
              fontSize: "13px",
              paddingTop: "0px",
              paddingBottom: "2px",
              paddingLeft: "10px",
              paddingRight: "0px",
              marginTop: "-3px",
            }}
          />
          <Tab
            label='Budget Details'
            style={{
              fontWeight: "bold",
              minWidth: "2%",
              fontSize: "13px",
              paddingTop: "0px",
              paddingBottom: "2px",
              paddingLeft: "10px",
              paddingRight: "0px",
              marginTop: "-3px",
            }}
          />
          <Tab
            label='Reports'
            style={{
              fontWeight: "bold",
              minWidth: "2%",
              fontSize: "13px",
              paddingTop: "0px",
              paddingBottom: "2px",
              paddingLeft: "10px",
              paddingRight: "0px",
              marginTop: "-3px",
            }}
          />
          
         <Tab
          label='RESERVE FUND DETAILS'
          style={{
            fontWeight: "bold",
            minWidth: "2%",
            fontSize: "13px",
            paddingTop: "0px",
            paddingBottom: "2px",
            paddingLeft: "10px",
            paddingRight: "0px",
            marginTop: "-3px",
          }}
          />
          <Tab
          label='Audit Taril'
          style={{
            fontWeight: "bold",
            minWidth: "2%",
            fontSize: "13px",
            paddingTop: "0px",
            paddingBottom: "2px",
            paddingLeft: "10px",
            paddingRight: "0px",
            marginTop: "-3px",
          }}
          />
        </Tabs>
      </AppBar>

      {tbVal === 0 && <PaymentRequestFields />}
      {tbVal === 1 && <PaymentTabs />}
      {tbVal === 2 && <CompletedRequest />}
      {tbVal === 3 && <Search />}
      {tbVal === 4 && <BudgetDetailsTable />}
      {tbVal === 5 && <ReportsTab />}
      {tbVal === 6 && <ReserveFundDetailsCopy/>}
      {tbVal === 7 && <Audit_Table1/>} 
     
    </div>
  );
};

export default AppTabs;

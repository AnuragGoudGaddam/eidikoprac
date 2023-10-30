import React from 'react';

import {
  AppBar,
  Tab,
  Tabs,
} from '@material-ui/core';

import BulkPayments from './BulkPayments';
import IndividualPayment from './IndividualPayment';
import IndividualPaymentFields from './IndividualPaymentFields';
import BulkPaymentField from './BulkPaymentField';

const PaymentTabs = () => {
    const [tbVal, setVal] = React.useState(0);

    const moveTab = (e, val) => {
        setVal(val)
    }
    return (
        <>
            <AppBar position="sticky" style={{marginTop:3 , backgroundColor:'#254a9e',maxHeight:'35px'}}>
                <Tabs TabIndicatorProps={{style: {background:'white',marginBottom:'11px',}}} style={{height:'5px'}} value={tbVal} onChange={moveTab}>
                    <Tab label="Individuals Payment" style={{fontWeight:'bold',minWidth:"2%",fontSize:'13px',paddingTop:'0px' ,paddingBottom:'-40px',paddingLeft:'10px',paddingRight:'0px'}}/>
                    <Tab label="Bulk Payment" style={{fontWeight:'bold',minWidth:"2%",fontSize:'13px' ,paddingTop:'0px' ,paddingBottom:'-40px',paddingLeft:'10px',paddingRight:'0px'}}/>
                </Tabs>
            </AppBar>
            {tbVal=== 0 && <IndividualPaymentFields/>}
            {tbVal=== 1 && <BulkPaymentField/>}
            {/*
            <TabPanel value={tbVal} index={0}>T1</TabPanel>
            <TabPanel value={tbVal} index={1}>T2</TabPanel>
            */}
        </>
    );
}
export default PaymentTabs




import React from 'react';

import {
  AppBar,
  Tab,
  Tabs,
} from '@material-ui/core';
import ReportsForm from './ReportsForm';
import TransactionalReport from './TransactionalReport';


const ReportsTab = () => {
    const [tbVal, setVal] = React.useState(0);

    const moveTab = (e, val) => {
        setVal(val)
    }
    return (
        <>
            <AppBar position="sticky" style={{marginTop:3 , backgroundColor:'#254a9e',maxHeight:'35px'}}>
                <Tabs TabIndicatorProps={{style: {background:'white',marginBottom:'11px',}}} style={{height:'5px'}} value={tbVal} onChange={moveTab}>
                    <Tab label="Budget Report" style={{fontWeight:'bold',minWidth:"2%",fontSize:'13px',paddingTop:'0px' ,paddingBottom:'-40px',paddingLeft:'10px',paddingRight:'0px'}}/>
                    <Tab label="Transactional Report" style={{fontWeight:'bold',minWidth:"2%",fontSize:'13px' ,paddingTop:'0px' ,paddingBottom:'-40px',paddingLeft:'10px',paddingRight:'0px'}}/>
                </Tabs>
            </AppBar>
            {tbVal=== 0 && <ReportsForm/>}
            {tbVal=== 1 && <TransactionalReport/>}
            
        </>
    );
}
export default ReportsTab




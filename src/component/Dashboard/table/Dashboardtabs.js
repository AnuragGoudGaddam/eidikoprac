import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { GridContainer } from '../mushqtable';

const DashboardTabs = ({ tabsData }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "Cases",
      value: "1",
      child: ""
    },
    {
      label: "Item Two",
      value: "2"
    },
    {
      label: "Item Three",
      value: "3"
    },
  ]

  const tabStyles = {
    textTransform: 'none', color: '#313131', fontSize: 15, fontFamily: 'Gilroy,sans-serif', fontWeight: 400
  }

  return (
    <GridContainer>
      <Box sx={{ backgroundColor: '#FAFAFB' }}>
        <TabContext value={value}>
          <Box sx={{ display: 'flex', zIndex: 300, justifyContent: 'space-between', borderBottom: 1, borderColor: '#e6e6e6' }}>
            <TabList onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: "#FF5E00" } }}>
              {
                tabs?.map((tab) => {
                  return (
                    <Tab
                      label={tab.label}
                      value={tab.value}
                      style={{ ...tabStyles }}
                      wrapped
                    />
                  )
                })
              }
            </TabList>
          </Box>
          <TabPanel value="1" className='bg-white'>
            {tabsData}
          </TabPanel>
          <TabPanel value="2" className='bg-white'>
            <h2>Item Two</h2>
          </TabPanel>
          <TabPanel value="3" className='bg-white'>
            <h2>Item Three</h2>
          </TabPanel>
        </TabContext>
      </Box>
    </GridContainer>
  );
}

export default DashboardTabs
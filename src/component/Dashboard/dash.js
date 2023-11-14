
import { Box, Card, Container, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';


function Dash({ setPinn }) {
  // const location = useLocation();
  // const data = location.state.data;
  // console.log(data, "data");


  const data = JSON.parse(localStorage.getItem('carbsdetails'));

  const listStyle = {
    listStyleType: 'none'
  };

  return (
    <div>

      <ul style={listStyle}>
        <li>Case Ref No: {data.caseRefernece}</li>
        <li>cifId: {data.cifId}</li>
        <li>alteredEntityNumber: {data.alteredEntityNumber}</li>
        <li> primaryEntityName: {data.primaryEntityName}</li>
        <li> ageing: {data.ageing}</li>
        <li>alertCreationDate: {data.alertCreationDate}</li>
        <li>createrUserId: {data.createrUserId}</li>
        <li>modifiedDate: {data.modifiedDate}</li>
        <li>assignedTo: {data.assignedTo}</li>
        <li>status: {data.status}</li>

      </ul>
    </div>
  );
}

export default Dash;


{/* <Container>
        <Grid container spacing={2}>
          {rows.map((row, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className='dashcards'>
                <div>
                  <Typography variant='h6'>
                    Name: {row.name}
                  </Typography>
                  <Typography variant='body1'>
                    ID No: {row.idno}
                  </Typography>
                </div>
                <div>
                  <Typography variant='body1'>
                    Complant Number: {row.Apin}
                  </Typography>
                </div>
                <div>
                  <Typography variant='body1'>
                    Date: {row.date}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> */}
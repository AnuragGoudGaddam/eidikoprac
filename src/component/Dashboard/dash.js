// import { Box,Card, Container, Grid, Typography } from '@material-ui/core';
// import React from 'react'

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function Dash() {
//   return (
//     <div>
//      <Box>
//      <Container>
//       <Grid container spacing={2}>
//         <Grid items xs={2} md={4} alignContent='center' className='dashcards' >
//         {rows.map((row) =>(
//           <Card >
//              <div>
//               <Typography variant='h6' >
//                 Name:{row.name}
//               </Typography>
//               <Typography variant='p' >
//                 calories:{row.calories}
//               </Typography>
//              </div>
//              <div>
//               <Typography variant='p'>
//                Fat:{row.fat}
//               </Typography>
//              </div>
//              <div>
//               <Typography variant='p'>
//                carbs:{row.carbs}
//               </Typography>
//              </div>
//           </Card>
//         ))}
//         </Grid>
//       </Grid>
//       </Container>
//      </Box>
//     </div>
//   )
// }

// export default Dash;

import { Box, Card, Container, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function Dash({ setPinn }) {
  const location = useLocation();
  const data = location.state.data;
  console.log(data, "data");

  const listStyle = {
    listStyleType: 'none'
  };

  return (
    <div>

      <ul  style={listStyle}>
        <li>Case Ref No: {data.caseRefNo}</li>
        <li>Note: {data.idno}</li>
        <li>BS Number: {data.bsno}</li>
        <li> Name: {data.name}</li>
        <li> APIN: {data.Apin}</li>
        <li>createdBy: {data.createdBy}</li>
        <li>Date: {data.date}</li>
        <li>modifiedDate: {data.modifiedDate}</li>
        <li>modifiedBy: {data.modifiedBy}</li>

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
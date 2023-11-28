import { Box,FormControl,Grid,InputLabel,MenuItem,Select,Table,
    TableBody, TableCell,TableContainer,TableRow,Paper, } from '@mui/material';
  import React from 'react';
  
  const ProductDataQ = () => {
    const [product, setProduct] = React.useState('');
    const [productDetails, setProductDetails] = React.useState(null);
    const [specifications, setSpecifications] = React.useState(null);
    const [productQuestions, setProductQuestions] = React.useState(null);

    const handleChange = (event) => {
        const details = getProductDetailsById(event.target.value);
        const specs = getSpecificationsById(event.target.value);
        const questions = getProductQuestionsById(event.target.value);
    
        setProductDetails(details);
        setSpecifications(specs);
        setProductQuestions(questions);
        setProduct(event.target.value);
      };

    const getProductDetailsById = (productId) => {
      const products = {
        10: { name: 'Iphone', color: 'Silver', storage: '128GB' },
        20: { name: 'kphone', color: 'Black', storage: '64GB' },
        30: { name: 'Uphone', color: 'Gold', storage: '256GB' },
      };
      return products[productId];
    };
  
    const getSpecificationsById = (productId) => {
      const specificationsData = {
        10: { display: '6.1 inches', camera: '12 MP dual-camera', battery: '2815 mAh' },
        20: { display: '5.8 inches', camera: '16 MP dual-camera', battery: '3000 mAh' },
        30: { display: '6.5 inches', camera: '12 MP triple-camera', battery: '3500 mAh' },
      };
      return specificationsData[productId];
    };
    const getProductQuestionsById = (productId) => {
        const questionsData = {
          10: [
            { id: 1, question: 'Does it support wireless charging?' },
            { id: 2, question: 'What is the warranty period?' },
          ],
          20: [
            { id: 1, question: 'Is it water-resistant?' },
            { id: 2, question: 'What colors are available?' },
          ],
          30: [
            { id: 1, question: 'Does it have a headphone jack?' },
            { id: 2, question: 'What is the processor speed?' },
          ],
        };
        return questionsData[productId];
      };
    
  
    const renderTable = (data) => (
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
    const renderQuestionsTable = (questions) => (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableBody>
              {questions.map((q) => (
                <TableRow key={q.id}>
                  <TableCell component="th" scope="row">
                    {q.id}
                  </TableCell>
                  <TableCell>{q.question}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    return (
        <>
        <div style={{margin:"10px"}}> 
        <FormControl style={{width:"200px"}} >
        <InputLabel id="demo-simple-select-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product}
          label="product"
          onChange={handleChange}
        >
          <MenuItem value={10}>Iphone</MenuItem>
          <MenuItem value={20}>kphone</MenuItem>
          <MenuItem value={30}>Uphone</MenuItem>
        </Select>
      </FormControl>
      </div>
      <hr/>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
       
        <Grid container spacing={3}>
        
          <Grid item xs={6}>
            {productDetails && renderTable(productDetails)}
          </Grid>
        
          <Grid item xs={6}>
            {specifications && renderTable(specifications)}
          </Grid>
          <Grid item xs={12}>
          {productQuestions && renderQuestionsTable(productQuestions)}
        </Grid>
        </Grid>
      </Box>
      </>
    );
  };
  
  export default ProductDataQ;
  
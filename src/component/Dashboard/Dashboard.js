import React from 'react'
import { Container, Box, Grid, Card } from '@material-ui/core';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    Pie,
    PieChart,
    ResponsiveContainer,
    LineChart,
    Line
} from 'recharts';

import Dchart2 from './Dchart2';
import LinechartD from './linechart';


// 
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';

// 



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



// 

const data = [
    {
        name: 'Page A',
        uv: 100,
        pv: 200,
        amt: 100
    },
    {
        name: 'Page B',
        uv: 300,
        pv: 100,
        amt: 150
    },
    {
        name: 'Page C',
        uv: 400,
        pv: 240,
        amt: 340
    },
    {
        name: 'Page D',
        uv: 200,
        pv: 242,
        amt: 250
    }, {
        name: 'Page E',
        uv: 100,
        pv: 240,
        amt: 240
    }, {
        name: 'Page F',
        uv: 400,
        pv: 245,
        amt: 540
    }
];

function Dashboard() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        console.log('Modal is closing'); // Add this line
        setOpen(false);
    };



    return (
        <>
            <Container>
                <Box >
                    <Grid container spacing={2}  >

                        <Grid item xs={12} sm={6} md={4}  >
                            <Card>
                                <div onClick={handleOpen} >
                                    <BarChart width={400}
                                        height={300}
                                        data={data}>
                                        <XAxis dataKey="name" stroke="#8884d8" />
                                        <YAxis />
                                        <Tooltip wrapperStyle={
                                            {
                                                width: 70,
                                                backgroundColor: '#ccc'
                                            }
                                        } />

                                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                        <Bar dataKey="uv" fill="#8884d8"
                                            barSize={20} />
                                        <Bar dataKey="pv" fill="red"
                                            barSize={20} />
                                        <Bar dataKey="amt" fill="#green"
                                            barSize={20} />


                                    </BarChart>
                                </div>

                                {/* model */}

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Dessert (100g serving)</TableCell>
                                                        <TableCell align="right">Calories</TableCell>
                                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell align="right">{row.calories}</TableCell>
                                                            <TableCell align="right">{row.fat}</TableCell>
                                                            <TableCell align="right">{row.carbs}</TableCell>
                                                            <TableCell align="right">{row.protein}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                    </Box>
                                </Modal>



                            </Card>

                        </Grid>


                        <Grid item xs={12} sm={6} md={3} >

                            <Dchart2 />

                        </Grid>
                        <div>
                            <div onClick={handleOpen}>

                                <MenuIcon />
                            </div>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Dessert (100g serving)</TableCell>
                                                    <TableCell align="right">Calories</TableCell>
                                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row.calories}</TableCell>
                                                        <TableCell align="right">{row.fat}</TableCell>
                                                        <TableCell align="right">{row.carbs}</TableCell>
                                                        <TableCell align="right">{row.protein}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                </Box>
                            </Modal>


                        </div>


                        <Grid item xs={12} sm={6} md={4}  >

                            <LinechartD />


                        </Grid>

                    </Grid>
                </Box>

            </Container>
        </>
    )
}

export default Dashboard

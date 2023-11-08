import { Box, Container, Grid, Card } from '@mui/material'
import React from 'react'
import { RiskLevel } from './donutchartfrom'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


function Dashboard2() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    
    return (
        <>
            <Container>
                <Box>

                    <Grid item xs={12} sm={6} md={4}  >
                        <div >
                            <Card>
                                <RiskLevel />
                            </Card>
                        </div>
                        <div>
                            <Button onClick={handleOpen} style={{color:"blue"}}>Open modal</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description"
                            >
                                <Box sx={{ ...style, width: 400 }}>
                                    <h2 id="parent-modal-title">Text in a modal</h2>
                                    <p id="parent-modal-description">
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </p>
                                   
                                </Box>
                            </Modal>
                        </div>


                    </Grid>

                </Box>
            </Container>
        </>
    )
}

export default Dashboard2

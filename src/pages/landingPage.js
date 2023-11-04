import React, { useState, useEffect } from "react";
import { NavBar } from "../components/navbar/navbar";
import { Grid,Button, Container, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export const Landing = () => {
    return (
    <Container maxWidth={false} style={{position:"static", padding:"0", marginLeft:"0px", marginRight:"0"}} >
        <NavBar/>
        <Grid container>
            <Grid item sm={8} lg={8} xl={8}> 
                <Box className="d-flex flex-column justify-content-start align-items-start" style={{borde:2, margin:"50px 50px 50px 150px"}}>
                    <h1 style={{ marginLeft: '10px',}} className="display-1 text-primary titulo">Work</h1>
                    <h2 className="titulo">flexibilidad,</h2>
                    <h2 className="titulo">independencia &</h2>
                    <h2 className="titulo">conexion.</h2>
                    <Button className="fs-3 mt-5 me-auto" color="primary" variant="contained" style={{ color: '#fffcf2' , borderRadius: 3 }}>Comienza a trabajar</Button>
                </Box>
            </Grid>
    
            <Grid item sm={4} lg={4} xl={4}>
                <Grid>
                    <Grid item sm={12} padding={5}>
                        <div className="card" style={{color: '#5271FF',width: "18rem"}}>
                            <Avatar style={{width:"100%", height:"300px", borderRadius:"0px"}} alt="Travis Howard" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRunT_pAzzZGqRe81m2vBGx5px6TiPyjrvGCbmGJov7CJvkmvY3" />
                        </div>
                    </Grid>
                    <Grid item sm={12} padding={5}>
                        <div className="card ms-5" style={{color: '#5271FF',width: "18rem"}}>
                            <Avatar style={{width:"100%", height:"300px", borderRadius:"0px"}} alt="Travis Howard 2" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-dsSlDOTC72_Zwa1kzH1V23D6dvRxSI3sHa2_Y2RpggtMw-Tr" />
                        </div>
                    </Grid>            
                </Grid>
            </Grid>
        </Grid>
    </Container>
    );
    
};
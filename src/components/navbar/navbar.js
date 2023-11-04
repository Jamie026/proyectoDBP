import { AppBar,Button, Icon, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
    
    return(
        <>
        <AppBar position="static" className="bg-light p-2">
            <Typography variant="h7" color="primary"  style={{ fontWeight: 'bold',textAlign: 'center' }}>15 DÍAS DE PRUEBA GRATIS!</Typography> 
        </AppBar>
        <AppBar position="static" style={{ background: 'linear-gradient(to right, #4cc9f0, #4361ee)'}}>

            <Toolbar >
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="/img/logo.png" alt="Logo" width="100" height="30" className="d-inline-block align-text-top rounded rounded-2 mx-3"/>
                </a>                    
                <Button color="secondary" sx={{ marginRight: '18px', fontSize: '15px' }} style={{ fontWeight: 'bold'}}>Compañía</Button> 
                <Button color="secondary" sx={{ marginRight: '18px', fontSize: '15px' }} style={{ fontWeight: 'bold'}}>Ayuda</Button>  
                <Button color="secondary"sx={{ marginRight: '18px', fontSize: '15px' }} style={{ fontWeight: 'bold'}}>Contacto</Button> 

                <a className="text-decoration-none text-light text-uppercase ms-auto" href="/login">
                    iniciar sesion
                 </a>
                 <a className="text-decoration-none text-uppercase btn btn-light text-primary mx-2 p-2" href="/register">
                    Registrate
                 </a>
            </Toolbar>
        </AppBar>
        </>
    );
}  

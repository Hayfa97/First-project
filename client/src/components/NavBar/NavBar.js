import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../JS/actions/actionsUser';
import { useDispatch } from 'react-redux';


const NavBar = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return <div><Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">  
            <Toolbar>
                <Link to="/posts"><Button variant="success">Posts</Button> </Link>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Dopamine
                </Typography>
                {localStorage.getItem("token") ? <Button color="inherit" onClick={() => {navigate("/signin");dispatch(logoutUser())}}>Logout</Button> : <Link to="/signin"><Button color="inherit">login</Button></Link>}
            </Toolbar>
        </AppBar>
    </Box>
   
    </div>;
};

export default NavBar;

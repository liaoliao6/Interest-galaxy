import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes';

import galaxy from "../../images/galaxy.jpg";

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [signin, setSignin] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/auth');
        setUser(null);
    };

    useEffect(() => {
        console.log("Navbar useEffect.");
        setUser(JSON.parse(localStorage.getItem('profile')));
        setSignin(true);
    }, []);

    const routeChange = ()=> {
        let path = `personal`;
        history.push(path);
    }
    

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant="h2" align="center" >Interest Galaxy</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6" style={{color:"white"}}>{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={routeChange}>MyPage</Button>
                        <Button variant="contained" className={classes.logout} color="grey" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
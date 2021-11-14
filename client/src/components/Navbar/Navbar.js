import React from 'react'
import {AppBar, Toolbar, Typography, Avatar, Button} from '@material-ui/core';
import { Link} from 'react-router-dom';
import useStyles from './styles';
import galaxy from "../../images/galaxy.jpg";

const Navbar = () => {
    const classes = useStyles();
    const user = null;

    const logout = () => {
    };
    
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant="h2" align="center" >Interest Galaxy</Typography>
                <img className={classes.image} src={galaxy} alt="icon" height="80" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
                ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
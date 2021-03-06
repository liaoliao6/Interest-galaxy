import React, { useState, useEffect } from "react";
import Posts from "./components/Posts/PostsPersonal";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { getPersonalPosts } from "./actions/posts"
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import * as actionType from './constants/actionTypes';

import { Typography, Toolbar, Container, AppBar, Grow, Grid, Avatar } from "@material-ui/core";
import galaxy from "./images/galaxy.jpg";
import useStyles from './styles';

const Personal = () => {
    const [currentId, setCurrentId] = useState(0);
    

    const dispatch = useDispatch();
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();

    useEffect(() => {
        const userid = user.result._id;
        console.log("Personal id: %s", userid);
        dispatch(getPersonalPosts(userid));
    }, [currentId, dispatch]);

    const routeChange = ()=> {
        let path = ``;
        history.push(path);
    }

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/auth');
        setUser(null);
    };

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" >My Galaxy</Typography>
                <Toolbar className={classes.toolbar}>
                    <Button variant="contained" className={classes.homeButton} color="secondary" onClick={routeChange}>Home</Button>
                </Toolbar>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>


        </Container>
    );
};

export default Personal;
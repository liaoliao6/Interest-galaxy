import React, { useState, useEffect } from "react";
import {Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Personal from "./Personal";

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    /*  useEffect(() => {
         dispatch(getPosts());
     }, [currentId, dispatch]); */

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/auth' exact component={Auth}/>
                    <Route path='/personal' exact component={Personal}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
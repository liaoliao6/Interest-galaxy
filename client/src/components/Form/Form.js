// This form to to create a new post
import React, { useState, useEffect } from "react";
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, MenuItem, InputLabel, Select, TextField, Button, Typography, Paper } from "@material-ui/core";
import { createPost, updatePost } from '../../actions/posts';

//创建新的post的form



const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    const [postData, setPostData] = useState({
        //use this in value
        title: '', message: '', tags: '', selectedFile: ''
    });
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            console.log("handleSubmit + createPost");
            dispatch(createPost({...postData, name: user?.result?.name}));
            clear();
        } else {
            console.log(`handleSubmit + updatePost with ID: ${currentId}`);
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name}));
            clear();
        }
    };

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own post and like other's posts.
                </Typography>
            </Paper>
        )
    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing Your Post` : 'Creating a Post'}</Typography>
                <TextField className={classes.input} name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField className={classes.input} name="message" variant="outlined" label="Message" fullWidth multiline rows={5} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <FormControl variant="filled" fullWidth>
                    <InputLabel id="tag">Tag</InputLabel>
                    <Select className={classes.input} label="Tag" id="tag" name="tags" variant="outlined" label="Tag" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}>
                        <MenuItem value={'food'}>Food</MenuItem>
                        <MenuItem value={'travel'}>Travel</MenuItem>
                        <MenuItem value={'Fashion'}>Fashion</MenuItem>
                        <MenuItem value={'Design'}>Design</MenuItem>
                        <MenuItem value={'Cosmetic'}>Cosmetic</MenuItem>
                    </Select>
                </FormControl>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Post!</Button>
                <Button className={classes.buttonClear} variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;
// This form to to create a new post
import React, { useState, useEffect } from "react";
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputBase, MenuItem, InputLabel, Select, TextField, Button, Typography, Paper } from "@material-ui/core";
import { createPost, updatePost } from '../../actions/posts';



const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    const [postData, setPostData] = useState({
        //use this in value
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost(postData));

        if (currentId === 0) {
            dispatch(createPost(postData));
            //clear();
        } else {
            dispatch(updatePost(currentId, postData));
            //clear();
        }
    };

    const clear = () => {
        /*  setCurrentId(0);
         setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' }); */
    };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Create your Post</Typography>
                <TextField className={classes.input} name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
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
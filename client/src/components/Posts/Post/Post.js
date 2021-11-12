import React from "react";
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { likePost } from "../../../actions/posts";

//主页单独的一个post，不允许修改删除

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography conponent="p" variant="body2" color="textSecondary" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" onClick={() => dispatch(likePost(post._id))}> <FavoriteIcon style={{ color: "#a10630" }} fontSize="small" /> &nbsp;Like {post.likeCount} </Button>
            </CardActions>

        </Card>
    );
}

export default Post;
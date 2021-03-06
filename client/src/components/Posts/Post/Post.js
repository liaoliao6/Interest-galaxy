import React from "react";
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

//主页单独的一个post，不允许修改删除

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        console.log(`[Post]: ${post}`);
        console.log(`[Post.message]: ${post.message}`);

        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
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
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}> 
                {/* <ThumbUpAltIcon fontSize="small" /> like {post.likeCount} */}
                    <Likes />
                </Button>
                {/* <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}> <DeleteIcon style={{ color: "#a10630" }} fontSize="small" /> &nbsp;Delete </Button> */}
            </CardActions>

        </Card>
    );
    
}


export default Post;
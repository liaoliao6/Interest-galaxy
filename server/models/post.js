import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt:{
        type: Date,
        default : Date.now
    }
});

const Post= mongoose.model('Post', postSchema);

export default Post;
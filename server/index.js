import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import db from './config/keys.js';

const app = express();

// BodyParser middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts', postRoutes);

// Connect to MongoDB
mongoose.connect(db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    //useFindAndModify: false,
    //useCreateIndex: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch((error) => console.log(error.message));

const PORT = process.env.PORT || 5000;    
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));



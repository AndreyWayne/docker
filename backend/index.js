const express = require('express');

const PORT = 9001;

const app = express();

const userRouter = require('./routes/user.routes.js');
const postRouter = require('./routes/post.routes');
const shopRouter = require('./routes/shop.routes');

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);
app.use('/api', shopRouter);

app.listen(PORT, () => { console.log('open port'); });
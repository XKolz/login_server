//mongodb
//require('./config/db');

//const app = require('express')();
// const port = 3000;

// const UserRouter = require('./api/User');

//For accpeting post from data
// const bodyParser = require('express').json;
// app.use(bodyParser());

// app.use('/user', UserRouter)

// app.listen(port, () =>{
    // console.log(`Server running on port ${port}`);
// })

//FFt8ckS3PzeRAmPv
//MONGO_URI=mongodb://mongodb-myapp:27017/myapp
//MONGODB_URI=mongodb+srv://sam:FFt8ckS3PzeRAmPv@cluster0.yqma9l4.mongodb.net/UserDB?retryWrites=true&w=majority
//MONGODB_URI=mongodb+srv://sam:ov39KRW2BkILdGnv@cluster0.yqma9l4.mongodb.net/?retryWrites=true&w=majority
//MONGODB_URI=mongodb+srv://sam:QJfuZc62rWJV0tzN@cluster0.yqma9l4.mongodb.net/UserDB?retryWrites=true&w=majority




require('./config/db');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const UserRouter = require('./api/User');

// For accepting POST request data
app.use(express.json());

app.use('/user', UserRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


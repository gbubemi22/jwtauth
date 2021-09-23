require('dotenv').config();
const users = require('./routes/user');
const auth = require('./routes/auth');
const express = require('express');
const morgan = require('morgan');
const connection = require('./db')
const app = express();


// connection();


app.use(express.json());
app.use(morgan('dev'));


app.use("/api/user", users)
app.use("/api/auth", auth)


const port = process.env.PORT || 3500;
app.listen(port,() =>console.log(`Listening on ${port}...`));
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');// helps us to connect to our mongodb database

require('dotenv').config(); // sensitive info is passed via .env file 
const app = express(); 
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // parses incoming data into json format
const uri = process.env.ATLAS_URI; // database connection string

// connection to database established
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).catch(err => console.log(err));

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Mongo DB connection up");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
 

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
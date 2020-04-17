const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');// helps us to connect to our mongodb database

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).catch(err=> console.log(err));

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("Mongo DB connection up");
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
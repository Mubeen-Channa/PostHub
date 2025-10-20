const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const app = express()

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
.then( () => console.log("MongoDB Connected Successfully."))
.catch( err => console.log("Error: " + err));

app.get('/', (req, res) => {
    res.redirect('/Login')
})

app.get('/login', (req, res) => {
    res.send("Welcome to Login Page")
})

app.listen('5000', (req, res) => {
    console.log("PostHub Server is running on port 5000")
})
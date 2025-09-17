const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv')

// Routes
const TestRoute = require('./routes/Test');
const LoginRoute = require('./routes/Login');

const app = express()

dotenv.config();

app.use(express.json());

app.use(cors({
  origin: "*"
}));

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
.then( () => console.log("MongoDB Connected Successfully."))
.catch( err => console.log("Error: " + err));

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.use('/test', TestRoute)
app.use('/login', LoginRoute)


app.listen('5000', (req, res) => {
    console.log("PostHub Server is running on port 5000")
})
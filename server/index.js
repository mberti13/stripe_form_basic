const express = require('express');
const app = express();
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');
const { application } = require('express');

app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json());

app.use(cors());






app.listen(process.env.PORT || 4000, () =>{
    console.log("Server is online on port 4000")
});

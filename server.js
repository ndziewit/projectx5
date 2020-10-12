const User= require ('./models/users');
const Plant= require ('./models/plants');
const History =require ('.models/history');

const express= require ('express');
const mongoose= require ('mongoose');
const morgan = require ('morgan'); 
const app= express (); 
const bcrypt= require ('bcrypt.js');
const moment = require ('moment');

app.use (express.static('public'));
app.use (express.json ());

mongoose.Promise = global. Promise; 
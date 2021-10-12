const express = require('express');
const morgan = require('morgan');
const path = require ('path');
const bcrypt = require('bcrypt');

const userRoutes = require('./routes/shoproutes');
const {mongoose} = require('./database');
const app = express();

//setting
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(userRoutes);

//static files
app.use(express.static(path.join(__dirname,  'public')));

//Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
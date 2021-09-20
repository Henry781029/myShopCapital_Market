const { request } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();

//setting
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/shoproutes'));


//Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
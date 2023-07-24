// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
require('ejs');
require('dotenv').config();
const config = process.env;
const app = express();
// const routes = require('./app/route/general');
const dbConn = require('./app/config/mongodb-connect');
dbConn.connect();
const {createContact} = require('./app/controller/contact.controller');


app.set('view engine', 'ejs');
app.set('views','./app/views'); 

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => { 
   res.render('home'); // it is automatically search the form.ejs file inside ./views/
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/register',(req,res)=>{
    res.render('register');
});

app.post('/submit',createContact);
// app.post('/submit',(req,res)=>{ 
//     let name = req?.body?.name;
//     let email = req?.body?.email; 
//     res.render('confirmation',{name,email}); 
// });



app.listen(config.PORT,()=>{
    console.log('server runing on port '+config.PORT);
});

 
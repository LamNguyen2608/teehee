const http = require("http");
const hostname = "localhost";
const fs = require("fs");
const path = require("path");
const express = require("Express");
//const handlebars = require("express-handlebars");
const app = express();
const { append } = require("vary");
const port = process.env.PORT || 3000;

//image source
app.use('/images', express.static(__dirname + '/images'));


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/Index.html');
});
app.get('/cart', (req,res) => {
    res.sendFile(__dirname + '/Cart.html');
});
app.get('/product', (req,res) => {
    res.sendFile(__dirname + '/Product.html');
});
app.get('/signup', (req,res) => {
    res.sendFile(__dirname + '/Signup.html');
});
app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/User_login.html');
});
app.get('/about', (req,res) => {
    res.sendFile(__dirname + '/About.html');
});
app.listen(port, () => console.log('Listening'));

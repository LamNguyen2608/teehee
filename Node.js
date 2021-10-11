const http = require("http");
const hostname = "localhost";
const fs = require("fs");
const path = require("path");
const express = require("Express");
const app = express();
const router = express.Router();
const { append } = require("vary");
const port = process.env.PORT || 3000;

//image source
app.use('/images', express.static(__dirname + '/images'));


router.get('/', (req,res) => {
    res.sendFile(__dirname + '/Index.html');
});
router.get('/cart', (req,res) => {
    res.sendFile(__dirname + '/Cart.html');
});
router.get('/product', (req,res) => {
    res.sendFile(__dirname + '/Product.html');
});
router.get('/signup', (req,res) => {
    res.sendFile(__dirname + '/Signup.html');
});
router.get('/login', (req,res) => {
    res.sendFile(__dirname + '/User_login.html');
});
router.get('/about', (req,res) => {
    res.sendFile(__dirname + '/About.html');
});

app.use("/", router);
app.listen(port, () => console.log('Listening'));

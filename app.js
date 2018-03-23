const express = require('express')
const app = express()

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    return next();
});

app.get('/', (req, res) => res.redirect('/index.html'))
app.get('/index', (req, res) => res.redirect('/index.html'))
app.get('/about', (req, res) => res.redirect('/about.html'))
app.get('/contact', (req, res) => res.redirect('/contact.html'))
app.get('/activity', (req, res) => res.redirect('/activity.html'))
// app.get('/', function (req, res, next) {
//     return res.redirect('/index.html');
// });
app.use(express.static('frontend'));

var http = require('http');

// http.createServer(app).listen(process.env.PORT, function () {
//     console.log('HTTP on port');
// });
http.createServer(app).listen(3000, function () {
    console.log('HTTP on port 3000');
});
var express = require("express");
var app = express();
app.use(express.static('public'))

app.get("/", (req, res) => { 
    res.send("Hello Cala")
;})
app.get("/add", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = Number(p1) + Number(p2);
    res.send("Result : " + result);
;})

app.get("/minus", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = Number(p1) - Number(p2);
    res.send("Result : " + result);
;})

app.get("/product", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = Number(p1) * Number(p2);
    res.send("Result : " + result);
;})

app.get("/division", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = Number(p1) / Number(p2);
    res.send("Result : " + result);
;})

app.listen(7777);
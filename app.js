var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql=require("mysql");
var app = express();

//Mini_Project to Node Application.
app.use(express.static(__dirname));
console.log(__dirname);
//Default Page

app.get("/",function (req,res) {
    res.redirect("/index.html");
});

//import the body-parser
var bodyparser = require("body-parser");
//Set the JSON as the MIME
app.use(bodyparser.json());


var outputString = "";

var connection = mysql.createConnection({
    host: 'healthcaredb.cc62svhsp2op.us-east-1.rds.amazonaws.com',
    user:'root',
    password: 'Passw0rd',
    port: 3306,
    database: 'healthcare'
});
//connect to database.
connection.connect();

app.get("/read",function (req,res) {
    connection.query("select * from employees;",function (err,records,fields) {
        res.send(records);
    });
});


app.post("/createuser" , function (req,res) {
    var assetid = req.body.assetid;
    var empName = req.body.empName;


    var my_query="insert into employees values("+"'"+assetid+"'"+","+"'"+empName+"'"+")";

    console.log(my_query);
    connection.query(my_query,function (err,res) {
        console.log(err);
    });

});

//Assign the Port No.
app.listen(8000);
console.log("Server Listening the Port No.8000");
var express = require('express');
var router = express.Router();

router.get("/read",function (req,res) {
    connection.query("select * from employees;",function (err,records,fields) {
        res.send(records);
    });
});

router.post("/createuser" , function (req,res) {
    var assetid = req.body.assetid;
    var empName = req.body.empName;


    var my_query="insert into employees values("+"'"+assetid+"'"+","+"'"+empName+"'"+")";

    console.log(my_query);
    connection.query(my_query,function (err,res) {
        console.log(err);
    });

});

module.exports=router;

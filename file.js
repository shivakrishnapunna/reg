const express = require('express');
const fileUpload = require('express-fileupload');
var app = express();
//Mini_Project to Node Application.
app.use(express.static(__dirname));
console.log(__dirname);
//Default Page
app.get("/",function (req,res) {
    res.redirect("/file_upload.html");
});

// default options
app.use(fileUpload());

app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('E:\\Form\\fileUpload', function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});
app.listen(8008);
console.log("Server Listening the Port No.8008");
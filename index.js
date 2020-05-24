const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
// Create Express App
const app = express();

// Db COnfig
const db = require('./config/mongoose');

// Parse requests
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use('/', require('./routes'));





app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server started on port ${port}`);
})
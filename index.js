const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
// Create Express App
const app = express();

app.get('/', (req, res) => {
    res.json({"message": "welcome"});
})



app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server started on port ${port}`);
})
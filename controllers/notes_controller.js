const Note = require('../models/Schema');

module.exports.home = function(req, res){
    return res.json({"message":"Welcome to EasyNotes application.Takes notes quickly"});
}
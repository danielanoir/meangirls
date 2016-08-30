require("../db/schema")
var mongoose = require('mongoose')

var VictimModel = mongoose.model("Victim")
module.exports = VictimModel

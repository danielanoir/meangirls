require("../db/Schema")
var mongoose = require('mongoose')

var VictimModel = mongoose.model("Victim")
module.exports = VictimModel

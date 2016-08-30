var mongoose = require('mongoose')
var schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var VictmsSchema = new Schema({
  body: String
})

mongoose.model("Victim", VictimSchema)

var mongoose = require('mongoose')
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var VictimSchema = new Schema({
  name: String,
  image: String,
  insult: String
})

mongoose.model("Victim", VictimSchema)
module.exports = mongoose;

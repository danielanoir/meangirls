var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/victim')
var VictimModel = require("../models/victim")

VictimModel.remove({}, function(err){
})

var Nelley = new VictimModel({name: "Nelley", image: "#", insult: "Boo you whore!"})
var Aubrey = new VictimModel({name: "Aubrey", image: "#", insult: "I hear she does car commercials in Japan"})
var Mark = new VictimModel({name: "Mark", image: "#", insult: "Made out with a hot dog"})
var Ahmed = new VictimModel({name: "Ahmed", image: "#", insult: "Nastiest skank bitch I've ever me"})

var victim = [Nelley, Aubrey, Mark, Ahmed]

for (var i = 0; i < victim.length; i++){
  victim[i].save(function(err){
    if (err){
      console.log(err)
    } else {
      console.log("victim saved")
    }
  })
}

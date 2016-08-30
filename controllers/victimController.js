var VictimModel = require("../models/victim")

var victimController = {
  index: function(req, res){
    VictimModel.find({}, function(err, docs){
      res.render("victim/index", {victim: docs})
    })
  }
}

module.exports = victimController;

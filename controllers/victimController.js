var VictimModel = require("../models/victim")

var victimController = {
  index: function(req, res){
    VictimModel.find({}, function(err, docs){
      res.render("victim/index", {victim: docs})
    })
  },

  new: function(req, res){
    res.render("victim/new")
  },

  show: function(req, res){
    VictimModel.findById(req.params.id, function(err, doc){
      res.render("victim/show", {victim: doc})
    })
  }
}

module.exports = victimController;

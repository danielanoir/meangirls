var VictimModel = require("../models/victim")
var mongoose = require('mongoose')

var victimController = {
  index: function(req, res){
    VictimModel.find({}, function(err, docs){
      res.render("victim/index", {victim: docs})
    })
  },

  create: function(req,res){
      var victim = new VictimModel({name: req.body.name, image: req.body.image, insult: req.body.insult})
      victim.save(function(err){
        if(!err){
          res.redirect("/victim/")
        }
      })
    },

  new: function(req, res){
    res.render("victim/new")
  },

  show: function(req, res){
    VictimModel.findById(req.params.id, function(err, doc){
      res.render("victim/show", {victim: doc})
    })
  },

  edit: function(req, res){
    VictimModel.findById(req.params.id, function(err, doc){
      res.render("victim/edit", {victim: doc})
    })
  },

  update: function(req, res){
    VictimModel.findById(req.params.id, function(err, docs){
      docs.name = req.body.name
      docs.save(function(err){
        if(!err){
          res.redirect("/victim/" + req.params.id)
        }
      })
    })
  },

  delete: function(req, res){
    VictimModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.redirect("/victim")
      }
    })
  }
}

module.exports = victimController;

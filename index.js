var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var victimController = require("./controllers/victimController")
mongoose.connect('mongodb://localhost/victim')
var app = express()
app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/victim", victimController.index)
app.get("/victim/new", victimController.new)
app.get("/victim/:id", victimController.show)

var express = require("express")
var sequelize = require("sequelize")
var sql = require("mysql2")
var models = require("./user_model")
var post_models = require("./post_model.js")

var app = express()

var logger = function(req, res, next){
	console.log(req.method, req.url)
	next()
}

var listener = app.listen(8008, function(){
	console.log("Server has started on " + listener.address().port)
})

app.set("view engine", "pug")
app.use("/public", express.static(__dirname + "/public"))
app.use(logger)

app.get("/", function(req, res){
	res.render("index", users)
})

app.get("/users", function(req, res){
	models.users.findAll().then(users => {
		res.render("index", {users: users})
		})
	})

app.get("/users/:id", function(req, res){
	models.users.findById(req.params.id).then(user => {
	post_models.posts.findAll({where: {user_id: req.params.id}}).then(posts => {
		res.render("users", {
			user: user,
			posts: posts
			})
		})
	})
})

app.get("/posts/:id", function(req, res){
	post_models.posts.findById(req.params.id).then(posts => {
		res.render("posts",{posts: posts})
		})
	})


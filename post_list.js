var post_models = require("./post_model.js")
var posts = post_models.posts

posts.sync({force: true}).then(()=> {
	return posts.create({
		content: "Test post 1",
		user_id: "4"
	})
}).then(()=> {
	return posts.create({
		content: "Test post 2",
		user_id: "3"
	})
}).then(()=> {
	return posts.create({
		content: "Test post 3",
		user_id: "2"
	})
}).then(()=> {
	return posts.create({
		content: "Test post 4",
		user_id: "4"
	})
}).then(()=> {
	return posts.create({
		content: "Test post 5",
		user_id: "1"
	})
}).then(()=> {
	return posts.create({
		content: "Test post 6",
		user_id: "3"
	})
}).then(()=> {
	return posts.create({
		content: "Test post 7",
		user_id: "3"
	})
}).then(()=> {
	return posts.create({
		content: "Test post 8",
		user_id: "4"
	})
}).then(()=> {
	return posts.create({
		content: "Test post 9",
		user_id: "1"
	})
}).then(()=> {
	return posts.create({
		content: "Test post 10",
		user_id: "2"
	})
}).then(()=> {
	post_models.sequelize.close()
	})

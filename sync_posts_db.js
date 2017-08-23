var post_models = require("./post_model.js")

post_models.posts.sync().then(()=> {
	post_models.sequelize.close()
	})

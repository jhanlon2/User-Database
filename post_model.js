const Sequelize = require("sequelize")

const sequelize = new Sequelize("user_list", "root", "password", {
	host: "localhost",
	port: 3306,
	dialect: "mysql",
	})

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully")
		})
	.catch(err => {
		console.error("Unable to connect to the database", err)
		})

var post_models = {
		sequelize: sequelize,

		posts: sequelize.define("Posts", {
			content: {
				type: Sequelize.STRING
				},
			user_id: {
				type: Sequelize.STRING
				}
			})
	}

module.exports = post_models

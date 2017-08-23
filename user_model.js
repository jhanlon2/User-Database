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

var models = {
		sequelize: sequelize,

		users: sequelize.define("Users", {
			name: {
				type: Sequelize.STRING
				},
			phone: {
				type: Sequelize.STRING
				},
			dob: {
				type: Sequelize.STRING
				},
			email: {
				type: Sequelize.STRING
				},
			gender: {
				type: Sequelize.STRING
				}
			})
	}

module.exports = models

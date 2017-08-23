var models = require("./user_model.js")

models.users.sync().then(() => {
	models.sequelize.close()
	})

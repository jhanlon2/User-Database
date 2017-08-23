var models = require("./user_model.js")
var users = models.users

users.sync({force: true}).then(()=> {
	return users.create({
		name: "Jonathan Morris",
		phone: "(621) 559 5488",
		dob: "12/01/1996",
		email: "jonathan96@example.com",
		gender: "Male"
	})
}).then(()=> {
	return users.create({
		name: "Joe Hayes",
		phone: "(382) 660 9027",
		dob: "15/12/1994",
		email: "joehayes@example.com",
		gender: "Male"
	})
}).then(()=> {
	return users.create({
		name: "Sue Hayes",
		phone: "(382) 660 9028",
		dob: "15/12/1993",
		email: "suehayes@example.com",
		gender: "Female"
	})
}).then(()=> {
	return users.create({
		name: "Frances Silva",
		phone: "(257) 449 6403",
		dob: "29/11/1981",
		email: "frances@example.com",
		gender: "Female"
	})
}).then(()=> {
	return users.create({
		name: "Jake Weary",
		phone: "(800) 649 2568",
		dob: "20/4/1969",
		email: "jakeweary@example.com",
		gender: "Attack Helicopter"
	})
}).then(()=> {
	models.sequelize.close()
	})

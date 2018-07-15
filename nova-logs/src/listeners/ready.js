const moment = require("moment");

module.exports = function(client){
	console.log("nova-logs");
	console.log(moment(Date.now()).utcOffset(1).format("LLLL"));
	client.on("ready", function(){
		console.log("Login successful");
		console.log("Logged in as " + client.user.tag);
		client.users.get("153595272465743872").send(
			"✅ nova-logs has been started",
			{
				"embed": {
					"color": 3066993, //Green
					"fields": [
						{
							"name": "Date",
							"value": moment.utc().format(),
							"inline": true
						}
					]
				}
			}
		);
	});
};

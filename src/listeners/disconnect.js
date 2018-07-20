var { stripIndents } = require("common-tags");

module.exports = function(client){
	client.on("disconnect", function(){
		console.error(
			stripIndents`EVENT "disconnect" RECEIVED
			BOT IS NO LONGER ATTEMPTING TO RECONNECT AUTOMATICALLY!
			Process will crash in 15 minutes from now.`
		);
		//Restarting in 15 minutes.
		setInterval(
			process.exit(1),
			900000
		);
	});
};

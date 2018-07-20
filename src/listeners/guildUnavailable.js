var { stripIndents } = require("common-tags");

const guild_makeshift_id = "";

module.exports = function(client){
	client.on("guildUnavailable", (guild) => {
		if(guild_makeshift_id != guild.id) return;
		console.error(
			stripIndents`EVENT "guildUnavailable" RECEIVED
			Bot is no longer connected to Makeshift guild.`
		);
	});
};

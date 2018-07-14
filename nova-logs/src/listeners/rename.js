const moment = require("moment");

module.exports = function(client, channel){
	function send_embed_aliasChange(alias_old, alias_new, user){
		client.channels.get(channel).send(`📝 ${alias_old} is now called ${alias_new}`,
			{
				"embed": {
					"color": 3447003, //Blue
					"fields": [
						{
							"name": "User",
							"value": user.toString(),
							"inline": true
						},
						{
							"name": "Old alias",
							"value": alias_old,
							"inline": true
						},
						{
							"name": "New alias",
							"value": alias_new,
							"inline": true
						},
						{
							"name": "Date",
							"value": moment.utc().format(),
							"inline": true
						}
					]
				}
			}
		);
	}
	
	client
		.on("guildMemberUpdate", (oldMember, newMember) => {
			if(oldMember.displayName == newMember.displayName) return;
			console.log("MEMBER DISPLAYNAME CHANGED: " + newMember.user.id + " (" + oldMember.displayName + " to " + newMember.displayName + ")");
			send_embed_aliasChange(oldMember.displayName, newMember.displayName, newMember.user);
		})
		.on("userUpdate", (oldUser, newUser) => {
			if(oldUser.username == newUser.username) return; //Only trigger if username changed
			console.log("USER NAME CHANGED: " + newUser.id + " ("+oldUser.username + " to " + newUser.username + ")");
			if(client.channels.get(channel).guild.members.get(newUser.id).nickname) return; //Only trigger if user has no username
			send_embed_aliasChange(oldUser.username, newUser.username, newUser);
		});
};

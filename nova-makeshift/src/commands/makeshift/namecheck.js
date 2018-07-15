const commando = require("discord.js-commando");

module.exports = class makeshift_namecheck extends commando.Command {
	constructor(client) {
		super(client, {
			name: "namecheck",
			aliases: [
				"c",
				"check",
				"name",
				"namecheck"
			],
			group: "makeshift",
			memberName: "namecheck",
			description: "Check your name according to (old) rule 6",
			guildOnly : true
		});
	}

	async run(msg, args) {
		msg.react("✅");
		var username = msg.member.displayName.split('(').pop().split(')').shift().replace(/[^A-Za-z0-9.\-_]/g, '');
		if(username){
			return msg.channel.send("Your name is **" + username + "**.");
		}
		return;
	}
};
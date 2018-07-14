const commando = require("discord.js-commando");

module.exports = class moderative_mute extends commando.Command {
	constructor(client) {
		super(client, {
			name: "mute",
			aliases: [
				"mute"
			],
			group: "debug",
			memberName: "mute",
			description: "Mutes a member for a specified period",
			guildOnly : true
		});
	}

	async run(msg, args) {
		//msg.react("✅");
		//return msg.channel.send("");
		return;
	}
};
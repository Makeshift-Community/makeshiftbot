const commando = require("discord.js-commando");

module.exports = class moderative_lock extends commando.Command {
	constructor(client) {
		super(client, {
			name: "lock",
			aliases: [
				"lock",
				"lockdown"
			],
			group: "moderative",
			memberName: "lock",
			description: "Locks a channel for a specified period",
			guildOnly : true
		});
	}

	async run(msg, args) {
		//msg.react("✅");
		//return msg.channel.send("");
		return;
	}
};

const commando = require("discord.js-commando");

module.exports = class command extends commando.Command {
	constructor(client) {
		super(client, {
			name: "join",
			aliases: [
				"join",
				"joined"
			],
			group: "moderative",
			memberName: "join",
			description: "",
			guildOnly : true
		});
	}

	async run(msg, args) {
		//msg.react("✅");
		//return msg.channel.send("");
		return;
	}
};

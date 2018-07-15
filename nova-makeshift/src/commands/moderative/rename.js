const commando = require("discord.js-commando");

module.exports = class command extends commando.Command {
	constructor(client) {
		super(client, {
			name: "rename",
			aliases: [
				"rename",
				"renamed"
			],
			group: "moderative",
			memberName: "rename",
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

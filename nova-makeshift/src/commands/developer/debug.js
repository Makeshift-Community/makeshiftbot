var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "debug",
			aliases: [
				"debug"
			],
			memberName: "debug",
			group: "developer",
			description: "A command used for testing various things. ",
			ownerOnly : true
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send(
			"Nothing"
		);
	}
};

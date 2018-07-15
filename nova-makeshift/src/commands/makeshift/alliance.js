const commando = require("discord.js-commando");

module.exports = class makeshift_alliance extends commando.Command {
	constructor(client) {
		super(client, {
			name: "alliance",
			aliases: [
				"alliance"
			],
			group: "makeshift",
			memberName: "alliance",
			description: "Link to the alliance Discord"
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send("We're not in an alliance right now.");
	}
};
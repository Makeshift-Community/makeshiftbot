const commando = require("discord.js-commando");

module.exports = class resources_blackmarket extends commando.Command {
	constructor(client) {
		super(client, {
			name: "blackmarket",
			aliases: [
				"bm",
				"blackmarket"
			],
			group: "resources",
			memberName: "blackmarket",
			description: "Warframe Black Market Discord"
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send("https://discord.gg/EwD6J37");
	}
};
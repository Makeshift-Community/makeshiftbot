const commando = require("discord.js-commando");

module.exports = class resources_rsb extends commando.Command {
	constructor(client) {
		super(client, {
			name: "rsb",
			aliases: [
				"wfrsb",
				"rsb",
				"schoolbus",
				"raidschoolbus"
			],
			group: "resources",
			memberName: "rsb",
			description: "Warframe raid schoolbus Discord"
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send("https://discord.gg/wfrsb");
	}
};
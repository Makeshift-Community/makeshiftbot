const commando = require("discord.js-commando");

module.exports = class resources_deathsnacks extends commando.Command {
	constructor(client) {
		super(client, {
			name: "deathsnacks",
			aliases: [
				"deathsnacks",
				"tracker",
				"tracking"
			],
			group: "resources",
			memberName: "deathsnacks",
			description: "An event tracker for Warframe"
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send("<http://deathsnacks.com/wf/index.html>");
	}
};
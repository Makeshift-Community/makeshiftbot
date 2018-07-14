const commando = require("discord.js-commando");

module.exports = class resources_forums extends commando.Command {
	constructor(client) {
		super(client, {
			name: "forums",
			aliases: [
				"forum",
				"forums",
				"warframe-forums",
				"wf-forums",
				"warframeforums"
			],
			group: "resources",
			memberName: "forums",
			description: "Official Warframe forums"
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send("<https://forums.warframe.com/>");
	}
};
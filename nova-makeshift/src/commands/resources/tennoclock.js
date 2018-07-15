const commando = require("discord.js-commando");

module.exports = class resources_tennoclock extends commando.Command {
	constructor(client) {
		super(client, {
			name: "tennoclock",
			aliases: [
				"tennoclock",
				"tennoclocknews",
				"tcn",
				"tgdm"
			],
			group: "resources",
			memberName: "tennoclock",
			description: "TennoClockNews, a news site run by a veteran"
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send("<https://tennoclocknews.com/>");
	}
};
const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_voidstrike extends commando.Command {
	constructor(client) {
		super(client, {
			name: "voidstrike",
			aliases: [
				"voidstrike"
			],
			group: "memes-warframe",
			memberName: "voidstrike",
			description: "Void Strike"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439932625180688384/voidstrike.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

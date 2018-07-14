const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_stalker extends commando.Command {
	constructor(client) {
		super(client, {
			name: "stalker",
			aliases: [
				"stalker"
			],
			group: "memes-warframe",
			memberName: "stalker",
			description: "Stalker"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439742574039662592/stalker.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

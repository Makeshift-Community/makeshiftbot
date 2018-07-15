const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_dab extends commando.Command {
	constructor(client) {
		super(client, {
			name: "dab",
			aliases: [
				"dab",
				"saryndab"
			],
			group: "memes-warframe",
			memberName: "dab",
			description: "Dab"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503411457556481/dab.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

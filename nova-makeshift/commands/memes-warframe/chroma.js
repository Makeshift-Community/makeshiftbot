const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_chroma extends commando.Command {
	constructor(client) {
		super(client, {
			name: "chroma",
			aliases: [
				"chroma"
			],
			group: "memes-warframe",
			memberName: "chroma",
			description: "Chroma"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439745675236999168/chroma.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

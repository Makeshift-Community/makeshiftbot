const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_ivara extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ivara",
			aliases: [
				"ivara",
				"zipline"
			],
			group: "memes-warframe",
			memberName: "ivara",
			description: "Ivara"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506938892386322/ivara.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_hema extends commando.Command {
	constructor(client) {
		super(client, {
			name: "hema",
			aliases: [
				"hema",
				"mutagen",
				"grinding",
				"research"
			],
			group: "memes-warframe",
			memberName: "hema",
			description: "Hema research"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506673221107727/hema.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

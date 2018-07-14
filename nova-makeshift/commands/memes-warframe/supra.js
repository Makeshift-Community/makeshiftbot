const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_supra extends commando.Command {
	constructor(client) {
		super(client, {
			name: "supra",
			aliases: [
				"supra"
			],
			group: "memes-warframe",
			memberName: "supra",
			description: "Supra"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509435367292958/supra.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

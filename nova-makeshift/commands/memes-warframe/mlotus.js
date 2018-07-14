const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_mlotus extends commando.Command {
	constructor(client) {
		super(client, {
			name: "mlotus",
			aliases: [
				"mlotus",
				"m'lotus"
			],
			group: "memes-warframe",
			memberName: "m'lotus",
			description: "M'Lotus \\*tips fedora\\*"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439753121284096000/limbo2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

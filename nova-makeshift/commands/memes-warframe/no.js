const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_no extends commando.Command {
	constructor(client) {
		super(client, {
			name: "no",
			aliases: [
				"no",
				"scottno"
			],
			group: "memes-warframe",
			memberName: "no",
			description: "No."
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508485403574273/no.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

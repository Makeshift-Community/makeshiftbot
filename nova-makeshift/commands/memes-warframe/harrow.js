const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_harrow extends commando.Command {
	constructor(client) {
		super(client, {
			name: "harrow",
			aliases: [
				"harrow",
				"harrowchassis",
			],
			group: "memes-warframe",
			memberName: "harrow",
			description: "Harrow chassis"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506581357592576/harrow.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

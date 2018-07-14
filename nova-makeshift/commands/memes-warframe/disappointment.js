const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_disappointment extends commando.Command {
	constructor(client) {
		super(client, {
			name: "disappointment",
			aliases: [
				"disappointment"
			],
			group: "memes-warframe",
			memberName: "disappointment",
			description: "Baro Ki\'Teer"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503858973278208/disappointment.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

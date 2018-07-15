const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_makeshift_duke extends commando.Command {
	constructor(client) {
		super(client, {
			name: "duke",
			aliases: [
				"duke",
				"dark_prince_duke",
				"sr-ahmed.duke"
			],
			group: "memes-makeshift",
			memberName: "duke",
			description: "Duke"
		});
	}

	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495672941772820/duke.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
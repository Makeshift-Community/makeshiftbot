const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_generic_fuk extends commando.Command {
	constructor(client) {
		super(client, {
			name: "fuk",
			aliases: [
				"fuk"
			],
			group: "memes-generic",
			memberName: "fuk",
			description: "When trusting a fart goes wrong"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439493096548466698/fuk.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

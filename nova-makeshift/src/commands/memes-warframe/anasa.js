const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_anasa extends commando.Command {
	constructor(client) {
		super(client, {
			name: "anasa",
			aliases: [
				"anasa",
				"sortiereward"
			],
			group: "memes-warframe",
			memberName: "anasa",
			description: "Anasa"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439502791145422848/anasa.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

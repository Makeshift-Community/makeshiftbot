const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_lewd extends commando.Command {
	constructor(client) {
		super(client, {
			name: "lewd",
			aliases: [
				"lewd"
			],
			group: "memes-warframe",
			memberName: "lewd",
			description: "LEWD"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439507410504384512/lewd.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

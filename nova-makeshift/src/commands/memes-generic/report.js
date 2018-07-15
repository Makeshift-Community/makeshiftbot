const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_generic_report extends commando.Command {
	constructor(client) {
		super(client, {
			name: "report",
			aliases: [
				"report"
			],
			group: "memes-generic",
			memberName: "report",
			description: "NKs favorite button"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495126167846912/report.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

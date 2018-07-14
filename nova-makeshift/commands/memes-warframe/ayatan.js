const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_ayatan extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ayatan",
			aliases: [
				"ayatan"
			],
			group: "memes-warframe",
			memberName: "ayatan",
			description: "Ayatan"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439931595042979840/ayatan.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

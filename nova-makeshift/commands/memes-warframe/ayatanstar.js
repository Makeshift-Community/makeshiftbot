const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_ayatanstar extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ayatanstar",
			aliases: [
				"ayatanstar",
				"ayatanstars",
				"amberstar",
				"amber",
				"ayatanamberstar"
			],
			group: "memes-warframe",
			memberName: "ayatanstar",
			description: "Ayatan Amber Star"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439753991476346880/ayatanstars.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

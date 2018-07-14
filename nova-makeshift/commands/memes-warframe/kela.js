const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_kela extends commando.Command {
	constructor(client) {
		super(client, {
			name: "kela",
			aliases: [
				"kela",
				"keladethaym"
			],
			group: "memes-warframe",
			memberName: "kela",
			description: "Kela De Thaym"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439752799602081805/kela.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

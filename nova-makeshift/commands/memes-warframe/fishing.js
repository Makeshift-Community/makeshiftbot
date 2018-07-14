const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_fishing extends commando.Command {
	constructor(client) {
		super(client, {
			name: "fishing",
			aliases: [
				"fishing",
				"norg",
				"murkray"
			],
			group: "memes-warframe",
			memberName: "fishing",
			description: "Fishing"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439746051810000896/norg.jpg"}}}
			//Image of REEEE Tenno do this shit
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

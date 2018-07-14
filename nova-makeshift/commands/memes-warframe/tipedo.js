const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_tipedo extends commando.Command {
	constructor(client) {
		super(client, {
			name: "tipedo",
			aliases: [
				"tipedo"
			],
			group: "memes-warframe",
			memberName: "tipedo",
			description: "Tipedo"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509474454274048/tipedo.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

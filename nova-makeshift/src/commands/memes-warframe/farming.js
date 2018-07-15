const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_farming extends commando.Command {
	constructor(client) {
		super(client, {
			name: "farming",
			aliases: [
				"farming",
				"farmingsimulator"
			],
			group: "memes-warframe",
			memberName: "farming",
			description: "Farming"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506265442615296/farming.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_founder extends commando.Command {
	constructor(client) {
		super(client, {
			name: "founder",
			aliases: [
				"founder",
				"founders",
				"elitism"
			],
			group: "memes-warframe",
			memberName: "founder",
			description: "Founders"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506505365061632/founder.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

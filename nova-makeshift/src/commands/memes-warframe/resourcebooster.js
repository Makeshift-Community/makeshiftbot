const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_resourcebooster extends commando.Command {
	constructor(client) {
		super(client, {
			name: "resourcebooster",
			aliases: [
				"resourcebooster",
				"booster",
				"kuva",
				"kuvabooster"
			],
			group: "memes-warframe",
			memberName: "resourcebooster",
			description: "Resource booster"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508993451491341/resourcebooster.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_nezha extends commando.Command {
	constructor(client) {
		super(client, {
			name: "nezha",
			aliases: [
				"nezha"
			],
			group: "memes-warframe",
			memberName: "nezha",
			description: "Nezha"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508433255792645/nezha.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

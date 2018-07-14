const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_warbros extends commando.Command {
	constructor(client) {
		super(client, {
			name: "warbros",
			aliases: [
				"warbros"
			],
			group: "memes-warframe",
			memberName: "warbros",
			description: "-"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509861567561728/warbros1.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509915581808640/warbros2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

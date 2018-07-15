const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_trinity extends commando.Command {
	constructor(client) {
		super(client, {
			name: "trinity",
			aliases: [
				"trinity"
			],
			group: "memes-warframe",
			memberName: "trinity",
			description: "Trinity"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509659607367712/trinity.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439932332833636353/trinity2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

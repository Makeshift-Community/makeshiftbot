const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_dread extends commando.Command {
	constructor(client) {
		super(client, {
			name: "dread",
			aliases: [
				"dread"
			],
			group: "memes-warframe",
			memberName: "dread",
			description: "Dread"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439504002741305354/dread.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_unairu extends commando.Command {
	constructor(client) {
		super(client, {
			name: "unairu",
			aliases: [
				"unairu",
				"unairulens",
				"lens"
			],
			group: "memes-warframe",
			memberName: "unairu",
			description: "Unairu lens"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439738266644774912/unairu.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_tradechat extends commando.Command {
	constructor(client) {
		super(client, {
			name: "tradechat",
			aliases: [
				"tradechat"
			],
			group: "memes-warframe",
			memberName: "tradechat",
			description: "Trade chat"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509583451521025/tradechat.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

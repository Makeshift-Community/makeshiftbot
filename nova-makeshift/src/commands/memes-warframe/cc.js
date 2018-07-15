const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_cc extends commando.Command {
	constructor(client) {
		super(client, {
			name: "cc",
			aliases: [
				"cc"
			],
			group: "memes-warframe",
			memberName: "cc",
			description: "Conclave"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503344982294570/cc.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

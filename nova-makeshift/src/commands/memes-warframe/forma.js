const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_forma extends commando.Command {
	constructor(client) {
		super(client, {
			name: "forma",
			aliases: [
				"forma"
			],
			group: "memes-warframe",
			memberName: "forma",
			description: "Forma"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506437761138688/forma.gif"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

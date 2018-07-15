const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_generic_never extends commando.Command {
	constructor(client) {
		super(client, {
			name: "never",
			aliases: [
				"never",
				"neverever"
			],
			group: "memes-generic",
			memberName: "never",
			description: "The date Mag gets buffed"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494447076474881/never.gif"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

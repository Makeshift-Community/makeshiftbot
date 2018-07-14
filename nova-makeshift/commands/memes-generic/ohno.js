const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_generic_ohno extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ohno",
			aliases: [
				"ohno",
				"retard",
				"retarded"
			],
			group: "memes-generic",
			memberName: "ohno",
			description: "OH NO (it\'s retarded)"
		});
	}

	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494709208154123/ohno.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
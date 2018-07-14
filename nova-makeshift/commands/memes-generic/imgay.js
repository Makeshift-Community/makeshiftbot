const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_generic_imgay extends commando.Command {
	constructor(client) {
		super(client, {
			name: "imgay",
			aliases: [
				"gay"
			],
			group: "memes-generic",
			memberName: "imgay",
			description: "I'm gay!"
		});
	}
	
	async run(msg, args) {
		var options = [
			"https://youtu.be/uwJSFYRtjHI"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
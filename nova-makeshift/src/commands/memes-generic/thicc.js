const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_generic_thicc extends commando.Command {
	constructor(client) {
		super(client, {
			name: "thicc",
			aliases: [
				"thicc"
			],
			group: "memes-generic",
			memberName: "thicc",
			description: "T H I C C"
		});
	}
	
	async run(msg, args) {
		var options = [
			"https://youtu.be/NEgwxGWgiIg"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
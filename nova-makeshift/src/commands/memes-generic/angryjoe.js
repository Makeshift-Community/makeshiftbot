const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_generic_angryjoe extends commando.Command {
	constructor(client) {
		super(client, {
			name: "angryjoe",
			aliases: [
				"joe",
				"angryjoe",
				"fuckeditup",
				"youdonefuckeditup",
				"youdunfuckeditup",
				"fucked"
			],
			group: "memes-generic",
			memberName: "angryjoe",
			description: "You done fucked it up!"
		});
	}
	
	async run(msg, args) {
		var options = [
			"https://youtu.be/6OxKDKJJoXI"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
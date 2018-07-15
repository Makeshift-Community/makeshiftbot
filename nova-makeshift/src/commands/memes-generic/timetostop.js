const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_generic_timetostop extends commando.Command {
	constructor(client) {
		super(client, {
			name: "timetostop",
			aliases: [
				"frank",
				"timetostop",
				"itstimetostop",
				"filthyfrank"
			],
			group: "memes-generic",
			memberName: "timetostop",
			description: "It's time to stop!"
		});
	}
	
	async run(msg, args) {
		var options = [
			"https://youtu.be/2k0SmqbBIpQ"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
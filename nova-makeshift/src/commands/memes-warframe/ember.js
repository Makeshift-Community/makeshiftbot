const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_ember2 extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ember",
			aliases: [
				"ember",
				"thisisfine",
				"fine"
			],
			group: "memes-warframe",
			memberName: "ember",
			description: "Ember"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439740633268355072/ember.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

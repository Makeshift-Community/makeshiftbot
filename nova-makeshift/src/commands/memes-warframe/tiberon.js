const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_tiberon extends commando.Command {
	constructor(client) {
		super(client, {
			name: "tiberon",
			aliases: [
				"tiberon",
				"toblerone",
				"tiberonprime",
				"tobleroneprime"
			],
			group: "memes-warframe",
			memberName: "tiberon",
			description: "Tiberon"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439740797907107840/tiberon.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

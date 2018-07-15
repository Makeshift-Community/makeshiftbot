const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_index extends commando.Command {
	constructor(client) {
		super(client, {
			name: "index",
			aliases: [
				"index",
				"neffy",
				"nefanyo",
				"anyo",
				"talkingshit"
			],
			group: "memes-warframe",
			memberName: "index",
			description: "The Index"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506874300235777/index.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

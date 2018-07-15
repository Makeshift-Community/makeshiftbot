const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_tylregor extends commando.Command {
	constructor(client) {
		super(client, {
			name: "tylregor",
			aliases: [
				"tylregor",
				"hammertime",
				"itshammertime",
				"it'shammertime"
			],
			group: "memes-warframe",
			memberName: "tylregor",
			description: "It's hammer time!"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439933105252466708/tylregor.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

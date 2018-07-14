const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_ev extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ev",
			aliases: [
				"ev",
				"energyvampire",
				"evpls"
			],
			group: "memes-warframe",
			memberName: "ev",
			description: "Energy Vampire"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439742996661927937/ev.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439752223929401344/ev2.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_sadnova extends commando.Command {
	constructor(client) {
		super(client, {
			name: "sadnova",
			aliases: [
				"sadnova",
				"violin",
				"sadviolin",
				"sad",
				"nova"
			],
			group: "memes-warframe",
			memberName: "sadnova",
			description: "Nova playing a violin"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {description: "Artwork by [u/ButItsOppositeDay](https://www.reddit.com/user/ButItsOppositeDay)", image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509183289884707/sadnova.gif"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};

const commando = require("discord.js-commando");

module.exports = class resources_reddit extends commando.Command {
	constructor(client) {
		super(client, {
			name: "reddit",
			aliases: [
				"subreddit",
				"reddit",
				"r/warframe",
				"r/wf",
				"subreddits",
				"reddits"
			],
			group: "resources",
			memberName: "reddit",
			description: "Warframe subreddits"
		});
	}

	async run(msg, args) {
		var out =
		"**Warframe subreddits: **\n" +
		"\n" + 
		"__r/Warframe__, the big one:\n" +
		"<https://www.reddit.com/r/Warframe/>\n" +
		"\n" + 
		"__r/MemeFrame__, has some good stuff:\n" +
		"<https://www.reddit.com/r/MemeFrame/>\n" +
		"\n" + 
		"__r/WarframeRunway__, some dank fashionframe:\n" +
		"<https://www.reddit.com/r/WarframeRunway/>\n";
		msg.react("✅");
		return msg.channel.send(out);
	}
};
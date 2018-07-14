const commando = require("discord.js-commando");

module.exports = class resources_raidstats extends commando.Command {
	constructor(client) {
		super(client, {
			name: "raidstats",
			aliases: [
				"christx",
				"trials.wf",
				"raidstats",
				"wf.christx.tw",
				"raidtrack",
				"raidtracker",
				"raidtrackers"
			],
			group: "resources",
			memberName: "raidstats",
			description: "Advanced raiding history trackers"
		});
	}

	async run(msg, args) {
		var out =
		"**Websites for tracking raid statistics:**\n" +
		"\n" +
		"__christx__, shows glitched raids:\n" +
		"*<http://wf.christx.tw/>*\n" +
		"\n" +
		"trials.wf, not as buggy and well-maintained:\n" +
		"*<https://trials.wf/>*";
		msg.react("✅");
		return msg.channel.send(out);
	}
};
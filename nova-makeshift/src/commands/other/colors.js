var { Command } = require("discord.js-commando");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "colors",
			aliases:
			[
				"colors",
				"color"
			],
			group: "other",
			memberName: "colors",
			description: "Changes your color.",
			details: "Change your color or list all available colors.",
			examples:
			[
				"colors",
				"color red"
			]
		});
	}

	async run(msg, args) {
		msg.react("✅");
		switch(args){
			case "red":
				break;
			case "lime":
			case "badass":
			case "bada55":
				break;
		}
		return;
	}
};

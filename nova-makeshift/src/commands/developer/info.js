const commando = require("discord.js-commando");
const info = require("./../../../package.json");
const stripIndents = require("common-tags").stripIndents;

module.exports = class command extends commando.Command {
	constructor(client) {
		super(client, {
			name: "info",
			aliases: [
				"info",
				"about"
			],
			memberName: "info",
			group: "developer",
			description: 'Displays information about this bot.'
		});
	}

	async run(msg, args) {
		var textInfo =
		stripIndents`__**Nova version ${info.version}**__
		${info.description}
		Programmed by ${info.author}.
		*Please issue the \`/help\` command if you wish to view a list of commands.*`;
		msg.react("✅");
		return msg.channel.send(textInfo);
	}
};
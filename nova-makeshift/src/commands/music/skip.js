const commando = require("discord.js-commando");
const oneLine = require('common-tags').oneLine;

module.exports = class music_skip extends commando.Command {
	constructor(client) {
		super(client, {
			name: "skip",
			aliases: [
				"skip"
			],
			group: "music",
			memberName: "skip",
			description: "Skip the current song",
			details: oneLine`Skips the current song and plays the next one.
			The song will be removed from the queue.`
		});
	}
	
	async run(msg, args) {
		return;
	}
};
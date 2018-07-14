const commando = require("discord.js-commando");
const oneLine = require('common-tags').oneLine;

module.exports = class music_stop extends commando.Command {
	constructor(client) {
		super(client, {
			name: "stop",
			aliases: [
				"stop"
			],
			group: "music",
			memberName: "stop",
			description: "Stop playback",
			details: oneLine`Stops all music playback immediately and clears the entire queue.
			Nova will leave the voice channel.`
		});
	}
	
	async run(msg, args) {
		return;
	}
};
const commando = require("discord.js-commando");
const oneLine = require('common-tags').oneLine;

module.exports = class music_play extends commando.Command {
	constructor(client) {
		super(client, {
			name: "play",
			aliases: [
				"play",
				"q"
			],
			group: "music",
			memberName: "play",
			description: "Play a song",
			details : oneLine`Use this command to play a song.
			It will perform a YouTube search and add the song to the queue.
			Nova will join your voice channel if there's no music playing currently.`
		});
	}
	
	async run(msg, args) {
		return;
	}
};
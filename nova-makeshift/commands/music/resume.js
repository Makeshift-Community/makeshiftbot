const commando = require("discord.js-commando");

module.exports = class music_resume extends commando.Command {
	constructor(client) {
		super(client, {
			name: "resume",
			aliases: [
				"resume",
				"unpause"
			],
			group: "music",
			memberName: "resume",
			description: "Resume playback",
			details: "Resumes playback after the music has been paused."
		});
	}
	
	async run(msg, args) {
		return;
	}
};
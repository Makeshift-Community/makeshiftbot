var ytdl = require("ytdl-core");
var yts = require("youtube-search");
var googleApiToken = require("./../../../token.json").googleAPI;

module.exports = function (client, channel_text_music_id) {
	let queues = {};
	client
		.on("message", (msg) => {
			if((msg.content) && (msg.author.id !== client.user.id) && (msg.channel.id === channel_text_music_id)){//msg issued (and not issued by the bot itself)
				var command;//variable to save raw command in
				for(var prefix of [
					"/",
					("<@" + client.user.id + ">"),
					("<@!" + client.user.id + ">")
				]){
					if(msg.content.startsWith(prefix)){
						command = msg.content.substring((prefix.length), msg.content.length);
					}
				}
				if(!command){
					return;
				}
				//if command issued
				var commands = command.trim().toLowerCase().split(" ");
				var suffix = command.substring(commands[0].length).trim();
				switch (commands[0]) {
				case "play":
				case "q":{
					msg.react("🎶");
					return play(msg, suffix);
				}
				case "skip":{
					msg.react("🎶");
					return skip(msg, suffix);
				}
				case "queue":
				case "showqueue":
				case "sq":{
					msg.react("🎶");
					return queue(msg, suffix);
				}
				case "pause":
				case "p":{
					msg.react("🎶");
					return pause(msg, suffix);
				}
				case "resume":
				case "unpause":{
					msg.react("🎶");
					return resume(msg, suffix);
				}
				case "stop":{
					return leave(msg, suffix);
				}
				}
			}
		})
		/*.on("", (info) => {
			// Clear the queue.
			var queue = getQueue(msg.guild.id);
			queue.splice(0, queue.length);

			// End the stream and disconnect.
			voiceConnection.player.dispatcher.end();
			voiceConnection.disconnect();
		})*/;

	function getQueue(server) {
		// Check if global queues are enabled.
		server = "_"; // Change to global queue.
		if (!queues[server]) queues[server] = [];
		return queues[server];
	}

	function play(msg, suffix) {
		// Make sure the user is in a voice channel.
		if (msg.member.voiceChannel === undefined){
			msg.react("❌");
			return msg.channel.send("You're not in a voice channel.");
		}
		// Make sure the suffix exists.
		if (!suffix){
			msg.react("❌");
			return msg.channel.send("No video specified.");
		} 

		// Get the queue.
		var queue = getQueue(msg.guild.id);
		//msg.channel.send("Searched for: " + suffix);


		// Get the video information.
		msg.react("🎶");
		{
			yts(suffix, {maxResults: 5, part: "snippet", type: "video", key: googleApiToken}, function(err, results) {
				if(err) return console.error(err);
				var out = "";
				var index = 1;

				function removeFormattingSymbols(str){
					str = str.split("\\").join("\\\\");
					str = str.split("*").join("\\*");
					str = str.split("_").join("\\_");
					str = str.split("~").join("\\~");
					str = str.split("`").join("\\`");
					return str;
				}

				for(var result of results){
					out += "`" + index++ + ".` **" + removeFormattingSymbols(result.channelTitle) + "**: " + removeFormattingSymbols(result.title) + "\n";
				}

				out += "*Respond with the number of the song you wish to hear within 15 seconds to queue it up.*";
				/*
				var tests = ["rape","cancer","boost","pitch","high volume","alarm","hiredn4wired"];
				for(test of tests){
					if(out.toLowerCase().match(test)){
						return msg.channel.send("ERROR");
					}
				}
				*/

				msg.channel.send(out)
					.then(response => {
						const filter = m => m.author === msg.author;
						msg.channel.awaitMessages(filter, {max: 1, time: 15000, errors: ["time"]})
							.then(collected => {
								var result = results[collected.first().content - 1];
								if(result !== undefined){
									//collected.first().react("🎶");
									response.react("🎶");
									msg.channel.send("🎵 Queued: " + result.title).then(() => {
										queue.push(result);
										// Play if only one element in the queue.
										if (queue.length === 1) executeQueue(msg, queue);
									}).catch(error => {console.log(error);});
								}
								else{
									response.react("❌");
								}
							})
							.catch(function(){
								response.react("❌");
							});
					});
			});
		}
	}

	function skip(msg, suffix) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection === null) {
			msg.react("❌");
			return msg.channel.send("No music being played.");
		}
		

		// Get the queue.
		const queue = getQueue(msg.guild.id);

		// Get the number to skip.
		let toSkip = 1; // Default 1.
		if (!isNaN(suffix) && parseInt(suffix) > 0) {
			toSkip = parseInt(suffix);
		}
		toSkip = Math.min(toSkip, queue.length);

		// Skip.
		queue.splice(0, toSkip - 1);

		// Resume and stop playing.
		const dispatcher = voiceConnection.player.dispatcher;
		if (voiceConnection.paused) dispatcher.resume();
		dispatcher.end();

		msg.react("🎶");
	}

	function queue(msg) {
		// Get the queue.
		const queue = getQueue(msg.guild.id);

		// Get the queue text.
		const text = queue.map((video, index) => (
			(index + 1) + ": " + video.title
		)).join("\n");

		// Get the status of the queue.
		let queueStatus = "⏹️ Stopped";
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection) {
			const dispatcher = voiceConnection.player.dispatcher;
			queueStatus = dispatcher.paused ? "⏸️ Paused" : "▶️ Playing";
		}

		// Send the queue and status.
		msg.react("🎶");
		msg.channel.send("Queue (" + queueStatus + "):\n" + text);
	}

	function pause(msg) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection === null) {
			msg.react("❌");
			return msg.channel.send("No music being played.");
		}
		// Pause.
		msg.react("🎶");
		msg.channel.send("⏸️ Playback paused.");
		const dispatcher = voiceConnection.player.dispatcher;
		if (!dispatcher.paused) dispatcher.pause();
	}

	function leave(msg) {

		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection === null){
			msg.react("❌");
			return msg.channel.send("I'm not in any channel!.");
		}
		msg.react("🎶");
		msg.channel.edit({topic:"⏯️ Playback finished."}, "Song changed");
		// Clear the queue.
		const queue = getQueue(msg.guild.id);
		queue.splice(0, queue.length);

		// End the stream and disconnect.
		voiceConnection.player.dispatcher.end();
		voiceConnection.disconnect();
	}

	function resume(msg) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection === null) {
			msg.react("❌");
			return msg.channel.send("No music being played.");
		}

		// Resume.
		msg.react("🎶");
		msg.channel.send("▶️ Playback resumed.");
		const dispatcher = voiceConnection.player.dispatcher;
		if (dispatcher.paused) dispatcher.resume();
	}

	function executeQueue(msg, queue) {
		// If the queue is empty, finish.
		if (queue.length === 0) {
			msg.channel.edit({topic:"⏯️ Playback finished."}, "Song changed");

			// Leave the voice channel.
			const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
			if (voiceConnection) return voiceConnection.disconnect();
		}

		new Promise((resolve, reject) => {
			// Join the voice channel if not already in one.
			const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
			if (voiceConnection === null) {
				// Check if the user is in a voice channel.
				if (msg.member.voiceChannel) {
					msg.member.voiceChannel.join().then(connection => {
						resolve(connection);
					}).catch((error) => {
						console.log(error);
					});
				} else {
					// Otherwise, clear the queue and do nothing.
					queue.splice(0, queue.length);
					reject();
				}
			} else {
				
				resolve(voiceConnection);
			}
		}).then(connection => {
			// Get the first item in the queue.
			const video = queue[0];
			// Play the video.
			//msg.channel.send("▶️ Now Playing: " + video.title).then(() => {
			msg.channel.edit({topic:("▶️ Now Playing: " + video.title)}, "Song changed").then(() => {
				let dispatcher = connection.playStream(ytdl(video.link, {filter: "audioonly"}), {volume: 0.1});

				connection.on("error", (error) => {
					// Skip to the next song.
					console.log(error);
					queue.shift();
					executeQueue(msg, queue);
				});

				dispatcher.on("error", (error) => {
					// Skip to the next song.
					console.log(error);
					queue.shift();
					executeQueue(msg, queue);
				});

				dispatcher.on("end", () => {
					// Wait a second.
					setTimeout(() => {
						if (queue.length > 0) {
							// Remove the song from the queue.
							queue.shift();
							// Play the next song in the queue.
							executeQueue(msg, queue);
						}
					}, 500);
				});
			}).catch((error) => {
				console.log(error);
			});
		}).catch((error) => {
			console.log(error);
		});
	}
};

module.exports = function(bot, channel_text_builds_id){
	bot.on("message", (message)=>{
		if((message.author.id !== bot.user.id) && (message.channel.id === channel_text_builds_id)){//message issued (and not issued by the bot itself)
			if(message.attachments.size != 0){
				var items = require("./resources/allitems.json");
				for (var item of items){
					if(message.content.toLowerCase().match(item)) return;
				}
				var specials = ["mag","war","bo"];
				for (var special of specials){
					if(message.content.toLowerCase().match(special)) return;
				}
			}
			message.delete();
			message.channel.send(`This channel is only for final builds with a proper description, ${message.author}.\nCheck the pins for additional information.`).then((response) => {
				response.delete(20000);
				console.log("Tagged message " + response.id + " as 'missing description'");
			});
		}
	});
};

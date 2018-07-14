module.exports = function(bot){
	bot.on("message", (message)=>{
		if((message.author.id !== bot.user.id)){//message issued (and not issued by the bot itself)
			if(message.content.toLowerCase().endsWith("soon")){ //.replace(/\s/g,'') remove all whitespace
				message.react("™")
					.then(function(){
						console.log("SOONTM 01: PASS");
					})
					.catch(function(){
						console.error("SOONTM 01: FAIL");
					});
			}
		}
	});
};

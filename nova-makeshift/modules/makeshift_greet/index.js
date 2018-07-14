module.exports = function(bot, channel){
	bot.on("guildMemberAdd", (guildMember)=>{
		bot.channels.get(channel).send(`Welcome to the Makeshift clan Discord, ${guildMember.user}!`)
			.then(function(){
				console.log("GREET 01: PASS");
			})
			.catch(function(){
				console.error("GREET 01: FAIL");
			});
	});
};

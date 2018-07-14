module.exports = function(bot){
	bot.on("message", (message)=>{
		if(message.member){//message from member
			if(message.member.roles.get("440418241773305866"))
			{
				return;
			}
			let roles = require("./resources/roles.json");
			let colors = require("./resources/colors.json");
			//figure out old role
			var oldRole;
			for(var role in roles){
				if(message.member.roles.get(roles[role])){
					oldRole = roles[role]; //remove old role
				}
			}
			//figure out new role
			var newRole;
			for (var warframe in colors){
				if(message.content.toLowerCase().match(warframe)){ //.replace(/\s/g,'') remove all whitespace
					console.log(`PRISM 01: DEBG - Word "${warframe}" detected.`);
					newRole = roles[colors[warframe]];
					if(newRole != oldRole){
						console.log(`PRISM 02: DEBG - Role "${message.guild.roles.get(newRole).name}" has not yet been applied.`);
						message.member.addRole(newRole)
							.then(function(){
								console.log(`PRISM 03: PASS - Role "${message.guild.roles.get(newRole).name}" has been applied.`);
								message.member.removeRole(oldRole)
									.then(function(){
										console.log(`PRISM 04: PASS - Role "${message.guild.roles.get(oldRole).name}" has been removed.`);
									})
									.catch(function(){
										console.log(`PRISM 04: PASS - Role "${message.guild.roles.get(oldRole).name}" could not be removed.`);
									});
							})
							.catch(function(){
								console.log(`PRISM 03: FAIL - Role "${message.guild.roles.get(newRole).name}" could not be applied.`);
							}); //give new role
						return;
					}
				}
			}
		}
	});
};

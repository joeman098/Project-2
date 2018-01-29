var db = require("../models");


module.exports = function(app) {
    var Discord = require("discord.js");
    var discordSettings = require("../config/discordSettings.json");
    var bot = new Discord.Client({disableEveryone:true});
    console.log("This is ready!!");
    
    
    bot.on("ready", function(){
        console.log(`Bot is Ready ${bot.user.username}`);
    
         bot.generateInvite(['ADMINISTRATOR'])
      .then(function(link) {
        // console.log(`Generated bot invite link: ${link}`);
      });
    
    });



    
    bot.on('message', function(message) {
        if (message.channel.isPrivate) {
                console.log(`(Private) ${message.member.name}: ${message.content}`);
        } else {
                console.log(`(${message.guild.name} / ${message.channel.name}) ${message.member.user.username}: ${message.content}`);
               
                replyDiscord();
                // app.post('/api/feed',urlencodedParser, function (req, res) {
                    db.Feed.create({
                        guild: message.guild.name,
                        channel: message.channel.name,
                        username:message.member.user.username,
                        message:message.content
        
                    }).then(function(dbFeed) {
                        // console.log(dbFeed);
                      
                        

                    
                      });
                // });
                
    
        }
        function replyDiscord(){
            if(message.author.bot) return;
            message.reply('Hey, I\'m a reply!')
            .then(msg => console.log(`Sent a reply to ${msg.author}`) )
            .catch(console.error);
            return;
    
        }
     
    
    
    
    });

 
    
 
      bot.login(discordSettings.token);

}



 

  

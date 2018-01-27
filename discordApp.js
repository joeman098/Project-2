var Discord = require("discord.js");
var discordSettings = require("./config/discordSettings.json");
var bot = new Discord.Client({disableEveryone:true});
console.log("This is ready");


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
    }
});




  bot.login(discordSettings.token);
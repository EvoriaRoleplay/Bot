const Discord = require('discord.js');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000))


var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name:'Evoria | /help', type: 0}});
    console.log("Bot Ready !");
});

bot.login(process.env.TOCKEN);

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#2B01FE')
            .addField("Commande d'aide!", "  /help : Affiche les commandes du bot !")
            .addField("Commands", "/serveur : Ip du serveur \n/collection : Collection serveur \n/forum : Pour le forum")
            .setFooter("Evoria Roleplay")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot: \n -help pour afficher les commandes");
        console.log('help');
    
    }


    if (message.content === prefix + "serveur"){
        var serveur_embed = new Discord.RichEmbed()
            .setColor('#FAF200')
            .addField("Information", " Ip : 5.83.161.118:27015")
            .setFooter("Evoria Roleplay")
        message.channel.sendEmbed(serveur_embed);
        console.log('serveur');
}

if (message.content === prefix + "collection"){
    var collection_embed = new Discord.RichEmbed()
        .setColor('#FA004B')
        .addField("Information", " Collection : https://steamcommunity.com/sharedfiles/filedetails/?id=1350571210")
        .setFooter("Evoria Roleplay")
    message.channel.sendEmbed(collection_embed);
    console.log('collection');
}

if (message.content === prefix + "forum"){
    var forum_embed = new Discord.RichEmbed()
        .setColor('#ADCF4F')
        .addField("Information", " Forum : http://evoria-rp.com/")
        .setFooter("Evoria Roleplay")
    message.channel.sendEmbed(forum_embed);
    console.log('forum');
}



if (message.content === "Salut"){
    message.reply("Salut, Sava. :)");
    console.log("salut");
}

if (message.content === "Bonjour"){
    message.reply("Bien le bonjour. :)");
    console.log("bonjour");
}

if (message.content === "slt"){
    message.reply("Salut, Sava. :)");
    console.log("slt");
}

if (message.content === "bjr"){
    message.reply("Bien le bonjour. :)");
    console.log("bjr");
}

if (message.content === "Hey"){
    message.reply("Hey, Sava . :)");
    console.log("hey");
}

if (message.content === "tg"){
    message.reply("Tu va la fermer ta gueule ;)");
    console.log("tg");
}

});

const Discord = require("discord.js");

exports.run = async (message, client, args, lang, querryAsync, addEmoji) => {
        var result = await querryAsync(`SELECT * FROM user_profile WHERE discord_id = ${message.author.id}`);
        var profilEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} ${lang.profil.profil}`, message.author.displayAvatarURL())
        .setColor(0xd000ff)
        .addField(`${lang.profil.level}`, `${addEmoji("level")} ${lang.profil.level} : ${result[0].level}\n${addEmoji("exp")} ${lang.profil.exp} : ${result[0].exp}`, true)
        .addField(`${lang.profil.ressource}`, `${addEmoji("stone")} ${lang.profil.stone} : ${result[0].stone}\n${addEmoji("wood")} ${lang.profil.wood} : ${result[0].wood}\n${addEmoji("iron")} ${lang.profil.iron} : ${result[0].iron}\n${addEmoji("gold")} ${lang.profil.gold} : ${result[0].gold}`, true)
        .setTimestamp()
        .setFooter(lang.embed.footer);
        message.channel.send(profilEmbed);
}
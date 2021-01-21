const Discord = require("discord.js");
exports.run = async (message, client, args, lang, querryAsync, addEmoji, convertMsToDate) => {
    var cooldownResult = await querryAsync(`SELECT * FROM user_cooldown WHERE discord_id = ${message.author.id}`);
    if (cooldownResult[0].mine >= Date.now()) return message.reply(`${lang.mine.waiting} ${convertMsToDate(cooldownResult[0].mine - Date.now())}`);
    var random = Math.floor(Math.random() * 100);
    var ressource = random < 60 ? "stone" : random < 85 ? "iron" :  "gold";
    var profilResult = await querryAsync(`SELECT * FROM user_profile WHERE discord_id = ${message.author.id}`);
    var waintingTime = Math.floor(Math.random() * (4 * 60000)) + (3 * 60000)
    querryAsync(`UPDATE user_profile SET ${ressource} = ${await profilResult[0][ressource] + 1} WHERE discord_id = ${message.author.id}`);
    querryAsync(`UPDATE user_cooldown SET mine = ${Date.now() + waintingTime} WHERE discord_id = ${message.author.id}`);
    message.channel.send(`${lang.mine.mined} ${addEmoji(ressource)} **1** ${lang.profil[ressource]}\n${lang.mine.epuised} ${convertMsToDate(waintingTime)}.`);
}
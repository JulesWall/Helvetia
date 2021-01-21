const Discord = require("discord.js");
exports.run = async (message, client, args, lang, querryAsync, addEmoji) => {
    var page = 1;
    var buildEmbed = new Discord.MessageEmbed();
    var buildStats = require("../../data/build.json");
    var buildList = Object.keys(buildStats)
    var result = await querryAsync(`SELECT * FROM user_build WHERE discord_id = ${message.author.id}`);
    for (let i = 0; (i < page * 10) && (i < buildList.length); i++) {
        var stonePrice = buildStats[buildList[i]].baseCost.stone * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.stone) === 0 && buildStats[buildList[i]].baseCost.stone === 0 ? "Not showing" : buildStats[buildList[i]].baseCost.stone * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.stone) === 0 ? buildStats[buildList[i]].baseCost.stone : buildStats[buildList[i]].baseCost.stone * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.stone);
        var woodPrice = buildStats[buildList[i]].baseCost.wood * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.wood) === 0 && buildStats[buildList[i]].baseCost.wood === 0 ? "Not showing" : buildStats[buildList[i]].baseCost.wood * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.wood) === 0 ? buildStats[buildList[i]].baseCost.wood : buildStats[buildList[i]].baseCost.wood * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.wood);
        var ironPrice = buildStats[buildList[i]].baseCost.iron * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.iron) === 0 && buildStats[buildList[i]].baseCost.iron === 0 ? "Not showing" : buildStats[buildList[i]].baseCost.iron * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.iron) === 0 ? buildStats[buildList[i]].baseCost.iron : buildStats[buildList[i]].baseCost.iron * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.iron);
        var goldPrice = buildStats[buildList[i]].baseCost.gold * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.gold) === 0 && buildStats[buildList[i]].baseCost.gold === 0 ? "Not showing" : buildStats[buildList[i]].baseCost.gold * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.gold) === 0 ? buildStats[buildList[i]].baseCost.gold : buildStats[buildList[i]].baseCost.gold * (result[0][buildList[i]] * buildStats[buildList[i]].multiplicator.gold);
        buildEmbed.addField(`${i + 1} - ${lang.build[buildList[i]]}`, `${stonePrice === "Not showing" ? '' : `${addEmoji("stone")} ${lang.profil.stone} : ${stonePrice}\n`}${woodPrice === "Not showing" ? '' : `${addEmoji("wood")} ${lang.profil.wood} : ${woodPrice}\n`}${ironPrice === "Not showing" ? '' : `${addEmoji("iron")} ${lang.profil.iron} : ${ironPrice}\n`}${goldPrice === "Not showing" ? '' : `${addEmoji("gold")} ${lang.profil.gold} : ${goldPrice}`}`)
    }
    message.channel.send(buildEmbed)
}
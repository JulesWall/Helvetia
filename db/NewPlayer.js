const Discord = require("discord.js");

module.exports = function (message, client) {
    message.channel.send('Oui oui ça marche');
    require("./Registration.js").NewPlayer(message.author.id, message.author.username, null, "male", "Mine", "OB")
}
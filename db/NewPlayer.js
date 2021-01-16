const Discord = require("discord.js");

module.exports = function (message, client) {
    message.channel.send(`Yeah! You are now register! (You can change bot language with \`!lang\`)`);
    require("./Registration.js").NewPlayer(message)
}
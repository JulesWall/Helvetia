
const Discord = require("discord.js"); // Voir index.js

exports.run = async (message, client, args, lang) => { // Remplace def __init__ / class Ping()
        var now = Date.now(); // Permet d'avoir la date en ms (timestamp), équivalent du time.monotonic()
        message.channel.send(lang.ping.latency).then((msg) => { // Envoies le message et le garde pour plus tard
            var after = Date.now() - now; // Calcul le ping
            msg.edit(`${lang.ping.latency} ${after} ms`); // Edit le message
        })
}
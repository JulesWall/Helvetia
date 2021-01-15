const Discord = require("discord.js"); // Voir ./index.js
require("dotenv").config(); // Voir ./index.js
// import asyncio

// from config import *
// from commands import commands
// from db.Registration import *
// from db.function.is_player import *
// from function.Text import *

// class Engine():

module.exports = function(message, client) {
    if (message.content[0] !== process.env.PREFIX) return; // Regarde si y a le prefix
    if (process.env.is_maintenance && process.env.MAINTENANCE_AUTHORIZE.split(/ +/g).includes(message.author.id) !== true) return; // Check si on est en maintenance
    if (message.channel.type === "dm") return; // Check si le message est en dm
    if (message.author.bot) return; // Check si l'user est un bot
    if (message.content.length === 1) return; // Check si le message est juste le prefix
    var requete = message.content.replace(process.env.PREFIX, "").split(" ")[0]; // Enlève le prefix du message afin de garder que le nom de la commande
    var commandFilter = client.commands.keyArray().filter(command => command.toLowerCase().startsWith(requete.toLowerCase()) === true); // Filtre les noms de commandes en regardant si ça commence par la demande de l'user
    if (commandFilter.length >= 2) return message.reply(Lang.ManyCommandsFind + "```" + commandFilter.join(", ") + "```").then((BotMessage) => { // Si plusieurs commandes trouvées on le dit
        BotMessage.delete({timeout:15000}); // Delete le message du bot après 15 secondes
        message.delete({timeout:15000}); // Delete le message de l'user après 15 secondes
    });
    const cmd = client.commands.get(commandFilter.join("")); // Get le code de la commande
    if (!cmd) return; // Si pas de commande return
    const args = message.content.split(" "); // Crée les arguments
    const lang = require("./lang/fr.json"); // Get la lang
    cmd.run(message, client, args, lang); // Run la commande
};
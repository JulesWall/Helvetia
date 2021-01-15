const Discord = require("discord.js"); // Remplace le import Discord, const créer une variable constante (valeur non changeable) qui permet de stocker la lib discord.js
require('dotenv').config(); // Permet d'importer et de configurer dotinv, qui permet de gérer les variables d'environnement en js (.env)
const fs = require("fs"); // Permet d'import fs (file system), permet de manipuler les dossier/fichiers
const Enmap = require("enmap"); // Permet d'import enmap, permet de créer des maps, variable inter fichiers
require("colors"); // Permet d'importer colors, permet d'afficher de la couleur dans la console
// from Engine import *

const client = new Discord.Client(); // Remplace client = discord.Client()

client.on('ready', async() => { // En général un .on signifie qu'on déclare un event, le 'ready' permet de préciser l'event
    console.log(`We have logged in as ${client.users.cache.size}`) // Remplace le print
})    


    
client.commands = new Enmap(); // Crée une map de commande / Command's maping

fs.readdir("./command/", (err, folders) => { // Lis le dossier command
    if (err) return console.error(err["red"]); // Si y a une erreur, l'afficher en rouge (possible grace au require("colors"))
    folders.forEach(folder => { // Pour tous les dossiers faire :
        fs.readdir("./command/" + folder + "/", (err, files) =>{ // Lis le dossier dans command
            files.forEach(file => { // Lis les fichiers présent dans le dossier susdit
                if (!file.endsWith(".js")) return; // Si le dossier n'est pas en .js, on l'ignore
                let props = require(`./command/${folder}/${file}`); // On import le fichier
                let commandName = file.replace(".js", ""); // On prend le nom du fichier en supprimant le .js final afin d'obtenir le nom de la commande
                console.log(`${`[${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}]`["yellow"]} ${`Chargement de la commande :`["cyan"]} ${`${commandName}`["green"]["underline"]} ${`en cours`["cyan"]}.`); // Affiche la date (heure:minutes:secondes), ainsi que la commande que est en train de se charger, avec de la couleur
                client.commands.set(commandName, props); // Associe la fonction de la commande avec le nom de cette dernière dans la maps
            });
        });
    });
});

client.on('message', message => require("./engine.js")(message, client))

client.login(process.env.TOKEN) // Equivalent du client.run()

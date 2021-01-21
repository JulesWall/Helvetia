const mysql = require("mysql");
require("dotenv").config();
const querryAsync = require("./function/querryAsync.js");

module.exports = {
    NewPlayer: function (message, lang = "fr") {

        var pseudo = message.author.username;

        // anti-pseudo de merde by ttd
        if (pseudo.includes("'")) pseudo = pseudo.replace("'","''");

        querryAsync(`INSERT INTO user_info (pseudo, discord_id, lang) VALUES\
        ('${pseudo}', ${message.author.id},'${lang}')`)
        querryAsync(`INSERT INTO user_profile (discord_id) VALUES\
        (${message.author.id})`)
        querryAsync(`INSERT INTO user_build (discord_id) VALUES\
        (${message.author.id})`)
        querryAsync(`INSERT INTO user_cooldown (discord_id) VALUES\
        (${message.author.id})`)
    }
}
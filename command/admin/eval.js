const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");
const Enmap = require("enmap");
const util = require("util");
const CleanText = function (text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

exports.run = async (message, client, args, lang, querryAsync) => {
        if (process.env.OWNER.split(" ").includes(message.author.id))
        args.shift();
        try {
            var code = args.join(" ");
            let evaled = eval(await code);
            if (typeof evaled !== "string");
            evaled = require("util").inspect(await evaled);
            if (CleanText(await evaled).includes(process.env.TOKEN)) return message.channel.send("T'as cru tu pouvais avoir le token ? Mdr");
            if (CleanText(await evaled).includes("}") && CleanText(await evaled).includes("Packet") && CleanText(await evaled).includes("Row")) message.channel.send(CleanText(await evaled), {code:"xl"});
            else message.channel.send(CleanText(await evaled));
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${CleanText(err)}\n\`\`\``);
        };
}

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.auto = new Discord.Collection();
const config = require("./config.json");

const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const autofiles = fs.readdirSync('./auto').filter(file => file.endsWith('.js'));
const prefix = '!';

for (const file of commandfiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of autofiles) {
    const auto = require(`./auto/${file}`);
    client.auto.set(auto.name, auto);
}


client.on("ready", () => {
    console.log("startin up");
    // client.channels.cache.get("575493001825222660").send("Hi its me Lucas");
});

client.on('message', (message) => {
    // const replacer = new RegExp(`\\*`, 'g');
    var text = message.content.toLowerCase().replace(/\*/g, '');
    // console.log(text);
    //for sheesh specifically
    if (text.slice(0, 2) === 'sh' && text.slice(text.length-2, text.length) === 'sh') {
        text = 'sheesh';
    }

    try {
        client.auto.get(text).execute(message);
    }
    catch (error) {
        // do nothing
    }
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('write the command properly dumbass');
    }
});

client.on("message", async (message) => {
    if (message.channel.id === "855088362906058764") {
        client.channels.cache.get("441753622397714435").send(message.content);
    }

    if (message.channel.id === "773017704374075465" && message.author.username !== "J-Klar") {
        message.delete();
    }

    if (message.content === "kill lucas") {
        client.destroy();
    }
});



// client.login(process.env.EG_TOKEN);
client.login(config.token);

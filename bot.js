const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598559038497882124")
setInterval(function() {
channel.send(`lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol lol`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
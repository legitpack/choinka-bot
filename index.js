const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
    client.user.setStatus('dnd')
});

client.on('message', (message) => {
    if(message.content == '--help') {
        message.channel.send('we pal stond gume :heart:');
    }
});

  client.on("guildCreate", guild => {
    console.log(`Dołączono do: ${guild.name} (id: ${guild.id}). Serwer posiada ${guild.memberCount} czlonkow!`);
    client.user.setActivity(`--help || Servers: ${client.guilds.size}`);
  });
  
  client.on("guildDelete", guild => {
    console.log(`Wyrzucono mnie z: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`--help || Servers: ${client.guilds.size}`)
  });

client.login("NDYzNjE1NzYwMjAwMjM3MDU4.DhzP2w.m2JujSvnpdx4PR01xQsdSX8MX8k")

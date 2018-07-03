const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            name: 'HIMC.PL',
            type: "STREAMING",
            url: "https://www.twitch.tv/kissing_my_depp3881"
        }
    });
});

client.login("NDYzNjgzNDE3NjUzOTAzMzcw.Dhz-XA.Zo6I56DRs0cpI7JUgiHH8ZyoWFE");

// Require the necessary discord.js classes
const Discord = require('discord.js');
const { token } = require('./credentials.json'); // before setup make sure credentials.json has been filled in
// Create a new client instance
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS","DIRECT_MESSAGES","GUILD_MESSAGES"] })

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity("supporting the battle"); 
});

client.on('guildMemberAdd', member => {
  const channel = client.channels.cache.find(channel => channel.name === "general")  // channel can be choosen via name
  channel.send("Welcome to the server "+member.displayName)
  const myGuild = client.guilds.cache.get('<Insert server ID>'); //enter the server ID here for the guild retrival
  const myRole = myGuild.roles.cache.find(role => role.name === '<role>'); // the role can be found via name
  member.roles.add(myRole);
});

client.login(token);

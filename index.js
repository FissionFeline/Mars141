// Require the necessary discord.js classes
const Discord = require('discord.js');
const { token } = require('./credentials.json');
// Create a new client instance
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS","DIRECT_MESSAGES","GUILD_MESSAGES"] })

client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity("supporting the battle"); 
});

client.on('guildMemberAdd', member => {
  const channel = client.channels.cache.find(channel => channel.name === "general")
  channel.send("Welcome to the server "+member.displayName + "\nCome and greet us and when youre ready join our subreddit \nhttps://www.reddit.com/r/anti_zoo_crusaders/")
  const myGuild = client.guilds.cache.get('881734698399846411');
  const myRole = myGuild.roles.cache.find(role => role.name === 'crusader');
  member.roles.add(myRole);
});

client.login(token);
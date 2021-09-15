// Require the necessary discord.js classes
const Discord = require('discord.js');
const { token } = require('./credentials.json');
const newUsers = [];
// Create a new client instance
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS"] })

const Addrole = (member) => {
  var role= member.guild.roles.cache.find(role => role.id === "883020079086854165");
  member.roles.add(role);
}

client.once('ready', () => {
  client.user.setStatus("Supporting the allies")
	console.log('Ready!');
});

client.on('guildMemberAdd', member => {
  const channel = client.channels.cache.find(channel => channel.name === "general")
  channel.send("Welcome to the server "+member.displayName)
  Addrole(member);
});

client.login(token);
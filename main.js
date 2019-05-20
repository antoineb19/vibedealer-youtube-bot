/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  console.log(message.content);
  text = message.content;
  if(text.indexOf("https://www.youtube.com") != -1) {
    link = text.substring(text.indexOf("https://www.youtube.com")).substring(0, text.substring(text.indexOf("https://www.youtube.com")).indexOf(' '));
    console.log(link);
  }
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('<token>');

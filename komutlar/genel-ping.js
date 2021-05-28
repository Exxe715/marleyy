const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const marley = new Discord.MessageEmbed()
    .setColor("BLUE")
    .addField(`Ping`, client.ws.ping+"ms")
.setFooter(client.user.username, client.user.avatarURL())

  message.channel.send(marley);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "ping",
  description: "ping",
  usage: "ping"
};
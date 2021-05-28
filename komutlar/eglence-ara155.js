const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {

const marley = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("<a:unlem:833434674050236436> **Eğlence Komutları Özel Mesajlarda Kullanılamaz**","**----------------------------------------------------------**");

return message.author.send(marley);
 
}
  if (message.channel.type !== "dm") {

const marleybot = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Polis Marley Geliyor DA Dİ !!!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif");

return message.channel.send(marleybot);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ara155",
  description: "matador",
  usage: "ara155"
};

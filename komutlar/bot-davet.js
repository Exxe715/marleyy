const MarleyDiscord = require('discord.js');
const MarleyClient = new MarleyDiscord.Client();
exports.run = (client, message) => {
  const MarleyEmbed = new MarleyDiscord.MessageEmbed();
  MarleyEmbed.setColor(0x36393F)
  MarleyEmbed.setDescription(` Marley'i davet etmek için [Davet Et #TIKLA](https://discord.com/oauth2/authorize?client_id=832691675201667092&scope=bot&permissions=8)`)
  message.channel.send(MarleyEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['marleydavet'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
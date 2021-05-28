const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun adını yazınız ...**  <a:siyah:833434724760289361>`)
  const marley = `https://habbofont.net/font/battlebanzai/${yazi}.gif`
  .replace(' ', '+')

  
  const marleyembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RED")
  .setImage(marley)
  .setFooter('Logo Oluşturuldu')
  message.channel.send(marleyembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['text-photo ',' text-photo'],
    permLevel: 0
}

exports.help = {
    name: 'anime',
    description: 'Dynamically translates the text you type.',
    usage: 'anime'
}
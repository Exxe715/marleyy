const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun adını yazınız ...**  <a:siyah:833434724760289361>`)
  const marley = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
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
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'flame',
    description: 'Changes your text to the flame logo.',
    usage: 'flame'
}
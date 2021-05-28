const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun adını yazınız ...**  <a:siyah:833434724760289361>`)
  const marley = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=fire-logo&text=${yazi}`
  .replace(' ', '+')

  
  const marleyembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RED")
  .setImage(marley)
  .setFooter('Flaming Logo Created')
  message.channel.send(marleyembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['flame2'],
    permLevel: 0
}

exports.help = {
    name: 'flame-2',
    description: 'It changes your text to the flame logo.',
    usage: 'flame2'
}
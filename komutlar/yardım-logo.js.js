const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const marleyyardım = new Discord.MessageEmbed()
.setAuthor(`Marley Eklenti Sistemi`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:tac:833436703703302164> Marley botumuzu eklemek için \`!!davet\` yazabilirsiniz.`)  
.addField(`__Logo Komutlar__`,`<a:beyaz:833434701762789376> \`!!flame\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:siyah:833434724760289361> \`!!flame-2\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:mavi:833434714810351627> \`!!gold\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:beyaz:833434701762789376> \`!!gold2\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:siyah:833434724760289361> \`!!anime\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:mavi:833434714810351627> \`!!rainbow\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:beyaz:833434701762789376> \`!!cool\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:siyah:833434724760289361> \`!!google\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:mavi:833434714810351627> \`!!pink\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:beyaz:833434701762789376> \`!!neon\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:siyah:833434724760289361> \`!!wood\` Logo Oluşturur`,true)
.addField(`__Logo Komutlar__`,`<a:mavi:833434714810351627> \`!!gamer\` Logo Oluşturur`,true)
.addField(`__Bilgilendirme__`,`<a:unlem:833434674050236436> \`!!davet\` | Marley'i Sunucunuza Davet Edersiniz\n<a:unlem:833434674050236436> \`!!botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
  message.channel.send(marleyyardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["logoyardım"],
    permLevel: 0
}

exports.help = {
    name: "logo-yardım",
    description: "exxe",
    usage: "exxe"
}
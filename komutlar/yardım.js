const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const marleyyardım = new Discord.MessageEmbed()
.setAuthor(`Marley Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:tac:833436703703302164> Marley botumuzu eklemek için \`!!davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:beyaz:833434701762789376> \`!!genel-yardım\``,true)
.addField(`__İnvite Komutları__`,`<a:mavi:833434714810351627> \`!!invite-yardım\` `,true)
.addField(`__Müzik Komutları__`,`<a:siyah:833434724760289361> \`!!müzik-yardım\`  `,true)
.addField(`__Eğlence Komutları__`,`<a:beyaz:833434701762789376> \`!!eglence-yardım\` `,true)
.addField(`__Logo Komutları__`,`<a:mavi:833434714810351627> \`!!logo-yardım\`  `,true)
.addField(`__Nsfw Komutları__`,`<a:siyah:833434724760289361> \`!!nsfw-yardım\` `,true)
.addField(`__Bilgilendirme__`,`<a:unlem:833434674050236436> \`!!davet\` | Marley'i Sunucunuza Davet Edersiniz\n<a:unlem:833434674050236436> \`!!botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
  message.channel.send(marleyyardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "exxe",
    usage: "exxe"
}
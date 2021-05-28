const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const marleyyardım = new Discord.MessageEmbed()
.setAuthor(`Marley Nsfw Sistemi`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:tac:833436703703302164> Marley botumuzu eklemek için \`!!davet\` yazabilirsiniz.`)  
.addField(`__NSFW Komutlar__`,`<a:beyaz:833434701762789376> \`!!4k\` Kanala Nsfw Atar +18`,true)
.addField(`__NSFW Komutlar__`,`<a:mavi:833434714810351627> \`!!anal\` Kanala Nsfw Atar +18`,true)
.addField(`__NSFW Komutlar__`,`<a:siyah:833434724760289361> \`!!ass\` Kanala Nsfw Atar +18`,true)
.addField(`__NSFW Komutlar__`,`<a:beyaz:833434701762789376> \`!!cum\` Kanala Nsfw Atar +18`,true)
.addField(`__NSFW Komutlar__`,`<a:mavi:833434714810351627> \`!!hentai\` Kanala Nsfw Atar +18`,true)
.addField(`__Nsfw Komutları__`,`<a:siyah:833434724760289361> \`!!hkitsune\` Kanala Nsfw Atar +18`,true)
.addField(`__NSFW Komutlar__`,`<a:beyaz:833434701762789376> \`!!pgif\` Kanala Nsfw Atar +18`,true)
.addField(`__NSFW Komutlar__`,`<a:mavi:833434714810351627> \`!!wallpaper\` Kanala Nsfw Atar +18`,true)
.addField(`__NSFW Komutlar__`,`<a:siyah:833434724760289361> \`!!hentai-pussy\` Kanala Nsfw Atar +18`,true)
.addField(`__NSFW Komutlar__`,`<a:beyaz:833434701762789376> \`!!pussy\` Kanala Nsfw Atar +18`,true)
.addField(`__NSFW Komutlar__`,`<a:mavi:833434714810351627> \`!!solo\` Kanala Nsfw Atar +18`,true)
.addField(`__Nsfw Komutları__`,`<a:siyah:833434724760289361> \`!!thigh\` Kanala Nsfw Atar +18`,true)
.addField(`__Bilgilendirme__`,`<a:unlem:833434674050236436> \`!!davet\` | Marley'i Sunucunuza Davet Edersiniz\n<a:unlem:833434674050236436> \`!!botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
  message.channel.send(marleyyardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["nsfwyardım"],
    permLevel: 0
}

exports.help = {
    name: "nsfw-yardım",
    description: "exxe",
    usage: "exxe"
}
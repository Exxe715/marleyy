
const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const marleyyardım = new Discord.MessageEmbed()
.setColor('#ffd100') 
.setAuthor(`Marley Eğlence Sistemi`, client.user.avatarURL())
.setDescription(`<a:tac:833436703703302164> Marley botumuzu eklemek için \`!!davet\` yazabilirsiniz.`)
.addField(`__Kral Ol__`,`<a:beyaz:833434701762789376> \`!!kralol\` Kral Olursunuz.`,true)
.addField(`__Aduket Çek__`,`<a:siyah:833434724760289361> \`!!aduket-çek\` Aduket Çekersiniz.`,true)
.addField(`__Ara155__`,`<a:mavi:833434714810351627> \`!!ara155\` Polis'i Ararsınız (Ciddiye Almayınız)`,true)
.addField(`__Balık Tut__`,`<a:beyaz:833434701762789376> \`!!balıktut\` Balık Tutarsınız`,true)
.addField(`__Dünya Komutu__`,`<a:siyah:833434724760289361> \`!!dünya\` Dünya Gifi Atar.`,true)
.addField(`__Tokat At__`,`<a:mavi:833434714810351627> \`!!tokat-at\` Karşıdakine Tokat Atarsınız`,true)
.addField(`__Taksim Dayı__`,`<a:beyaz:833434701762789376> \`!!taksimdayı\` Taksim Dayı Gifi Atar`,true)
.addField(`__Yazı Tura__`,`<a:siyah:833434724760289361> \`!!yazıtura\` Yazı Tura Atar`,true)
.addField(`__FBİ__`,`<a:mavi:833434714810351627> \`!!fbi\` Evi FBİ'lar Basar`,true)
.addField(`__Bilgilendirme__`,`<a:unlem:833434674050236436> \`!!davet\` | Marley'i Sunucunuza Davet Edersiniz\n<a:unlem:833434674050236436> \`!!botbilgi\` | Botun İstatistiklerini Gösterir `)
.setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(marleyyardım) 
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["eglenceyardım","eğlenceyardım","eğlence-yardım"],
    permLevel: 0
}

exports.help = {
    name: "eglence-yardım",
    description: "exxe",
    usage: "exxe"
}
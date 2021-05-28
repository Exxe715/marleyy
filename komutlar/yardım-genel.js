const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const marleyyardım = new Discord.MessageEmbed()
.setAuthor(`Marley Nsfw Sistemi`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:tac:833436703703302164> Marley botumuzu eklemek için \`!!davet\` yazabilirsiniz.`)  
.addField(`__Avatar Komutu__`,`<a:beyaz:833434701762789376> \`!!avatar\` Avatarını Gösterir Gösterir`,true)
.addField(`__Sa-As Komutu__`,`<a:mavi:833434714810351627> \`!!sa-as\` Bir Kişi Sa Derse Otomatik Cevap As Diye Cevap Verir.`,true)
.addField(`__Oylama Komutuu__`,`<a:siyah:833434724760289361> \`!!oylama\` Oylama Yaparsınız..`,true)
.addField(`__Profil Komutu__`,`<a:beyaz:833434701762789376> \`!!profil\` Profiliniz Hakkında Bilgi Alırsınız.`,true)
.addField(`__Sil Komutu__`,`<a:mavi:833434714810351627> \`!!sil\` En Son Mesajları Silersiniz.`,true)
.addField(`__Sunucu Bilgi Komutuu__`,`<a:siyah:833434724760289361> \`!!sunucubilgi\` Sunucu Hakkında Bilgi Alırsınız`,true)
.addField(`__Say Komutu__`,`<a:beyaz:833434701762789376> \`!!say\` Sunucudaki Üye Sayısını Gösterir`,true)
.addField(`__Toplam Komut Komutu__`,`<a:mavi:833434714810351627> \`!!toplam-komut\` Bottaki Tüm Komutlrı Gösterir`,true)
.addField(`__Ping Komutuu__`,`<a:siyah:833434724760289361> \`!!ping\` Botun Pingini Görürsünüz.`,true)
.addField(`__Bilgilendirme__`,`<a:unlem:833434674050236436> \`!!davet\` | Marley'i Sunucunuza Davet Edersiniz\n<a:unlem:833434674050236436> \`!!botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
  message.channel.send(marleyyardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["genelyardım"],
    permLevel: 0
}

exports.help = {
    name: "genel-yardım",
    description: "exxe",
    usage: "exxe"
}
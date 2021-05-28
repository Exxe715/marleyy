const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const marleyyardım = new Discord.MessageEmbed()
.setAuthor(`Marley İnvite Sistemi`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:tac:833436703703302164> En Çok İnvite Yapanları Görmek İçin \`!!top\` Yazabilirsiniz.`)  
.addField(`__İnvite Komutları__`,`<a:siyah:833434724760289361> \`!!davet-kanal #kanal\` Davetler İçin Kanal Ayarlarsınız.`,true)
.addField(`__İnvite Komutları__`,`<a:mavi:833434714810351627> \`!!davet-kanal-sıfırla\` Davet Kanalınızı Sıfırlar.`,true)
.addField(`__İnvite Komutları__`,`<a:beyaz:833434701762789376> \`!!davetleri-sıfırla\` Herkesin Davet Sayısını Sıfırlar.`,true)
.addField(`__İnvite Komutları__`,`<a:siyah:833434724760289361> \`!!davetlerim\` Davetlerinizi Gösterir.`,true)
.addField(`__İnvite Komutları__`,`<a:mavi:833434714810351627>  \`!!rütbe-ekle\` Davete Göre Rol Alabilir.`,true)
.addField(`__İnvite Komutları__`,`<a:beyaz:833434701762789376> \`!!rütbe-sıfırla\` Seviye Sisteminin Log Sistemini Ayarlarsınız.`,true)
.addField(`__İnvite Komutları__`,`<a:tac:833436703703302164> \`!!rütbeler\` Seviye Sistemini Hakkında Bilgi Verir.`,true)
.addField(`__Bilgilendirme__`,`<a:unlem:833434674050236436> \`!!davet\` | Marley'i Sunucunuza Davet Edersiniz\n<a:unlem:833434674050236436> \`!!botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
  message.channel.send(marleyyardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["inviteyardım"],
    permLevel: 0
}

exports.help = {
    name: "invite-yardım",
    description: "exxe",
    usage: "exxe"
}
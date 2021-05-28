const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const marleyyardım = new Discord.MessageEmbed()
.setAuthor(`Marley Müzik Sistemi`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:tac:833436703703302164> Marley botumuzu eklemek için \`!!davet\` yazabilirsiniz.`)  
.addField(`__Müzik Komutları__`,`<a:beyaz:833434701762789376> \`!!oynat <şarkı-adı>\` Bir Şarkıyı Oynatır`,true)
.addField(`__Müzik Komutları__`,`<a:mavi:833434714810351627> \`!!atla\` Sıradaki Şarkıya Atlar`,true)
.addField(`__Müzik Komutları__`,`<a:siyah:833434724760289361> \`!!döngü\` O Anki Şarkıyı Hep Tekrarlar`,true)
.addField(`__Müzik Komutları__`,`<a:beyaz:833434701762789376> \`!!durdur\` Çalınan Şarkıyı Duraklatır`,true)
.addField(`__Müzik Komutları__`,`<a:mavi:833434714810351627> \`!!devam\` Çalınan Şarkıyı Devan Ettirir`,true)
.addField(`__Müzik Komutları__`,`<a:siyah:833434724760289361> \`!!sıra\` Şarkı Sırasını Gösterir`,true)
.addField(`__Müzik Komutları__`,`<a:beyaz:833434701762789376> \`!!np\` O Anki Çalınan Şarkıyı Gösterir`,true)
.addField(`__Müzik Komutları__`,`<a:mavi:833434714810351627> \`!!botbilgi\` Botumuz Hakkında Bilgi Alırsınız`,true)
.addField(`__Müzik Komutları__`,`<a:siyah:833434724760289361> \`!!davet\` Marley Bot'u Sunucunuza Davet Edersiniz.`,true)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
  message.channel.send(marleyyardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["müzikyardım"],
    permLevel: 0
}

exports.help = {
    name: "müzik-yardım",
    description: "exxe",
    usage: "exxe"
}
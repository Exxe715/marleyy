const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:unlem:833434674050236436> Bu komutu kullanabilmek için `Mesajları Yönet` iznine sahip olmalısın.'));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:unlem:833434674050236436> Silinecek mesaj miktarını girmelisin.'));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:unlem:833434674050236436> `100` üzeri mesaj miktarını aynı anda silemem.'));
message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed().setDescription('<a:unlem:833434674050236436> '+`${args[0]}`+' adet mesaj başarıyla silindi.')).then(m => m.delete({timeout: 5000}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle"],
  permLevel: 0
}

exports.help = {
  name: 'sil'
};
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu mesajı sadəcə sunucularda işlədə bilərsən!');

 
    const say = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
        .addField("<a:tac:833436703703302164> Sunucudakı üye sayısı", message.guild.memberCount)
        .addField("<a:marly:833665886924570645> Çevrimiçi üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status !== "offline").size)
        .addField("<a:marleey:833665886652203008> Çevrimdışı üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status == "offline").size)
        .addField("<a:marleyyy:833665887478480897> Sunucudaki Bot Sayısı", message.guild.members.cache.filter(m => m.user.bot).size)

    message.channel.send(say);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
 }
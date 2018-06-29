const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
  if (msg.content === '1') {
    msg.send.channel('2');
  }
});
client.on('message', message => {
var prefix = "&";

if (!message.content.startsWith(prefix)) return;
var args = message.content.split(' ').slice(1);
var argresult = args.join(' ');
if (message.author.id == 410835593451405312) return;
if (message.content.startsWith(prefix + 'playing')) {
if (message.author.id !== '299899582211555329') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult);
 message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else


if (message.content.startsWith(prefix + 'streem')) {
if (message.author.id !== '299899582211555329') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
 message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'setname')) {
if (message.author.id !== '299899582211555329') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setUsername(argresult).the
message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
return message.reply("**لا تستطيع تغيير الأسم الا بعد ساعتين**");
} else
 
if (message.content.startsWith(prefix + 'setavatar')) {
if (message.author.id !== '299899582211555329') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setAvatar(argresult);
 message.channel.sendMessage(`**${argresult}** : تم تغيير صورة البوت`);
} else


if (message.content.startsWith(prefix + 'watching')) {
if (message.author.id !== '299899582211555329') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
 client.user.setActivity(argresult, {type : 'watching'});
message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}
if (message.content.startsWith(prefix + 'setl')) {
if (message.author.id !== '299899582211555329') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setActivity(argresult, {type : 'listening'});
message.channel.sendMessage(`**${argresult}**: تم تغيير الاستماع الي`)
}

});
client.login(process.env.BOT_TOKEN);

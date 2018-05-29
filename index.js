const TeleBot = require('telebot');
const Promise = require('bluebird');
const TOKEN = process.env.TOKEN;
const bot = new TeleBot(TOKEN);

bot.on('/help', (msg) => {
    console.log(`/help triggered`)
    return bot.sendMessage(
        msg.chat.id, (`
Welcome to RHGradBot \u{1F602}
        `)
    );
});

bot.on(['/hello', '/start'], (msg) => {
    console.log(`/hello, /start triggered`)
    return bot.sendMessage(msg.chat.id, `Hello, ${ msg.from.first_name }!`);
});


bot.on('/thanks', (msg) => {
    console.log(`/welcomenew triggered`)
    return bot.sendMessage(msg.chat.id, `You're welcome, ${ msg.from.first_name }!`);
});


bot.on('/chatId', (msg) => {
    console.log(`/chatId triggered`)
    return bot.sendMessage(msg.chat.id, `The Chat Id of this group is ` + msg.chat.id + ' ');
});

bot.on('/goodluck', (msg) => {
    console.log(`/goodluck triggered`)
    return bot.sendMessage(msg.chat.id, `Good luck Tom Pooge \u{1F44D} \u{1F44D} \u{1F44D} \u{1F602} `);
});

bot.on('/rhcsa', (msg) => {
    console.log(`/rhcsa triggered`)
    return bot.sendMessage(
        msg.chat.id, (
            `Here are some useful RHCSA links:
RH124 Summary - https://role.rhu.redhat.com/rol-rhu/rhz/rhls/course/rh124-7/ch16s02
RH134 Summary - https://role.rhu.redhat.com/rol-rhu/rhz/rhls/course/rh134-7/ch15s02
Aidan's Trello Board of links: https://trello.com/b/erM6qmoN/rhcsa
            `
        )
    );
});

bot.on('leftChatMember', (msg) => {
    // console.log(msg)
    // console.log(msg.left_chat_member)
    console.log(`user left ${ msg.left_chat_member.first_name }`)
    return bot.sendMessage(msg.chat.id, `Goodbye ${ msg.left_chat_member.first_name } \u{1F62D} `);
});


bot.on('newChatMembers', (msg) => {
    console.log(`newChatMembers called`)
    return bot.sendMessage(msg.chat.id, `Welcome to GraduHats, ${ msg.new_chat_members[0].first_name } \u{1F60A}. Here's a link to a folder containing useful information for onboarding and beyond https://tinyurl.com/RedHatGrads or https://tinyurl.com/GraduHats `);
});

bot.on('error', (msg) => {
    console.log(`error generated`)
    return bot.sendMessage(msg.chat.id, `You broke me because of Aidan's poor error handling, I don't feel so good Mr Stark. \u{1F602} !`)
})

bot.start();
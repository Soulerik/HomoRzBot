const Telegraf = require('telegraf');
const Config = require('./config');

const bot = new Telegraf(Config.token);
bot.start((ctx) => ctx.reply('Привет!'));
bot.help((ctx) => ctx.reply("Я помогаю хранить данные о гомо-баллах. \nИспользуйте команду /homo для получения баллов. \nИспользуйте команду /hollandWheel чтобы порадовать коллегу."));
bot.on('sticker', (ctx) => ctx.reply(''));



bot.on('message', (ctx) => { 
    if (ctx.message.text === '/homo') {
    var points = 0;
    let homoName = ctx.message.from.first_name;
    if (homoName === 'Alex') points = 11
    if (homoName === 'Vitaliy') points = 5
    if (homoName === 'Дмитрий') points = 8
    if (homoName === 'gleb') points = 7
    if (homoName === 'Dmitry') points = 9

    console.log(homoName + ' : ' + ctx.message.from.id);
    console.log('chat_id: ' + ctx.chat.id);

    if (points == 0) {
        ctx.reply('Ку, ' + homoName + '. Ты мне не знаком. ')
        return;
    }


    ctx.reply('Ку ' + ctx.message.from.first_name + '. У тебя ' + points + ' гомо-очков ')
}
if (ctx.message.text === '/hollandWheel') {
    ctx.reply('Идет подбор партнера...');
    let homoName = ctx.message.from.first_name;
    console.log(homoName + ' : ' + ctx.message.from.id);
    let homoList = new Set(['Alex','Vitaliy','Dmitry','Дмитрий','gleb', 'Саша Ти', 'Луцков','Ситников']);
    homoList.delete(homoName);
    homoArray = Array.from(homoList);
    let homoPartner = homoArray[Math.floor(Math.random() * homoArray.length)]
    
    ctx.reply(homoName + ', твой партнер ' + homoPartner + '. Поехали!');
}

});
//Dmitry : 483029236
//Vitaliy : 317370472



bot.launch()



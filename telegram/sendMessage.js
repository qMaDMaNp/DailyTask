module.exports = (data) => {
    const Telegraf = require('telegraf');
    const dateFormat = require('dateformat');

    const bot = new Telegraf(process.env.BOT_TOKEN);
    const chatId = '@pavelmaker';

    //form message title
    async function setTime() {
        let someInterval = setInterval(() => {
            let d = new Date(),
                hour = dateFormat(d, 'HH'),
                minute = dateFormat(d, 'MM');

            if(minute == data.start_time) {
                bot.telegram.sendMessage(chatId, 'ydalosya');
                clearInterval(someInterval);
            }
        }, 5000);
    }
    setTime();

    bot.telegram.sendMessage(chatId, data.title);

};

const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '755495091:AAGadkmfuqKd4Aj9Lpo3a197Dw2N7r-fb1s'
const bot = new Telegrambot(TOKEN, { polling: true })


bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'hello from HEROKU, bot says: "Hi, ${msg.from.first_name}"')
})
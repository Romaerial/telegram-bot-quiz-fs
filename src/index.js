const fs = require('fs');
const test = require('ava');

const TeleBot = require('../lib/telebot.js');

const UserName = '';
const Points = 0;

const helloText = 'Привет, пройти небольшую викторину, проверь свои знания в геймдизайне, логике и играх. Тебя ждут 9 вопросов, и если ты наберешь более 6 баллов -  получишь приз!\n' +
    'Давай для начала познакомимся. Напиши, как тебя зовут?\n';

const bot = new TeleBot({
    token: '646284645:AAFliKQiOYh6bt1up1zac_vEDiHA09BfSD4', // Required. Telegram Bot API token.
    polling: { // Optional. Use polling.
        interval: 3000, // Optional. How often check updates (in ms).
        timeout: 0, // Optional. Update polling timeout (0 - short polling).
        limit: 50, // Optional. Limits the number of updates to be retrieved.
        retryTimeout: 5000, // Optional. Reconnecting timeout (in ms).
    },
    allowedUpdates: [], // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
    pluginFolder: '../plugins/', // Optional. Plugin folder location.
    usePlugins: ['askUser'], // Optional. Use user plugins from pluginFolder.
});

bot.on(['/start', '/hello'], (msg) => msg.reply.text(helloText));

bot.start();

bot.on(['/start', '/hello'], (msg) => msg.reply.text(helloText));

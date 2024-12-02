const TelegramApi = require("node-telegram-bot-api");
const express = require("express");

const app = express();
const token = "7623081248:AAHLGlqSeE8B07s899Q-gnVKzW8C4HQheSY";
const bot = new TelegramApi(token, { polling: true });

bot.on("message", (msg) => {
  console.log(msg);
  // Обробка повідомлення, наприклад, відправка відповіді
  bot.sendMessage(msg.chat.id, "Привіт! Це ваш бот.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome! Click below to open the Web App", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Open Web App",
            web_app: {
              url: "https://your-web-app-url.com",
            },
          },
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
"use strict";

module.exports = class ChiikinekoAnswerOwner {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "①室内飼育をする\n" +
        "②首輪で飼い主を明示する\n" +
        "③不妊去勢手術して増やさない"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "もっと知りたい？",
          template: {
            type: "confirm",
            text: "もっと知りたい？",
            actions: [
              {
                type: "postback",
                label: "はい",
                displayText: "はい",
                data: "はい"
              },
              {
                type: "postback",
                label: "いいえ",
                displayText: "いいえ",
                data: "いいえ"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["はい", "いいえ"].includes(value.data)){
            return value;
          }
          throw new Error();
        },
        reaction: async (error, value, bot, event, context) => {
          if (error){
            await bot.reply({
              type: "text",
              text: "にゃ？\nもう一度言ってほしいにゃ。"
            });
            await bot.init();
          }
        }
      }
    }
  }

  async finish(bot, event, context) {
    if (context.confirmed.another_q.data == "はい") {
      await bot.switch_skill({
        name: "chiikineko_select"
      });
    } else {
      await bot.reply({
        type: "text",
        text: "また来てね！"
      });
    }
  }
};

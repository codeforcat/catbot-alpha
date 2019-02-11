'use strict';

module.exports = class AruaruAnswerSurisuri {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "縄張りの安心を得るためのマーキング。\n" +
      "自分の縄張りにあるものや人に自分のにおいをつけるマーキング行動だよ。自分のにおいがついていないと落ち着かないんだね、きっと。"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "他にも気になることある？",
          template: {
            type: "buttons",
            text: "他にも気になることある？",
            actions: [
              {
                type: "postback",
                label: "家具にも人にもするのは？",
                displayText: "家具にも人にもするのは？",
                data: "housesitting_answer_groomother"
              },
              {
                type: "postback",
                label: "他のネコとするのは？",
                displayText: "他のネコとするのは？",
                data: "housesitting_answer_groomothercat"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["housesitting_answer_groomother", "housesitting_answer_groomothercat"].includes(value.data)){
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
    let intent_name = context.confirmed.another_q.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

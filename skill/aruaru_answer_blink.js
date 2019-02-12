'use strict';

module.exports = class AruaruAnswerBlink {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ゆっくり瞬きは、好きのサイン。\n" +
      "ネコが飼い主に対して瞬きするのは、心を許しているサインです。リラックスしているときは、瞬きのほかに、両目をギュッと閉じたりすることも。"
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
                label: "目を見開いて、じっと見つめてるときは？",
                displayText: "目を見開いて、じっと見つめてるときは？",
                data: "aruaru_answer_spreadeyes"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["aruaru_answer_spreadeyes"].includes(value.data)){
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

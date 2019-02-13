'use strict';

module.exports = class CareAnswerClawtrouble {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "爪とぎの本能は止められないので、やる場所を与えてあげましょう。守りたい場所にはネコが嫌う香りのスプレーや保護シートを、その代わり、ネコ好みの魅力的な爪とぎ板などを用意してあげましょう。"
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
                label: "しつけできる？",
                displayText: "しつけできる？",
                data: "care_answer_clawlesson"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_clawlesson"].includes(value.data)){
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

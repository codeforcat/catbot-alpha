'use strict';

module.exports = class AruaruAnswerBite {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "頻繁な甘噛みはストレスのサインです。\n" +
      "甘噛み本来は狩りの練習と考えられますが、ストレスによる攻撃の場合もありますので、頻繁に行われるときには注意してあげてね。"
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
                label: "対処法ある？",
                displayText: "対処法ある？",
                data: "aruaru_answer_approachbite"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["aruaru_answer_approachbite"].includes(value.data)){
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

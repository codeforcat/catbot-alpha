"use strict";

module.exports = class ChiikinekoSelectWhat {

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      question: {
        message_to_confirm: {
          type: "template",
          altText: "どれが気になる？",
          template: {
            type: "buttons",
            text: "どれが気になる？",
            actions: [{
                type: "postback",
                label: "地域猫",
                displayText: "地域猫",
                data: "chiikineko_answer_chiikineko"
              },
              {
                type: "postback",
                label: "そと猫",
                displayText: "そと猫",
                data: "chiikineko_answer_outside"
              },
              {
                type: "postback",
                label: "のら猫",
                displayText: "のら猫",
                data: "chiikineko_answer_nora"
              },
              {
                type: "postback",
                label: "うち猫",
                displayText: "うち猫",
                data: "chiikineko_answer_house"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["chiikineko_answer_chiikineko", "chiikineko_answer_outside", "chiikineko_answer_nora", "chiikineko_answer_house"].includes(value.data)){
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
    let intent_name = context.confirmed.question.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

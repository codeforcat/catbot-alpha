"use strict";

module.exports = class CareSelectNail {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      care_nail: {
        message_to_confirm: {
          type: "template",
          altText: "爪とぎの謎。どれが気になる？",
          template: {
            type: "buttons",
            text: "爪とぎの謎。どれが気になる？",
            actions: [
              {
                type: "postback",
                label: "どうしてするの？",
                displayText: "どうしてするの？",
                data: "care_answer_whyclaw"
              },
              {
                type: "postback",
                label: "困る？",
                displayText: "困る？",
                data: "care_answer_clawtrouble"
              },
              {
                type: "postback",
                label: "爪とぎ板？",
                displayText: "爪とぎ板？",
                data: "care_answer_clawboard"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_whyclaw", "care_answer_clawtrouble", "care_answer_clawboard"].includes(value.data)){
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
    let intent_name = context.confirmed.care_nail.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

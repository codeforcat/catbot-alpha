"use strict";

module.exports = class CareSelectCutnail {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      care_cutnail: {
        message_to_confirm: {
          type: "template",
          altText: "お手入れしてね！どれが気になる？",
          template: {
            type: "buttons",
            text: "お手入れしてね！どれが気になる？",
            actions: [
              {
                type: "postback",
                label: "爪切り",
                displayText: "爪切り",
                data: "care_answer_cutclaw"
              },
              {
                type: "postback",
                label: "もみもみマッサージ",
                displayText: "もみもみマッサージ",
                data: "care_answer_massage"
              },
              {
                type: "postback",
                label: "毛玉",
                displayText: "毛玉",
                data: "care_answer_furball"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_cutclaw", "care_answer_massage", "care_answer_furball"].includes(value.data)){
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
    let intent_name = context.confirmed.care_cutnail.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

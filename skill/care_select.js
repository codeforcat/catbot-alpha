"use strict";

module.exports = class CareSelect {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      care: {
        message_to_confirm: {
          type: "template",
          altText: "日頃のケアが大事。どれが気になるかな？",
          template: {
            type: "buttons",
            text: "日頃のケアが大事。どれが気になるかな？",
            actions: [{
                type: "postback",
                label: "爪とぎ",
                displayText: "爪とぎ",
                data: "care_select_nail"
              },
              {
                type: "postback",
                label: "ブラッシング・シャンプー・歯磨き",
                displayText: "ブラッシング・シャンプー・歯磨き",
                data: "care_select_brushing"
              },
              {
                type: "postback",
                label: "爪切り・マッサージ・毛玉",
                displayText: "爪切り・マッサージ・毛玉",
                data: "care_select_cutnail"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_select_nail", "care_select_brushing", "care_select_cutnail"].includes(value.data)){
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
    let intent_name = context.confirmed.care.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

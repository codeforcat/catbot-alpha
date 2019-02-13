"use strict";

module.exports = class CareSelectBrushing {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      care_brushing: {
        message_to_confirm: {
          type: "template",
          altText: "どれが気になる？",
          template: {
            type: "buttons",
            text: "どれが気になる？",
            actions: [
              {
                type: "postback",
                label: "ブラッシング",
                displayText: "ブラッシング",
                data: "care_answer_brushing"
              },
              {
                type: "postback",
                label: "シャンプー",
                displayText: "シャンプー",
                data: "care_answer_shampoo"
              },
              {
                type: "postback",
                label: "歯磨き",
                displayText: "歯磨き",
                data: "care_answer_toothbrushing"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_brushing", "care_answer_shampoo", "care_answer_toothbrushing"].includes(value.data)){
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
    let intent_name = context.confirmed.care_brushing.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

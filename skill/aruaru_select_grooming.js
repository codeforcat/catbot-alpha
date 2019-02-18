"use strict";

module.exports = class AruaruSelectGrooming {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      aruaru_grooming: {
        message_to_confirm: {
          type: "template",
          altText: "どんなことが気になる？",
          template: {
            type: "buttons",
            text: "どんなことが気になる？",
            actions: [
              {
                type: "postback",
                label: "毛づくろい",
                displayText: "毛づくろい",
                data: "aruaru_answer_grooming"
              },
              {
                type: "postback",
                label: "ふみふみ",
                displayText: "ふみふみ",
                data: "aruaru_answer_fumifumi"
              },
              {
                type: "postback",
                label: "スリスリ",
                displayText: "スリスリ",
                data: "aruaru_answer_surisuri"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["aruaru_answer_grooming", "aruaru_answer_fumifumi", "aruaru_answer_surisuri"].includes(value.data)){
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
    let intent_name = context.confirmed.aruaru_grooming.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

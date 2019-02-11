"use strict";

module.exports = class AruaruSelectKakaka {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      aruaru_kakaka: {
        message_to_confirm: {
          type: "template",
          altText: "どんなことが気になる？",
          template: {
            type: "buttons",
            text: "どんなことが気になる？",
            actions: [
              {
                type: "postback",
                label: "カカカッ",
                displayText: "カカカッ",
                data: "aruaru_answer_kakaka"
              },
              {
                type: "postback",
                label: "甘噛み",
                displayText: "甘噛み",
                data: "aruaru_answer_bite"
              },
              {
                type: "postback",
                label: "ゆっくり瞬き",
                displayText: "ゆっくり瞬き",
                data: "aruaru_answer_blink"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["aruaru_answer_kakaka", "aruaru_answer_bite", "aruaru_answer_blink"].includes(value.data)){
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
    let intent_name = context.confirmed.aruaru_kakaka.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

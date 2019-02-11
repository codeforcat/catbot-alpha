"use strict";

module.exports = class AruaruSelectKick {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      aruaru_kick: {
        message_to_confirm: {
          type: "template",
          altText: "どんなことが気になる？",
          template: {
            type: "buttons",
            text: "どんなことが気になる？",
            actions: [
              {
                type: "postback",
                label: "後ろ脚キック",
                displayText: "後ろ脚キック",
                data: "aruaru_answer_kick"
              },
              {
                type: "postback",
                label: "夜の運動会",
                displayText: "夜の運動会",
                data: "aruaru_answer_run"
              },
              {
                type: "postback",
                label: "机のものを落とす",
                displayText: "机のものを落とす",
                data: "aruaru_answer_drop"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["aruaru_answer_kick", "aruaru_answer_run", "aruaru_answer_drop"].includes(value.data)){
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
    let intent_name = context.confirmed.aruaru_kick.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

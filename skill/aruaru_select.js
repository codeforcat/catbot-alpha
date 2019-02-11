"use strict";

module.exports = class AruaruSelect {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      aruaru: {
        message_to_confirm: {
          type: "template",
          altText: "どのネコあるあるが気になるかな？",
          template: {
            type: "buttons",
            text: "どのネコあるあるが気になるかな？",
            actions: [{
                type: "postback",
                label: "毛づくろい・ふみふみ・スリスリ",
                displayText: "毛づくろい・ふみふみ・スリスリ",
                data: "aruaru_select_grooming"
              },
              {
                type: "postback",
                label: "カカカッ・甘噛み・ゆっくり瞬き",
                displayText: "カカカッ・甘噛み・ゆっくり瞬き",
                data: "aruaru_select_kakaka"
              },
              {
                type: "postback",
                label: "後ろ脚キック・夜の運動会・机のものを落とす",
                displayText: "後ろ脚キック・夜の運動会・机のものを落とす",
                data: "aruaru_select_kick"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["aruaru_select_grooming", "aruaru_select_kakaka", "aruaru_select_kick"].includes(value.data)){
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
    let intent_name = context.confirmed.aruaru.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

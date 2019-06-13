"use strict";

module.exports = class ChiikinekoSelect {

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      question: {
        message_to_confirm: {
          type: "template",
          altText: "地域猫について知ろう！",
          template: {
            type: "buttons",
            text: "地域猫について知ろう！",
            actions: [{
                type: "postback",
                label: "地域猫とは",
                displayText: "地域猫とは",
                data: "chiikineko_select_what"
              },
              {
                type: "postback",
                label: "地域猫ルール",
                displayText: "地域猫ルール",
                data: "chiikineko_select_rule"
              },
              {
                type: "postback",
                label: "猫の繁殖力",
                displayText: "猫の繁殖力",
                data: "chiikineko_select_breed"
              },
              {
                type: "postback",
                label: "そと猫トラブル",
                displayText: "そと猫トラブル",
                data: "chiikineko_select_trouble"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["chiikineko_select_what", "chiikineko_select_rule", "chiikineko_select_breed", "chiikineko_select_trouble"].includes(value.data)){
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

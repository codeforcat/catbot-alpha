"use strict";

module.exports = class EnvironmentSelectLike {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      environment_like: {
        message_to_confirm: {
          type: "template",
          altText: "トイレの基本は、こんなことがあるよ。何を知りたい？",
          template: {
            type: "buttons",
            text: "トイレの基本は、こんなことがあるよ。何を知りたい？",
            actions: [
              {
                type: "postback",
                label: "なぜ高いところ？",
                displayText: "なぜ高いところ？",
                data: "environment_answer_high"
              },
              {
                type: "postback",
                label: "なぜ狭いところ？",
                displayText: "なぜ狭いところ？",
                data: "environment_answer_narrow"
              },
              {
                type: "postback",
                label: "なぜダンボール？",
                displayText: "なぜダンボール？",
                data: "environment_answer_cardboard"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["environment_answer_high", "environment_answer_narrow", "environment_answer_cardboard"].includes(value.data)){
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
    let intent_name = context.confirmed.environment_like.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

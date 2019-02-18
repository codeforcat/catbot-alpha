"use strict";

module.exports = class HousesittingSelectCan {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      housesitting_can: {
        message_to_confirm: {
          type: "template",
          altText: "お留守番については、こんなことがあるよ。何を知りたい？",
          template: {
            type: "buttons",
            text: "お留守番については、こんなことがあるよ。何を知りたい？",
            actions: [
              {
                type: "postback",
                label: "お留守番できる？",
                displayText: "お留守番できる？",
                data: "housesitting_answer_outhome"
              },
              {
                type: "postback",
                label: "留守中の安全ポイント？",
                displayText: "留守中の安全ポイント？",
                data: "housesitting_answer_safe"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["housesitting_answer_outhome", "housesitting_answer_safe"].includes(value.data)){
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
    let intent_name = context.confirmed.housesitting_can.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

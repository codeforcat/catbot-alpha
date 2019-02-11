"use strict";

module.exports = class HousesittingSelectWalk {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      housesitting_walk: {
        message_to_confirm: {
          type: "template",
          altText: "散歩については、こんなことがあるよ。何を知りたい？",
          template: {
            type: "buttons",
            text: "散歩については、こんなことがあるよ。何を知りたい？",
            actions: [
              {
                type: "postback",
                label: "散歩させなくていい？",
                displayText: "散歩させなくていい？",
                data: "housesitting_answer_walk"
              },
              {
                type: "postback",
                label: "逃げない工夫を教えて",
                displayText: "逃げない工夫を教えて",
                data: "housesitting_answer_runaway"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["housesitting_answer_walk", "housesitting_answer_runaway"].includes(value.data)){
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
    let intent_name = context.confirmed.housesitting_walk.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

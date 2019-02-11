"use strict";

module.exports = class HousesittingSelect {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      housesitting: {
        message_to_confirm: {
          type: "template",
          altText: "お留守番について気になるんだね。どんなことかな？",
          template: {
            type: "buttons",
            text: "お留守番について気になるんだね。どんなことかな？",
            actions: [{
                type: "postback",
                label: "お留守番できる？",
                displayText: "お留守番できる？",
                data: "housesitting_select_can"
              },
              {
                type: "postback",
                label: "散歩と逃げない工夫",
                displayText: "散歩と逃げない工夫",
                data: "housesitting_select_walk"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["housesitting_select_can", "housesitting_select_walk"].includes(value.data)){
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
    let intent_name = context.confirmed.housesitting.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

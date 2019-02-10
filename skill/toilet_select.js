"use strict";

module.exports = class ToiletSelect {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      toilet: {
        message_to_confirm: {
          type: "template",
          altText: "トイレについて気になるんだね。どんなことかな？",
          template: {
            type: "buttons",
            text: "トイレについて気になるんだね。どんなことかな？",
            actions: [{
                type: "postback",
                label: "トイレの基本",
                displayText: "トイレの基本",
                data: "toilet_select_basic"
              },
              {
                type: "postback",
                label: "猫砂と掃除",
                displayText: "猫砂と掃除",
                data: "toilet_select_cleaning"
              },
              {
                type: "postback",
                label: "回数としつけ",
                displayText: "回数としつけ",
                data: "toilet_select_frequency"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["toilet_select_basic", "toilet_select_cleaning", "toilet_select_frequency"].includes(value.data)){
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
    let intent_name = context.confirmed.toilet.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

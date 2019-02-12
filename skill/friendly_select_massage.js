"use strict";

module.exports = class FriendlySelectMassage {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_massage: {
        message_to_confirm: {
          type: "template",
          altText: "教えてあげるよ！",
          template: {
            type: "buttons",
            text: "教えてあげるよ！",
            actions: [
              {
                type: "postback",
                label: "マッサージ",
                displayText: "マッサージ",
                data: "friendly_answer_massage"
              },
              {
                type: "postback",
                label: "ブラッシング",
                displayText: "ブラッシング",
                data: "friendly_answer_brushing"
              },
              {
                type: "postback",
                label: "撫でる",
                displayText: "撫でる",
                data: "friendly_answer_stroke"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_answer_massage", "friendly_answer_brushing", "friendly_answer_stroke"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_massage.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

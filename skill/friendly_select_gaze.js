"use strict";

module.exports = class FriendlySelectGaze {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_gaze: {
        message_to_confirm: {
          type: "template",
          altText: "教えてあげるよ！",
          template: {
            type: "buttons",
            text: "教えてあげるよ！",
            actions: [
              {
                type: "postback",
                label: "じっと見つめる",
                displayText: "じっと見つめる",
                data: "friendly_answer_gaze"
              },
              {
                type: "postback",
                label: "追いかける",
                displayText: "追いかける",
                data: "friendly_answer_follow"
              },
              {
                type: "postback",
                label: "隠れ場所を暴く",
                displayText: "隠れ場所を暴く",
                data: "friendly_answer_hidingplace"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_answer_gaze", "friendly_answer_follow", "friendly_answer_hidingplace"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_gaze.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

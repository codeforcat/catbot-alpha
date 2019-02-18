"use strict";

module.exports = class FriendlySelectFeeling {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_feeling: {
        message_to_confirm: {
          type: "template",
          altText: "ネコの気持ちを読み取るには、こんな方法があるよ！",
          template: {
            type: "buttons",
            text: "ネコの気持ちを読み取るには、こんな方法があるよ！",
            actions: [
              {
                type: "postback",
                label: "ボディランゲージ",
                displayText: "ボディランゲージ",
                data: "friendly_answer_bodylanguage"
              },
              {
                type: "postback",
                label: "鳴き声",
                displayText: "鳴き声",
                data: "friendly_answer_meow"
              },
              {
                type: "postback",
                label: "姿勢",
                displayText: "姿勢",
                data: "friendly_answer_pose"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_answer_bodylanguage", "friendly_answer_meow", "friendly_answer_pose"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_feeling.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

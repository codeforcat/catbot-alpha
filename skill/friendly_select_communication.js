"use strict";

module.exports = class FriendlySelectCommunication {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_communication: {
        message_to_confirm: {
          type: "template",
          altText: "うまくコミュニケーションをとろうね。どれが気になる？",
          template: {
            type: "buttons",
            text: "うまくコミュニケーションをとろうね。どれが気になる？",
            actions: [
              {
                type: "postback",
                label: "ネコの気持ちを読み取る",
                displayText: "ネコの気持ちを読み取る",
                data: "friendly_select_feeling"
              },
              {
                type: "postback",
                label: "コミュニケーション",
                displayText: "ネコとのコミュニケーション",
                data: "friendly_select_playcat"
              },
              {
                type: "postback",
                label: "ネコの不思議",
                displayText: "ネコの不思議",
                data: "friendly_select_why"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_select_feeling", "friendly_select_playcat", "friendly_select_why"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_communication.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

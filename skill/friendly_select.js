"use strict";

module.exports = class FriendlySelect {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly: {
        message_to_confirm: {
          type: "template",
          altText: "仲良くなりたいよね。どれが気になるかな？",
          template: {
            type: "buttons",
            text: "仲良くなりたいよね。どれが気になるかな？",
            actions: [{
                type: "postback",
                label: "ネコのうれしいことをする",
                displayText: "ネコのうれしいことをする",
                data: "friendly_select_pleasure"
              },
              {
                type: "postback",
                label: "ネコに嫌がることをしない",
                displayText: "ネコに嫌がることをしない",
                data: "friendly_select_dont"
              },
              {
                type: "postback",
                label: "コミュニケーション",
                displayText: "ネコとのコミュニケーション",
                data: "friendly_select_communication"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_select_pleasure", "friendly_select_dont", "friendly_select_communication"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

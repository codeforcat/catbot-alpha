"use strict";

module.exports = class FriendlySelectWhy {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_why: {
        message_to_confirm: {
          type: "template",
          altText: "ネコには不思議がいっぱい。何が気になる？",
          template: {
            type: "buttons",
            text: "ネコには不思議がいっぱい。何が気になる？",
            actions: [
              {
                type: "postback",
                label: "肉球タッチ",
                displayText: "肉球タッチ",
                data: "friendly_answer_pad"
              },
              {
                type: "postback",
                label: "鏡に映る自分を見ている",
                displayText: "鏡に映る自分を見ている",
                data: "friendly_answer_mirror"
              },
              {
                type: "postback",
                label: "テレビを見ている",
                displayText: "テレビを見ている",
                data: "friendly_answer_tv"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_answer_pad", "friendly_answer_mirror", "friendly_answer_tv"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_why.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

"use strict";

module.exports = class FriendlySelectGoods {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_goods: {
        message_to_confirm: {
          type: "template",
          altText: "教えてあげるよ！",
          template: {
            type: "buttons",
            text: "教えてあげるよ！",
            actions: [
              {
                type: "postback",
                label: "おもちゃで遊ぶ",
                displayText: "おもちゃで遊ぶ",
                data: "friendly_answer_goods"
              },
              {
                type: "postback",
                label: "追いかけっこ",
                displayText: "追いかけっこ",
                data: "friendly_answer_chase"
              },
              {
                type: "postback",
                label: "かくれんぼ",
                displayText: "かくれんぼ",
                data: "friendly_answer_hide"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_answer_goods", "friendly_answer_chase", "friendly_answer_hide"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_goods.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

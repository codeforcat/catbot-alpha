"use strict";

module.exports = class FriendlySelectPleasure {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_pleasure: {
        message_to_confirm: {
          type: "template",
          altText: "こんなことがうれしい！どれが気になる？",
          template: {
            type: "buttons",
            text: "こんなことがうれしい！どれが気になる？",
            actions: [
              {
                type: "postback",
                label: "おもちゃ・追いかけっこ・かくれんぼ",
                displayText: "おもちゃ・追いかけっこ・かくれんぼ",
                data: "friendly_select_goods"
              },
              {
                type: "postback",
                label: "マッサージ・ブラッシング・撫でる",
                displayText: "マッサージ・ブラッシング・撫でる",
                data: "friendly_select_massage"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_select_goods", "friendly_select_massage"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_pleasure.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

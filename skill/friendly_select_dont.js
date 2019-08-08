"use strict";

module.exports = class FriendlySelectDont {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_dont: {
        message_to_confirm: {
          type: "template",
          altText: "嫌なことはしてほしくないな。どれが気になる？",
          template: {
            type: "buttons",
            text: "嫌なことはしてほしくないな。どれが気になる？",
            actions: [
              {
                type: "postback",
                label: "見つめ追いかけ暴く",
                displayText: "見つめる・追いかける・隠れ場所を暴く",
                data: "friendly_select_gaze"
              },
              {
                type: "postback",
                label: "触られ大声大きな動作",
                displayText: "しつこく触られる・大声・大きな動作",
                data: "friendly_select_touch"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_select_gaze", "friendly_select_touch"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_dont.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

"use strict";

module.exports = class FriendlySelectTouch {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_touch: {
        message_to_confirm: {
          type: "template",
          altText: "教えてあげるよ！",
          template: {
            type: "buttons",
            text: "教えてあげるよ！",
            actions: [
              {
                type: "postback",
                label: "しつこく触られる",
                displayText: "しつこく触られる",
                data: "friendly_answer_hold"
              },
              {
                type: "postback",
                label: "大声を出される",
                displayText: "大声を出される",
                data: "friendly_answer_loud"
              },
              {
                type: "postback",
                label: "急に大きな動作をされる",
                displayText: "急に大きな動作をされる",
                data: "friendly_answer_move"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_answer_hold", "friendly_answer_loud", "friendly_answer_move"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_touch.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

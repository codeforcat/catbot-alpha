"use strict";

module.exports = class FriendlySelectPlaycat {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      friendly_playcat: {
        message_to_confirm: {
          type: "template",
          altText: "コミュニケーションは大事。こんな方法があるよ！",
          template: {
            type: "buttons",
            text: "コミュニケーションは大事。こんな方法があるよ！",
            actions: [
              {
                type: "postback",
                label: "遊び方",
                displayText: "遊び方",
                data: "friendly_answer_play"
              },
              {
                type: "postback",
                label: "抱っこ",
                displayText: "抱っこ",
                data: "friendly_answer_nohold"
              },
              {
                type: "postback",
                label: "撫で方",
                displayText: "撫で方",
                data: "friendly_answer_touch"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_answer_play", "friendly_answer_nohold", "friendly_answer_touch"].includes(value.data)){
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
    let intent_name = context.confirmed.friendly_playcat.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

"use strict";

module.exports = class ToiletSelectFrequency {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      toilet_frequency: {
        message_to_confirm: {
          type: "template",
          altText: "回数としつけについてだよ。何を知りたい？",
          template: {
            type: "buttons",
            text: "回数としつけについてだよ。何を知りたい？",
            actions: [
              {
                type: "postback",
                label: "トイレの回数は？",
                displayText: "トイレの回数は？",
                data: "toilet_answer_times"
              },
              {
                type: "postback",
                label: "トイレのしつけ",
                displayText: "トイレのしつけ",
                data: "toilet_answer_how"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["toilet_answer_times", "toilet_answer_how"].includes(value.data)){
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
    let intent_name = context.confirmed.toilet_frequency.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

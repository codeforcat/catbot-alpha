"use strict";

module.exports = class ToiletSelectCleaning {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      toilet_cleaning: {
        message_to_confirm: {
          type: "template",
          altText: "猫砂と掃除についてだよ。何を知りたい？",
          template: {
            type: "buttons",
            text: "猫砂と掃除についてだよ。何を知りたい？",
            actions: [
              {
                type: "postback",
                label: "猫砂について",
                displayText: "猫砂について",
                data: "toilet_answer_sand"
              },
              {
                type: "postback",
                label: "トイレの掃除は？",
                displayText: "トイレの掃除は？",
                data: "toilet_answer_cleaning"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["toilet_answer_sand", "toilet_answer_cleaning"].includes(value.data)){
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
    let intent_name = context.confirmed.toilet_cleaning.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

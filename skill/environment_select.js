"use strict";

module.exports = class EnvironmentSelect {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      environment: {
        message_to_confirm: {
          type: "template",
          altText: "環境づくりについて気になるんだね。どんなことかな？",
          template: {
            type: "buttons",
            text: "環境づくりについて気になるんだね。どんなことかな？",
            actions: [{
                type: "postback",
                label: "好きな場所",
                displayText: "好きな場所",
                // data: "enviroment_quiz_notroom"
                data: "environment_select_like"
              },
              {
                type: "postback",
                label: "ネコベッド？",
                displayText: "ネコベッド？",
                data: "environment_answer_bed"
              },
              {
                type: "postback",
                label: "居心地の悪いサイン？",
                displayText: "居心地の悪いサイン？",
                data: "environment_answer_uncomfortable"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["environment_select_like", "environment_answer_bed", "environment_answer_uncomfortable","enviroment_quiz_notroom"].includes(value.data)){
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
    let intent_name = context.confirmed.environment.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

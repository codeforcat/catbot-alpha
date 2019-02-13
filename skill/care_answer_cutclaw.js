'use strict';

module.exports = class CareAnswerCutclaw {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "鋭く尖った爪は、飼い主さんのカラダを傷つけたり家具をボロボロにしてしまう困りものです。爪切りを嫌がって暴れたり、逃げ出したりするネコも少なくありません。"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "他にも気になることある？",
          template: {
            type: "buttons",
            text: "他にも気になることある？",
            actions: [
              {
                type: "postback",
                label: "いつやれば？",
                displayText: "いつやれば？",
                data: "care_answer_whencutclaw"
              },
              {
                type: "postback",
                label: "注意点？",
                displayText: "注意点？",
                data: "care_answer_cutclawcaution"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_whencutclaw", "care_answer_cutclawcaution"].includes(value.data)){
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
    let intent_name = context.confirmed.another_q.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

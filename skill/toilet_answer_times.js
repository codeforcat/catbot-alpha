'use strict';

module.exports = class ToiletAnswerTimes {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "尿は1日2〜4回程度。尿の回数が2日に1回以下だったり、7回以上の日が続いたら、病気の疑いがあります。"
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
                label: "ウンチは？",
                displayText: "ウンチは？",
                data: "toilet_answer_poo"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["toilet_answer_poo"].includes(value.data)){
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

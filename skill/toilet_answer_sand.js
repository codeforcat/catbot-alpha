'use strict';

module.exports = class ToiletAnswerSand {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "一般的には、自然の砂に近い「鉱物系」を好む傾向があるようだけど、いろいろ試してみて、猫に合う猫砂を選んであげてね。"
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
                label: "どんな種類があるの？",
                displayText: "どんな種類があるの？",
                data: "toilet_answer_sandtype"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["toilet_answer_sandtype"].includes(value.data)){
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

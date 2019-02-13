'use strict';

module.exports = class CareAnswerToothbrushing {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "大きな硬い肉や骨を噛むことで自然に歯磨き効果をいる野生のネコとは異なり、フード育ちの飼い猫は歯垢がたまりやすいのです。とくに老猫の間では歯磨きの重要性が高まっています。"
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
                label: "歯磨きポイント？",
                displayText: "歯磨きポイント？",
                data: "care_answer_toothbrushingpoint"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_toothbrushingpoint"].includes(value.data)){
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

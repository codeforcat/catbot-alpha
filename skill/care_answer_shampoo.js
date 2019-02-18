'use strict';

module.exports = class CareAnswerShampoo {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "基本的にネコにシャンプーは必要ありません。ネコは皮脂腺が発達していないから体を洗わなくても体臭は感じないはず。体の表面の油分は少ないから、シャワーで洗ってしまうと、皮膚そのものの抵抗力も低下してしまう。"
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
                label: "長毛種は？",
                displayText: "長毛種は？",
                data: "care_answer_shampoolong"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_shampoolong"].includes(value.data)){
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

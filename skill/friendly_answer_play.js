'use strict';

module.exports = class FriendlyAnswerPlay {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "生来のハンターであるネコは、遊びを通して狩りの方法を学びます。ネコと遊ぶときには、獲物となる小動物の動きを取り入れるなど、ネコの狩猟本能を刺激してあげると、夢中になります。"
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
                label: "すぐ飽きるんですけど",
                displayText: "すぐ飽きるんですけど",
                data: "friendly_answer_fedupplay"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_answer_fedupplay"].includes(value.data)){
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

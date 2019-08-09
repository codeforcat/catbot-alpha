'use strict';

module.exports = class ChiikinekoAnswerNeuter {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "不妊去勢手術をしているので子猫は生まれません。不妊去勢手術済みの印が耳カット、「さくらみみ」と言います。耳カットされた猫を「さくらねこ」と言います。"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "不妊去勢手術をすれば？",
          template: {
            type: "buttons",
            text: "不妊去勢手術をすれば？",
            actions: [
              {
                type: "postback",
                label: "不妊去勢手術の効果",
                displayText: "不妊去勢手術の効果",
                data: "chiikineko_answer_neutering"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["chiikineko_answer_neutering"].includes(value.data)){
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

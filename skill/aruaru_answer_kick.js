'use strict';

module.exports = class AruaruAnswerKick {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "後ろ脚キックも狩りのトレーニングです。後ろ脚から繰り出される強烈なネコキックは、狩猟本能によるもの。獲物を仕留めたあと、相手を疲れさせることが目的なので、一度始まるとなかなか止まりません。"
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
                label: "機嫌が悪いの？",
                displayText: "機嫌が悪いときされる気がする？",
                data: "aruaru_answer_kickmood"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["aruaru_answer_kickmood"].includes(value.data)){
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

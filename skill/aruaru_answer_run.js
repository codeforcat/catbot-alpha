'use strict';

module.exports = class AruaruAnswerRun {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "夜の運動会は狩りのシミュレーションです。飼い主が寝ようとすると、ネコが鳴いたり、走り回ったり、あるいは、明け方、ネコが騒ぎ出して、起こされたり。複数のネコを飼っている場合には追っかけっこして、さながら、夜の運動会と化します。"
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
                label: "対処法ある？",
                displayText: "対処法ある？",
                data: "aruaru_answer_coperun"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["aruaru_answer_coperun"].includes(value.data)){
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

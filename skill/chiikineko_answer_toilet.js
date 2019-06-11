'use strict';

module.exports = class ChiikinekoAnswerToilet {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "立ち寄る場所に、複数のトイレを設置して、こまめに掃除しましょう。"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "どんなトイレ？",
          template: {
            type: "buttons",
            text: "どんなトイレ？",
            actions: [
              {
                type: "postback",
                label: "トイレの種類",
                displayText: "トイレの種類",
                data: "chiikineko_answer_toilettype"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["chiikineko_answer_toilettype"].includes(value.data)){
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

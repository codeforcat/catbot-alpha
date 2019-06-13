"use strict";

module.exports = class ChiikinekoSelectBreed {

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      question: {
        message_to_confirm: {
          type: "template",
          altText: "どれが気になる？",
          template: {
            type: "buttons",
            text: "どれが気になる？",
            actions: [{
                type: "postback",
                label: "妊娠率",
                displayText: "妊娠率",
                data: "chiikineko_answer_rate"
              },
              {
                type: "postback",
                label: "妊娠期間",
                displayText: "妊娠期間",
                data: "chiikineko_answer_period"
              },
              {
                type: "postback",
                label: "一度に何匹生む？",
                displayText: "一度に何匹生む？",
                data: "chiikineko_answer_howmany"
              },
              {
                type: "postback",
                label: "不妊手術をしていないと？",
                displayText: "不妊手術をしていないと？",
                data: "chiikineko_quiz_howmany"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["chiikineko_answer_rate", "chiikineko_answer_period", "chiikineko_answer_howmany", "chiikineko_quiz_howmany"].includes(value.data)){
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
    let intent_name = context.confirmed.question.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

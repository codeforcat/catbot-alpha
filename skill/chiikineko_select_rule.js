"use strict";

module.exports = class ChiikinekoSelectRule {

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
                label: "不妊去勢手術",
                displayText: "不妊去勢手術",
                data: "chiikineko_answer_neuter"
              },
              {
                type: "postback",
                label: "エサのルール",
                displayText: "エサのルール",
                data: "chiikineko_answer_food"
              },
              {
                type: "postback",
                label: "環境美化",
                displayText: "環境美化",
                data: "chiikineko_answer_environment"
              },
              {
                type: "postback",
                label: "トイレの設置",
                displayText: "トイレの設置",
                data: "chiikineko_answer_toilet"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["chiikineko_answer_neuter", "chiikineko_answer_food", "chiikineko_answer_environment", "chiikineko_answer_toilet"].includes(value.data)){
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

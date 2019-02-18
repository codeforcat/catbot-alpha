'use strict';

module.exports = class ToiletAnswerCleaning {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "トイレの汚れはストレスのもと。いつもきれいなトイレを保つよう、掃除はこまめに。月に一度は、猫砂を全部取り替え、丸洗いしましょう。"
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
                label: "洗剤は？",
                displayText: "洗剤は？",
                data: "toilet_answer_cleaner"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["toilet_answer_cleaner"].includes(value.data)){
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

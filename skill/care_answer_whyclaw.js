'use strict';

module.exports = class CareAnswerWhyclaw {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ネコが爪とぎをする第一の理由は、古くなった外側の層の爪を剥がすため。ほかにも、自分のニオイをこすりつけ、縄張りを主張するという意味もあります。"
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
                label: "しなくなったら？",
                displayText: "しなくなったら？",
                data: "care_answer_notclaw"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_notclaw"].includes(value.data)){
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

'use strict';

module.exports = class ChiikinekoAnswerHouse {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "完全室内飼育の猫"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "どういうこと？",
          template: {
            type: "buttons",
            text: "どういうこと？",
            actions: [
              {
                type: "postback",
                label: "うち猫のルール",
                displayText: "うち猫のルール",
                data: "chiikineko_answer_houserule"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["chiikineko_answer_houserule"].includes(value.data)){
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

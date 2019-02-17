'use strict';

module.exports = class AruaruAnswerGrooming {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "落ち着くためにしてるんだよ。\n" +
      "ネコの祖先が体温調節のために全身を舐めていたことが習性として残っていると言われてるんだ。毛づくろいしなくなったら、病気やケガをしてることがあるから、注意してあげてね。"
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
                label: "母ネコが子ネコにするのは",
                displayText: "母ネコが子ネコにするのは？",
                data: "aruaru_answer_groomchild"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["aruaru_answer_groomchild"].includes(value.data)){
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

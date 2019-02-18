'use strict';

module.exports = class ToiletAnswerMulti {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "複数設置が基本です。ネコの数より1つ多く置いてあげてね。1匹なら2個、2匹なら3個という具合です。"
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
                label: "どうして複数必要なの？",
                displayText: "どうして複数必要なの？",
                data: "toilet_answer_whymulti"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["toilet_answer_whymulti"].includes(value.data)){
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

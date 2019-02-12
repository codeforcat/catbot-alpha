'use strict';

module.exports = class FriendlyAnswerPose {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ネコは大きく見せて敵を威嚇、怖いとカラダが縮こまります。丸くなってたら、リラックスのしるし。季節によっても姿勢が変わりますよ。"
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
                label: "こんな歩き方をしていたら注意",
                displayText: "こんな歩き方をしていたら注意",
                data: "friendly_answer_walkstylecaution"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["friendly_answer_walkstylecaution"].includes(value.data)){
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

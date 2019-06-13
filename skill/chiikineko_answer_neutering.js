"use strict";

module.exports = class ChiikinekoAnswerNeutering {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "①新たな子猫は生まれない\n" +
        "②発情期の鳴き声やケンカが減る\n" +
        "③尿スプレーの抑制、尿の臭いの軽減\n" +
        "④生殖器系の病気の予防"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "もっと知りたい？",
          template: {
            type: "confirm",
            text: "もっと知りたい？",
            actions: [
              {
                type: "postback",
                label: "はい",
                displayText: "はい",
                data: "はい"
              },
              {
                type: "postback",
                label: "いいえ",
                displayText: "いいえ",
                data: "いいえ"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["はい", "いいえ"].includes(value.data)){
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
    if (context.confirmed.another_q.data == "はい") {
      await bot.switch_skill({
        name: "chiikineko_select"
      });
    } else {
      await bot.reply({
        type: "text",
        text: "また来てね！"
      });
    }
  }
};

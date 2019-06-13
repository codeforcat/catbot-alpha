'use strict';

module.exports = class ChiikinekoQuizHowmany {
  async begin(bot, event, context) {
    await bot.queue({
      type: "text",
      text: "不妊手術をしていないメスの子猫がソト猫だとすると、１年に何匹になると思いますか？"
    });
    await bot.queue({
      type: "text",
      text: "正解は91匹だよ。"
    });
    await bot.queue({
      type: "text",
      text: "１匹のメスが、年に3回、5匹のメスを生んで、15匹。その半年後、15匹のメスが５匹のメスを生むと、90匹、親、子、孫合わせて、91匹となります。"
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

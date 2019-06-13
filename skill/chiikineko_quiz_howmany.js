'use strict';

module.exports = class ChiikinekoQuizHowmany {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      quiz: {
        message_to_confirm: {
          type: "template",
          altText: "不妊手術をしていないメスの子猫がソト猫だとすると、１年に何匹になると思いますか？",
          template: {
            type: "buttons",
            text: "不妊手術をしていないメスの子猫がソト猫だとすると、１年に何匹になると思いますか？",
            actions: [{
                type: "postback",
                label: "①11匹",
                displayText: "①11匹",
                data: "1"
              },
              {
                type: "postback",
                label: "②31匹",
                displayText: "②31匹",
                data: "2"
              },
              {
                type: "postback",
                label: "③51匹",
                displayText: "③51匹",
                data: "3"
              },
              {
                type: "postback",
                label: "④91匹",
                displayText: "④91匹",
                data: "4"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          console.log("value: " + value.data);
          if (["1", "2", "3", "4"].includes(value.data)) {
            return value;
          }
          throw new Error();
        },
        reaction: async (error, value, bot, event, context) => {
          if (error) {
            bot.change_message_to_confirm("quiz", {
              type: "text",
              text: "選択肢を入れてほしいニャ。"
            });
          }
        }
      }
    }
  }

  async finish(bot, event, context) {
    let data = context.confirmed.quiz.data;

    if (data !== "4") {
      await bot.queue({
        type: "text",
        text: "残念！正解は④91匹だよ。"
      });
    } else {
      await bot.queue({
        type: "text",
        text: "正解！"
      });
    }
    await bot.queue({
      type: "text",
      text: "１匹のメスが、年に3回、5匹のメスを生んで、15匹。その半年後、15匹のメスが５匹のメスを生むと、90匹、親、子、孫合わせて、91匹となります。"
    });
    await bot.switch_skill({
      name: "chiikineko_more_confirm"
    });
  }
};

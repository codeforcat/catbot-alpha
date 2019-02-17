'use strict';

module.exports = class EnviromentQuizLike {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      quiz: {
        message_to_confirm: {
          type: "template",
          altText: "ゴロゴロは何のサイン？",
          template: {
            type: "buttons",
            text: "ネコのゴロゴロって鳴き声は何のサインでしょう？",
            actions: [{
                type: "postback",
                label: "①ご機嫌",
                displayText: "①ご機嫌",
                data: "1"
              },
              {
                type: "postback",
                label: "②ご飯ちょうだい",
                displayText: "②ご飯ちょうだい",
                data: "2"
              },
              {
                type: "postback",
                label: "③カラダの具合が悪い",
                displayText: "③カラダの具合が悪い",
                data: "3"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          console.log("value: " + value.data);
          if (["1", "2", "3"].includes(value.data)) {
            return value;
          }
          throw new Error();
        },
        reaction: async (error, value, bot, event, context) => {
          console.log("FoodQuizNoEat reaction");
          if (error) {
            bot.change_message_to_confirm("quiz", {
              type: "text",
              text: "選択肢を入れてほしいニャ。"
            });
          } else {
            await bot.queue({
              type: "text",
              text: "全部正解だよ！\nゴロゴロという鳴き声には、いろんな意味があるよ。大体は、ご機嫌なときのゴロゴロなんだけど、「ご飯ちょうだい」などの要求がらみのものやカラダの具合が悪いときにもゴロゴロするので、気をつけて見ておいてね。"
            });
          }
        }
      }
    }
  }

  async finish(bot, event, context) {
  }
};

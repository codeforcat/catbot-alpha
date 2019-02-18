'use strict';

module.exports = class EnviromentQuizLike {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      quiz: {
        message_to_confirm: {
          type: "template",
          altText: "部屋に置いちゃいけないもの？",
          template: {
            type: "buttons",
            text: "ネコと暮らすのに、部屋に置いちゃいけないものはどれでしょう？",
            actions: [{
                type: "postback",
                label: "①花・観葉植物",
                displayText: "①花・観葉植物",
                data: "1"
              },
              {
                type: "postback",
                label: "②アロマオイル・サプリメント",
                displayText: "②アロマオイル・サプリメント",
                data: "2"
              },
              {
                type: "postback",
                label: "③タバコ",
                displayText: "③タバコ",
                data: "3"
              },
              {
                type: "postback",
                label: "④柑橘系のニオイ",
                displayText: "④柑橘系のニオイ",
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
          console.log("FoodQuizNoEat reaction");
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
      await bot.reply({
        type: "text",
        text: "全部正解だよ！\n①花・観葉植物\nゆり科、ネギ類など毒になる植物は数百種類もあるよ!\n②アロマオイル・サプリメント\nネコには刺激が強すぎるし、毒になることもあるよ！\n③タバコ\nもちろんダメだよ!\n④柑橘系のニオイ\n大嫌いだよ!"
      });
    }
  };

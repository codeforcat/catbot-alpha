'use strict';


module.exports = class EnviromentQuizLike {

  // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      quiz: {
        message_to_confirm: {
          type: "template",
          altText: "ネコが好きな場所は？",
          template: {
            type: "buttons",
            text: "ネコが好きな場所は、どこでしょう？",
            actions: [{
                type: "postback",
                label: "①高いところ",
                displayText: "①高いところ",
                data: "1"
              },
              {
                type: "postback",
                label: "②狭いところ",
                displayText: "②狭いところ",
                data: "2"
              },
              {
                type: "postback",
                label: "③ダンボール",
                displayText: "③ダンボール",
                data: "3"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          console.log("value: " + value.data);
          if (["1", "2", "3"].includes(value.data)){
            return value;
          }
          throw new Error();
        },
        reaction: async (error, value, bot, event, context) => {
          console.log("FoodQuizNoEat reaction");
          if (error){
            bot.change_message_to_confirm("quiz", {
              type: "text",
              text: "選択肢を入れてほしいニャ。"
            });
          }
        }
      },
      environment_like: {
        message_to_confirm: {
          type: "template",
          altText: "全部正解だよ！",
          template: {
            type: "buttons",
            text: "全部正解だよ、具体的には何が知りたい？",
            actions: [
              {
                type: "postback",
                label: "なぜ高いところ？",
                displayText: "なぜ高いところ？",
                data: "environment_answer_high"
              },
              {
                type: "postback",
                label: "なぜ狭いところ？",
                displayText: "なぜ狭いところ？",
                data: "environment_answer_narrow"
              },
              {
                type: "postback",
                label: "なぜダンボール？",
                displayText: "なぜダンボール？",
                data: "environment_answer_cardboard"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["environment_answer_high", "environment_answer_narrow", "environment_answer_cardboard"].includes(value.data)){
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
    let intent_name = context.confirmed.environment_like.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};

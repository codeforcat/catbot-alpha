'use strict';
// 一問一答形式
module.exports = class FoodAnswerDry {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "カリカリ（ドライ）と缶詰パウチ（ウェット）があるけど、ドライが基本かな。"
    });
  }

  // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
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
                label: "ドライもいろいろ",
                displayText: "ドライもいろいろあるけど？",
                data: "food_answer_whichdry"
              },
              {
                type: "postback",
                label: "缶詰ダメなの？",
                displayText: "缶詰ダメなの？",
                data: "food_answer_can"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["food_answer_whichdry", "food_answer_can"].includes(value.data)){
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
  // パラメーターが全部揃ったら実行する処理を記述します。
  async finish(bot, event, context) {
    let intent_name = context.confirmed.another_q.data;
    console.log("**************intent_name ********: "+intent_name);
    await bot.switch_skill({
      name: intent_name
    });
  }
};

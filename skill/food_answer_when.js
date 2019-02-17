'use strict';
// 一問一答形式
module.exports = class FoodAnswerWhen {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ご飯は、朝夕２回が基本だけど、猫は、犬と違って、ダラダラと食べるので、置きっぱなしでも大丈夫。"
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
                label: "置きっぱなしで大丈夫？",
                displayText: "置きっぱなしで大丈夫？",
                data: "food_answer_leave"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["food_answer_leave"].includes(value.data)){
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

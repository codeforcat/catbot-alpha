'use strict';
// 一問一答形式
module.exports = class FoodAnswerDry {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ネコの年齢や体調に合ったドライを選んでね。"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "もっと質問あるニャ？",
          template: {
            type: "buttons",
            text: "もっと質問あるニャ？",
            actions: [{
                type: "postback",
                label: "はい",
                data: "はい"
              },
              {
                type: "postback",
                label: "いいえ",
                data: "いいえ"
              }
            ]
          }
        }
      },
    };
  }

  // パラメーターが全部揃ったら実行する処理を記述します。
  async finish(bot, event, context) {
    console.log(context.confirmed);
    let intent_name = "food_quiz_noteat";
    if (context.confirmed.another_q.data == "はい") {
      await bot.reply({
        type: "text",
        text: "どんなことが聞きたい？"
      });
    }
    await bot.switch_skill({
      name: intent_name
    });
  }
};

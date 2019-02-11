'use strict';
// 質問に対して選択肢の質問で答える形式
module.exports = class QuestionMore {

  // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      more_quiz: {
        message_to_confirm: {
          type: "template",
          altText: "もっと質問あるニャ？",
          template: {
            type: "buttons",
            text: "もっと質問あるニャ？",
            actions: [{
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
        }
      }
    };
  }

  // パラメーターが全部揃ったら実行する処理を記述します。
  async finish(bot, event, context) {
    console.log(context.confirmed);
    let intents = ["food_mame_water"];
    let intent_name = intents[0];
    if (context.confirmed.more_quiz.data == "はい") {
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

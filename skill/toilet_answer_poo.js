'use strict';
// 一問一答形式
module.exports = class ToiletAnswerPoo {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ウンチは1日1回が健康の証です。ただし、2〜3日に1回でも、ネコが元気であれば問題ありません。4日以上出なかったら、お医者さんに相談しましょう。"
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
    let intents = ["toilet_mame_poohigh","toilet_quiz_do","","","","","",""];
    let intent_name = intents[Math.floor(Math.random()*intents.length)];
    if (context.confirmed.another_q.data == "はい") {
      await bot.reply({
        type: "text",
        text: "どんなことが聞きたい"
      });
    }
    if (intent_name == "") {
      await bot.reply({
        type: "text",
        text: "また来てね！"
      });
    }else{
      await bot.switch_skill({
        name: intent_name
      });
    }
  }
};

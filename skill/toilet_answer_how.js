'use strict';
// 一問一答形式
module.exports = class ToiletAnswerHow {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "子ネコの場合、トイレしそうな時に、猫砂に連れて行って、おしりをポンポン。"
    });

    await bot.queue({
      type: "text",
      text: "大人のネコの場合、トイレをいつもきれいにして、人目につかないところに置いてみよう。ダンボールで囲ってみるのも効果あり。"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "もっと質問あるにゃ？",
          template: {
            type: "confirm",
            text: "もっと質問あるにゃ？",
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
        text: "どんなことが聞きたい？"
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

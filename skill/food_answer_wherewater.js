'use strict';
// 一問一答形式
module.exports = class FoodAnswerWhereWater {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ネコは決まった場所で水を飲む習慣がないので、家の複数の場所に、水の入った器を置くことで、飲む回収が増えるようにしましょう。トイレとは離しておこうね。フードと離しても大丈夫。ネコはご飯と水を一緒に取らないので。"
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
    let intents = ["food_mame_water","food_mame_milk","food_quiz_plate","","","","",""];
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

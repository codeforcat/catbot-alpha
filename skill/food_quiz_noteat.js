'use strict';


module.exports = class FoodQuizNoEat {

  // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      quiz: {
        message_to_confirm: {
          type: "template",
          altText: "ここでクイズです",
          template: {
            type: "buttons",
            text: "ここで、クイズです。このなかで、ネコに食べさせたらダメなものは？",
            actions: [{
                type: "postback",
                label: "①玉ねぎ",
                displayText: "①玉ねぎ",
                data: "1"
              },
              {
                type: "postback",
                label: "②チョコレート",
                displayText: "②チョコレート？",
                data: "2"
              },
              {
                type: "postback",
                label: "③イカ",
                displayText: "③イカ",
                data: "3"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          console.log("value: " + value.data);
          if (["1", "2", "3", "4"].includes(value.data)){
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
      }
    };
  }

  // パラメーターが全部揃ったら実行する処理を記述します。
  async finish(bot, event, context) {
    let intent_name = "food_quiz_noteat_no";

    if(context.confirmed.quiz.data == "1" || context.confirmed.quiz.data == "2" || context.confirmed.quiz.data == "3"){
      intent_name = "food_quiz_noteat_ok";
    }
    await bot.switch_skill({
      name: intent_name,
    });
  }
};

'use strict';


module.exports = class FoodQuizPlate {

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
            text: "ここで、クイズです。水の器、大きいのと小さいのとどっちがいい？",
            actions: [{
                type: "postback",
                label: "①大きい器",
                displayText: "①大きい器",
                data: "1"
              },
              {
                type: "postback",
                label: "②小さい器",
                displayText: "②小さい器？",
                data: "2"
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
    let intent_name = "food_quiz_plate_no";

    if(context.confirmed.quiz.data == "1" || context.confirmed.quiz.data == "2"){
      intent_name = "food_quiz_plate_ok";
    }
    await bot.switch_skill({
      name: intent_name,
    });
  }
};

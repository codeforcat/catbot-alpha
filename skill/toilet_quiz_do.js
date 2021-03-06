'use strict';


module.exports = class ToiletQuizDo {

  // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      quiz: {
        message_to_confirm: {
          type: "template",
          altText: "こんなことないですか？",
          template: {
            type: "buttons",
            text: "トイレの時こんなことないですか？",
            actions: [{
                type: "postback",
                label: "①砂をかけずに急いで出る",
                displayText: "①おしっこやウンチをしたあと、砂をかけずに急いで出る",
                data: "1"
              },
              {
                type: "postback",
                label: "②ヘリや壁をカリカリかく",
                displayText: "②トイレのヘリや壁をカリカリかく",
                data: "2"
              },
              {
                type: "postback",
                label: "③空中をかく",
                displayText: "③空中をかくような仕草をする",
                data: "3"
              },
              {
                type: "postback",
                label: "④ヘリに足をかけて排泄",
                displayText: "④トイレのヘリに足をかけて排泄する",
                data: "4"
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
    let intent_name = "toilet_quiz_do_size";

    if(context.confirmed.quiz.data == "1" || context.confirmed.quiz.data == "2"){
      intent_name = "toilet_quiz_do_sand";
    }
    await bot.switch_skill({
      name: intent_name,
    });
  }
};

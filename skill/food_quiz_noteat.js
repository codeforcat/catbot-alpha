'use strict';
// 質問に対して選択肢の質問で答える形式
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
          if (["1", "2", "3"].includes(value.data)){
            return value;
          }
          throw new Error();
        },
        reaction: async (error, value, bot, event, context) => {
          console.log("FoodQuizNoEat reaction");
          if (error){
            bot.change_message_to_confirm("quiz", {
              type: "text",
              text: "選択肢を入れてほしいニャ。",
              // displayText: "選択肢を入れてほしいニャ。"
            });
          } else {
            let answer = `選択肢${value.data}だね。\n`;
            if(value.data == "1" || value.data == "2" || value.data == "3"){
              answer += "ピンポン！正解です。\n玉ねぎ、ネギ、にんにく、チョコレート、イカなど、人間の食べ物は塩気が多いのでだめです。あと、生ものも避けようね。";
            }else{
              answer += "ブッブー！不正解です。\n玉ねぎ、ネギ、にんにく、チョコレート、イカなど、人間の食べ物は塩気が多いのでだめです。あと、生ものも避けようね。";
            }
            console.log(answer);
            await bot.queue({
              type: "text",
              // displayText: answer
              text: "answer"
            });
          }
        }
      },
    };
  }

  // パラメーターが全部揃ったら実行する処理を記述します。
  async finish(bot, event, context) {
    await bot.switch_skill({
      name: "question_more"
    });
  }
};

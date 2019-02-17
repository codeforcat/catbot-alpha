'use strict';

module.exports = class ToiletAnswerWhere {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "人の出入りが少ない、猫が落ち着ける場所がいいですね。でも、いつもいるところからあんまり離れたとこだと、我慢しちゃうかも。"
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
        },
        parser: async (value, bot, event, context) => {
          if (["はい", "いいえ"].includes(value.data)){
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

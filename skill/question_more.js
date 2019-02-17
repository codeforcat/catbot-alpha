'use strict';

module.exports = class QuestionMore {

  // async begin(bot, event, context){
  //   await bot.queue({
  //     type: "text",
  //     text: "ネコの年齢や体調に合ったドライを選んでね。"
  //   });
  // }
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      more_quiz: {
        message_to_confirm: {
          type: "template",
          altText: "もっと質問あるにゃ？",
          template: {
            type: "confirm",
            text: "もっと質問あるにゃ？",
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

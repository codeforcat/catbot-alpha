'use strict';

module.exports = class AruaruAnswerFumifumi {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ふみふみは、赤ちゃん時代の思い出。\n" +
      "ネコは母乳を飲むとき、より母乳が出やすくなるように前脚で母親のおっぱいをマッサージするようにしながら飲みます。その時の心地よさや安心感を思い出すのか、大人になってからも、毛布や布団などのやわらかくて気持ちのいいものに触れると、ふみふみしたくなるみたいですね。"
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
            actions: [
              {
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
    let intents = ["aruaru_mame_grooming","aruaru_mame_bite","aruaru_mame_play","aruaru_select_kakaka","aruaru_select_kick","","","","","","",""];
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

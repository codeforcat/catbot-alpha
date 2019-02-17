'use strict';

module.exports = class ToiletQuizDoSize {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "そういう行動は、トイレの形や大きさが気に入らないときだよ。"
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
    let intents = ["toilet_mame_poohigh","","","","","","",""];
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

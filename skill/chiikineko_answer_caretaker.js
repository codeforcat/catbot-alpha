"use strict";

module.exports = class ChiikinekoAnswerCaretaker {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "①置きエサをしない\n" +
      "②不妊去勢手術をして増やさない\n" +
      "③トイレを設置する"
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
    let intents = ["chiikineko_mame_tnr","","",""];
    let intent_name = intents[Math.floor(Math.random()*intents.length)];
    if (context.confirmed.another_q.data == "はい") {
      await bot.switch_skill({
        name: "chiikineko_select"
      });
    } else {
      if (intent_name == "") {
        await bot.reply({
          type: "text",
          text: "また来てね！"
        });
      } else {
        await bot.switch_skill({
          name: intent_name
        });
      }
    }
  }
};

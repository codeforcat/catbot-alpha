'use strict';

module.exports = class EnviromentQuizLike {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      quiz: {
        message_to_confirm: {
          type: "template",
          altText: "ゴロゴロは何のサイン？",
          template: {
            type: "buttons",
            text: "ネコのゴロゴロって鳴き声は何のサインでしょう？",
            actions: [{
                type: "postback",
                label: "①ご機嫌",
                displayText: "①ご機嫌",
                data: "1"
              },
              {
                type: "postback",
                label: "②ご飯ちょうだい",
                displayText: "②ご飯ちょうだい",
                data: "2"
              },
              {
                type: "postback",
                label: "③カラダの具合が悪い",
                displayText: "③カラダの具合が悪い",
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
              text: "選択肢を入れてほしいニャ。"
            });
          }else{
            await bot.queue({
              type: "text",
              text: "全部正解だよ！\nゴロゴロという鳴き声には、いろんな意味があるよ。大体は、ご機嫌なときのゴロゴロなんだけど、「ご飯ちょうだい」などの要求がらみのものやカラダの具合が悪いときにもゴロゴロするので、気をつけて見ておいてね。"
            });
          }
        }
      },
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
    let intents = ["aruaru_mame_grooming","aruaru_mame_bite","aruaru_mame_play","","","","",""];
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

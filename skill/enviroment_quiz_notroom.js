'use strict';

module.exports = class EnviromentQuizLike {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      quiz: {
        message_to_confirm: {
          type: "template",
          altText: "部屋に置いちゃいけないもの？",
          template: {
            type: "buttons",
            text: "ネコと暮らすのに、部屋に置いちゃいけないものはどれでしょう？",
            actions: [{
                type: "postback",
                label: "①花・観葉植物",
                displayText: "①花・観葉植物",
                data: "1"
              },
              {
                type: "postback",
                label: "②アロマオイル・サプリメント",
                displayText: "②アロマオイル・サプリメント",
                data: "2"
              },
              {
                type: "postback",
                label: "③タバコ",
                displayText: "③タバコ",
                data: "3"
              },
              {
                type: "postback",
                label: "④柑橘系のニオイ",
                displayText: "④柑橘系のニオイ",
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
          }else{
            await bot.queue({
              type: "text",
              text: "全部正解だよ！\n①花・観葉植物\nゆり科、ネギ類など毒になる植物は数百種類もあるよ!\n②アロマオイル・サプリメント\nネコには刺激が強すぎるし、毒になることもあるよ！\n③タバコ\nもちろんダメだよ!\n④柑橘系のニオイ\n大嫌いだよ!"
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
    let intents = ["environment_mame_catforwarding","environment_mame_catforwarding","","","","","",""];
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

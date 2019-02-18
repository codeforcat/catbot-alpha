
'use strict';

module.exports = class FriendlyAnswerMeow {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ネコにはおよそ20通りの鳴き声があると言われています。次の鳴き声には、どんな意味があるかわかりますか？"
    });

    await bot.queue({
      type: "text",
      text: "①にゃ〜＝希望と要求\n" +
      "②ゴロゴロ＝リラックス\n" +
      "③ニャ＝返事と挨拶\n" +
      "④シャー＝威嚇\n" +
      "⑤ギャー＝痛い\n" +
      "⑥ウニャウニャ＝美味しい\n" +
      "⑦カカカカカ＝関心興奮\n" +
      "⑧アーオー＝発情期\n" +
      "⑨フーフッ＝ひと安心"
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
    let intents = ["friendly_mame_neckbell","friendly_mame_meowtype","friendly_mame_image","friendly_mame_howtohold","friendly_mame_matatabi","","","","","","",""];
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

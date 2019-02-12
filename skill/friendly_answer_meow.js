"use strict";

module.exports = class FriendlyAnswerMeow {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ネコにはおよそ20通りの鳴き声があると言われています。次の鳴き声には、どんな意味があるかわかりますか？"
    });

    await bot.reply({
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
};

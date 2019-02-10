"use strict";

module.exports = class FriendlyMameMeowtype {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.queue({
      type: "text",
      text: "豆知識だよ！"
    });

    await bot.reply({
      type: "text",
      text: "鳴き声リスト\n" +
      "1.にゃ〜＝希望と要求\n" +
      "2.ゴロゴロ＝リラックス\n" +
      "3.ニャ＝返事と挨拶\n" +
      "4.シャー＝威嚇\n" +
      "5.ギャー＝痛い\n" +
      "6.ウニャウニャ＝美味しい\n" +
      "7.カカカカカ＝関心興奮\n" +
      "8.アーオー＝発情期\n" +
      "9.フーフッ＝ひと安心"
    });
  }
};

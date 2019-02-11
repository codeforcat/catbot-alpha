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
      "①にゃ〜＝希望と要求\n" +
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

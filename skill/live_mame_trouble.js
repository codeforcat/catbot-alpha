"use strict";

module.exports = class LiveMameTrouble {
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
      text: "ネコにされて困ることベストテン\n" +
      "①マーキング\n" +
      "②爪とぎ\n" +
      "③トイレの不始末\n" +
      "④モノを隠すなくす\n" +
      "⑤暴れてモノを壊す\n" +
      "⑥噛みつく引っかく\n" +
      "⑦書類やトイペをぐしゃぐしゃに\n" +
      "⑧誤飲誤食\n" +
      "⑨朝早く起こす\n" +
      "⑩抜け毛"
    });
  }
};

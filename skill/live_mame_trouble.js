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
      "1.マーキング\n" +
      "2.爪とぎ\n" +
      "3.トイレの不始末\n" +
      "4.モノを隠すなくす\n" +
      "5.暴れてモノを壊す\n" +
      "6.噛みつく引っかく\n" +
      "7.書類やトイペをぐしゃぐしゃに\n" +
      "8.誤飲誤食\n" +
      "9.朝早く起こす\n" +
      "10.抜け毛"
    });
  }
};

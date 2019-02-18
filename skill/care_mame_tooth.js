"use strict";

module.exports = class CareMameTooth {
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
      text: "ネコの歯。\n" +
      "ネコには臼歯（きゅうし）、犬歯（けんし）、切歯（せっし）の3種類。30本の永久歯があります。"
    });
  }
};

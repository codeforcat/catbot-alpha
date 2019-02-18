"use strict";

module.exports = class FriendlyMameHowtohold {
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
      text: "ネコ思いな抱っこの仕方\n" +
      "①抱く前にひと声かける\n" +
      "②やさしく持ち上げる\n" +
      "③包み込むように抱く\n" +
      "④ゆっくり降ろす"
    });
  }
};

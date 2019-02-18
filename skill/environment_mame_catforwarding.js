"use strict";

module.exports = class EnvironmentMameCatforwarding {
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
      text: "ネコ転送装置。\n" +
      "どこかに転送されたい訳ではなく、ネコは、縄張り意識が強いので、見慣れないものがあるとチェックして、安全だとわかるとその中に入って、居心地を確認するのだ。"
    });
  }
};

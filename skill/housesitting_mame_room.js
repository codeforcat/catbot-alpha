"use strict";

module.exports = class HousesittingMameRoom {
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
      text: "完全室内飼いをお願いします。\n" +
      "外には３つのリスクがあります。\n" +
      "①交通事故リスク\n" +
      "②誰かから虐待を受けるリスク\n" +
      "③伝染病のリスク（野良猫との接触から。草むらからノミ・ダニ）"
    });
  }
};

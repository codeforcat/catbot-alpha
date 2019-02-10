"use strict";

module.exports = class AruaruMameGrooming {
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
      text: "喧嘩の後の毛づくろいは、興奮状態を抑えて、仕切り直すための儀式みたいなもんだね。"
    });
  }
};

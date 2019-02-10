"use strict";

module.exports = class CareMameToothstay {
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
      text: "じっとさせる方法。\n" +
      "ネコを後ろから抱えるようにして、少し上を向かせて口を開けさせます。切歯から少しずつ奥に進めるといいでしょう。抵抗にめげず、しっかりケアしましょう。"
    });
  }
};

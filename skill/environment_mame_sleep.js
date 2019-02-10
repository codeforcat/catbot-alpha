"use strict";

module.exports = class EnvironmentMameSleep {
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
      text: "ネコの平均睡眠時間は16時間。\n" +
      "ネコは狩りのとき以外寝ていた野生時代の習性の名残で、一日16時間くらい寝るよ。でも、そのうちの12時間くらいは、眠りの浅いうたた寝状態だぞ。"
    });
  }
};

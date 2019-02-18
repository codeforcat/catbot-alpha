"use strict";

module.exports = class ToiletMamePoohigh {
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
      text: "ウンチハイ。\n" +
      "ネコは排泄物を隠す習性があるので、その臭いが嫌で遠くまで走るという説があります。"
    });
  }
};

"use strict";

module.exports = class CareMameCatgrass {
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
      text: "猫草。\n" +
      "ネコは毛玉を吐くために猫草を食べるのではなく、捕まえた獲物の毛をむしる行為の代替えだと言われています。"
    });
  }
};

"use strict";

module.exports = class FriendlyMameNeckbell {
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
      text: "首の鈴。\n" +
      "ネコにとってすごいストレスのはず。ネコは毎日同じ時間同じ場所にいるはずなので、鈴をつける理由がわかりません。"
    });
  }
};

"use strict";

module.exports = class FoodMameMilk {
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
      text: "牛乳はダメ。\n" +
      "ネコは乳糖を分解できないので、ネコ用のミルクにしてね。"
    });
  }
};

"use strict";

module.exports = class FoodMameWater {
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
      text: "飲み過ぎは腎臓病の疑い？水を飲む量と尿の量が増えてきたら腎臓病を疑いましょう。かかりつけのお医者さんに相談してみてください。"
    });
  }
};
